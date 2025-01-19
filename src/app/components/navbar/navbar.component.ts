import { CommonModule } from '@angular/common';
import { Component, Signal, effect } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  toggleLanguageForm: FormGroup;
  languageRO: Signal<boolean>;

  constructor(private languageService: LanguageService) {
    this.languageRO = this.languageService.language;

    this.toggleLanguageForm = new FormGroup({
      isGermanLang: new FormControl(!this.languageRO()),
    });

    effect(() => {
      const isRomanian = this.languageRO();
      this.toggleLanguageForm
        .get('isGermanLang')
        ?.setValue(!isRomanian, { emitEvent: false });
    });

    this.toggleLanguageForm
      .get('isGermanLang')
      ?.valueChanges.subscribe((val) => {
        if (val !== !this.languageRO()) {
          this.toggleLanguage();
        }
      });
  }

  toggleLanguage(): void {
    this.languageService.toggleLanguage();
  }
}
