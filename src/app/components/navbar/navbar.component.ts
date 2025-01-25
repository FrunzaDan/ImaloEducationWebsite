import { CommonModule } from '@angular/common';
import { Component, Signal, effect } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
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
      const isGerman = !isRomanian;
      if (this.toggleLanguageForm.get('isGermanLang')?.value !== isGerman) {
        this.toggleLanguageForm.get('isGermanLang')?.setValue(isGerman, {
          emitEvent: false,
        });
      }
    });

    this.toggleLanguageForm
      .get('isGermanLang')
      ?.valueChanges.subscribe((val) => {
        if (val !== !this.languageRO()) {
          this.languageService.toggleLanguage();
        }
      });
  }
}
