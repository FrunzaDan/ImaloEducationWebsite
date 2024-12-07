import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  languageRO: boolean = true;
  languageDE: boolean = false;
  toggleLanguageForm!: FormGroup;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.toggleLanguageForm = new FormGroup({
      isGermanLang: new FormControl(false),
    });
    this.toggleLanguageForm
      .get('isGermanLang')
      ?.valueChanges.subscribe((value) => {
        this.changeLanguage();
      });
    this.getLanguage();
  }

  getLanguage(): void {
    this.languageService.currentROLanguage$.subscribe((currentLang) => {
      this.languageRO = currentLang;
      this.languageDE = !currentLang;
    });
  }

  changeLanguage(): void {
    this.languageService.changeLanguage();
  }
}
