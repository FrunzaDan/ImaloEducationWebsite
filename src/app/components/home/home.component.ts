import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { SEOService } from '../../services/seo.service';

@Component({
    selector: 'app-home',
    imports: [RouterModule, CommonModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  languageRO: boolean = true;
  languageDE: boolean = false;

  constructor(
    private languageService: LanguageService,
    private seoService: SEOService
  ) {}

  ngOnInit(): void {
    this.seoService.createLinkForCanonicalURL();
    this.seoService.updateMetaDescription(
      'Imalo Education este un program tip afterschool pe limba germana din Sibiu unde copilul Dvs. va fi întâmpinat cu toată căldura și atenția noastră. Viziunea noastră este de a ne asigura că fiecare copil primește atenția și îngrijirea pe care o merită cu adevărat. Misiunea noastră este de a acorda copiilor abilitățile și încrederea necesară pentru a naviga provocările de mâine.'
    );
    this.languageService.currentROLanguage$.subscribe((currentLang) => {
      this.languageRO = currentLang;
      this.languageDE = !currentLang;
    });
  }
}
