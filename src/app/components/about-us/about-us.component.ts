import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { SEOService } from '../../services/seo.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-about-us',
  imports: [CommonModule],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent implements OnInit {
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
      'Imalo Education este un centru educativ în limba germana dedicat elevilor din clasele primare - de la clasa pregătitoare până la clasa a IV-a. Imalo Education oferă copilului tău un mediu sigur și relaxant în care să învețe, să se dezvolte și să se exprime liber. Activitățile se desfășoară exclusiv în limba germană, pentru a-i îmbogăți vocabularul și exprimarea.'
    );
  }
}
