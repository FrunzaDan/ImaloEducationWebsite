import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { transformIn, transformOut } from '../../animations';
import { ContactMeForm } from '../../interfaces/contact-me-form';
import { LanguageService } from '../../services/language.service';
import { SendEmailService } from '../../services/send-email.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations: [transformIn, transformOut],
})
export class ContactComponent implements OnInit {
  languageRO: boolean = true;
  languageDE: boolean = false;

  emailPopUpHeader!: string;
  emailPopUpParagraph!: string;
  constructor(
    private sendEmailService: SendEmailService,
    private languageService: LanguageService,
    private meta: Meta
  ) {}

  submitted = false;

  isEmailModalOpen: boolean = false;

  contactMeForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{9,12}$'),
    ]),
    message: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.contactMeForm.controls;
  }

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'The contact info of Imalo Education Sibiu',
    });

    this.languageService.currentROLanguage$.subscribe((currentLang) => {
      this.languageRO = currentLang;
      this.languageDE = !currentLang;
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.contactMeForm.invalid) {
      return;
    }

    this.isEmailModalOpen = true;

    this.emailPopUpHeader = 'Bună, ' + this.contactMeForm.value.name;
    this.emailPopUpParagraph = 'Se trimite...';

    let responseCodePromise: Promise<number> =
      this.sendEmailService.sendEmailJS(
        this.contactMeForm.value as ContactMeForm
      );
    responseCodePromise.then((responseCode) => {
      if (responseCode === 200) {
        this.contactMeForm.reset();
        this.contactMeForm.controls.name.setErrors(null);
        this.contactMeForm.controls.email.setErrors(null);
        this.contactMeForm.controls.phone.setErrors(null);
        this.contactMeForm.controls.message.setErrors(null);
        this.emailPopUpParagraph = 'Mesajul tău a fost trimis cu succes! ';
      } else {
        this.emailPopUpParagraph =
          '(' +
          responseCode +
          ') ' +
          'Serverele noastre sunt pline, te rog să trimiți un E-mail către imaloeducation@gmail.com. ';
      }
    });
  }

  closeEmailModal() {
    this.isEmailModalOpen = false;
  }
}
