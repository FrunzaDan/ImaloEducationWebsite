import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent implements OnInit {
  languageRO: boolean = true;
  languageDE: boolean = false;

  constructor(private languageService: LanguageService, private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'The about-us info of Imalo Education Sibiu',
    });
    this.languageService.currentROLanguage$.subscribe((currentLang) => {
      this.languageRO = currentLang;
      this.languageDE = !currentLang;
    });
  }
}
