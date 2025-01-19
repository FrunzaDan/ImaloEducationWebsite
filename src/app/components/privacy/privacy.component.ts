import { Component, OnInit } from '@angular/core';
import { SEOService } from '../../services/seo.service';

@Component({
  selector: 'app-privacy',
  imports: [],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css',
})
export class PrivacyComponent implements OnInit {
  constructor(private seoService: SEOService) {}

  ngOnInit(): void {
    this.seoService.createLinkForCanonicalURL();
    this.seoService.updateMetaDescription(
      'Pagina termenilor Imalo Education, afterschool pe limba germana din Sibiu.',
    );
  }
}
