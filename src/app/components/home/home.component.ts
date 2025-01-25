
import { Component, OnInit, Signal, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { SEOService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private languageService = inject(LanguageService);
  private seoService = inject(SEOService);

  languageRO: Signal<boolean>;
  constructor() {
    this.languageRO = this.languageService.language;
  }

  ngOnInit(): void {
    this.seoService.createLinkForCanonicalURL();
    this.seoService.updateMetaDescription(
      'Imalo Education este un program tip afterschool pe limba germana din Sibiu unde copilul Dvs. va fi întâmpinat cu toată căldura și atenția noastră.',
    );
  }
}
