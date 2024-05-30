import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SEOService {
  constructor(@Inject(DOCUMENT) private doc: any, private meta: Meta) {}

  updateMetaDescription(metaDescription: string): void {
    this.meta.updateTag({
      name: 'description',
      content: metaDescription,
    });
  }

  createLinkForCanonicalURL(): void {
    this.removeExistingCanonicalLink();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.doc.head.appendChild(link);
    link.setAttribute('href', this.doc.URL + '/');
  }

  private removeExistingCanonicalLink(): void {
    const existingLinks = this.doc.head.querySelectorAll(
      'link[rel="canonical"]'
    );

    for (let i = 0; i < existingLinks.length; i++) {
      this.doc.head.removeChild(existingLinks[i]);
    }
  }
}
