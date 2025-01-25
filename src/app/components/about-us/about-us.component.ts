
import { Component, OnInit, Signal, inject } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { SEOService } from '../../services/seo.service';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent implements OnInit {
  private languageService = inject(LanguageService);
  private seoService = inject(SEOService);

  languageRO: Signal<boolean>;

  constructor() {
    this.languageRO = this.languageService.language;
  }

  ngOnInit(): void {
    this.seoService.createLinkForCanonicalURL();
    this.seoService.updateMetaDescription(
      'Imalo Education este un centru educativ în limba germana dedicat elevilor din clasele primare - de la clasa pregătitoare până la clasa a IV-a. Imalo Education oferă copilului tău un mediu sigur și relaxant în care să învețe, să se dezvolte și să se exprime liber. Activitățile se desfășoară exclusiv în limba germană, pentru a-i îmbogăți vocabularul și exprimarea.',
    );
  }
}
