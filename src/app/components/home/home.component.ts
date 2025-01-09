import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { SEOService } from '../../services/seo.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-home',
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
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
      'Imalo Education este un program tip afterschool pe limba germana din Sibiu unde copilul Dvs. va fi întâmpinat cu toată căldura și atenția noastră.'
    );
  }
}
