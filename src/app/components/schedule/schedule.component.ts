import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { SEOService } from '../../services/seo.service';

@Component({
    selector: 'app-schedule',
    imports: [CommonModule],
    templateUrl: './schedule.component.html',
    styleUrl: './schedule.component.css'
})
export class ScheduleComponent implements OnInit {
  languageRO: boolean = true;
  languageDE: boolean = false;

  constructor(
    private languageService: LanguageService,
    private seoService: SEOService
  ) {}

  ngOnInit(): void {
    this.seoService.createLinkForCanonicalURL();
    this.seoService.updateMetaDescription(
      'Pagina cu programul Imalo Education, afterschool pe limba germana din Sibiu.'
    );
    this.languageService.currentROLanguage$.subscribe((currentLang) => {
      this.languageRO = currentLang;
      this.languageDE = !currentLang;
    });
  }
}
