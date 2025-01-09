import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { SEOService } from '../../services/seo.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-schedule',
  imports: [CommonModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css',
})
export class ScheduleComponent implements OnInit {
  languageRO$: Observable<boolean>;

  constructor(
    private languageService: LanguageService,
    private seoService: SEOService
  ) {
    this.languageRO$ = this.languageService.language$;
  }

  ngOnInit(): void {
    this.seoService.createLinkForCanonicalURL();
    this.seoService.updateMetaDescription(
      'Pagina cu programul Imalo Education, afterschool pe limba germana din Sibiu.'
    );
  }
}
