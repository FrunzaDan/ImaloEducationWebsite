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
    private languageService: LanguageService
  ) {}

  submitted = false;

  isEmailModalOpen: boolean = false;

  contactMeForm = new FormGroup({
    from_name: new FormControl('', [Validators.required]),
    from_email: new FormControl('', [Validators.required, Validators.email]),
    from_tel: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]{9,12}$'),
    ]),
    from_message: new FormControl('', [Validators.required]),
  });

  get f() {
    return this.contactMeForm.controls;
  }

  ngOnInit(): void {
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

    this.emailPopUpHeader = 'Bună, ' + this.contactMeForm.value.from_name;
    this.emailPopUpParagraph = 'Se trimite...';

    let responseCodePromise: Promise<number> =
      this.sendEmailService.sendEmailJS(
        this.contactMeForm.value as ContactMeForm
      );
    responseCodePromise.then((responseCode) => {
      if (responseCode === 200) {
        this.contactMeForm.reset();
        this.contactMeForm.controls.from_name.setErrors(null);
        this.contactMeForm.controls.from_email.setErrors(null);
        this.contactMeForm.controls.from_tel.setErrors(null);
        this.contactMeForm.controls.from_message.setErrors(null);
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
