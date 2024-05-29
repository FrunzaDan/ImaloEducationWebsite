import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class SEOService {
  constructor(@Inject(DOCUMENT) private doc: any) {}

  createLinkForCanonicalURL() {
    this.removeExistingCanonicalLink();
    let link: HTMLLinkElement = this.doc.createElement('link');
    link.setAttribute('rel', 'canonical');
    this.doc.head.appendChild(link);
    link.setAttribute('href', this.doc.URL + '/');
  }

  private removeExistingCanonicalLink() {
    const existingLinks = this.doc.head.querySelectorAll(
      'link[rel="canonical"]'
    );

    for (let i = 0; i < existingLinks.length; i++) {
      this.doc.head.removeChild(existingLinks[i]);
    }
  }
}
