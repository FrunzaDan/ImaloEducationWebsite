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
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  toggleLanguageForm!: FormGroup;
  languageRO$: Observable<boolean>;

  constructor(private languageService: LanguageService) {
    this.languageRO$ = this.languageService.language$;
  }

  ngOnInit(): void {
    this.toggleLanguageForm = new FormGroup({
      isGermanLang: new FormControl(false),
    });

    this.toggleLanguageForm
      .get('isGermanLang')
      ?.valueChanges.subscribe(() => this.languageService.toggleLanguage());
  }
}
