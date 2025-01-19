import { CommonModule } from '@angular/common';
import { Component, OnInit, Signal } from '@angular/core';
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
import { SEOService } from '../../services/seo.service';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
  animations: [transformIn, transformOut],
})
export class ContactComponent implements OnInit {
  emailPopUpHeader!: string;
  emailPopUpParagraph!: string;
  submitted: boolean = false;
  isEmailModalOpen: boolean = false;
  languageRO: Signal<boolean>;

  constructor(
    private sendEmailService: SendEmailService,
    private languageService: LanguageService,
    private seoService: SEOService
  ) {
    this.languageRO = this.languageService.language;
  }

  contactMeForm = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required, Validators.minLength(2)],
      nonNullable: true,
    }),
    email: new FormControl('', {
      validators: [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$'),
      ],
      nonNullable: true,
    }),
    phone: new FormControl('', {
      validators: [Validators.required, Validators.pattern('^[0-9]{9,12}$')],
      nonNullable: true,
    }),
    message: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(1000),
      ],
      nonNullable: true,
    }),
  });

  get f() {
    return this.contactMeForm.controls;
  }

  ngOnInit(): void {
    this.seoService.createLinkForCanonicalURL();
    this.seoService.updateMetaDescription(
      'Pagina de contact Imalo Education, afterschool pe limba germana din Sibiu.'
    );
  }

  onSubmit(): void {
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
    responseCodePromise.then((responseCode: number): void => {
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

  closeEmailModal(): void {
    this.isEmailModalOpen = false;
  }
}
