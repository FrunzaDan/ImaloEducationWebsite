import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SEOService {
  constructor(@Inject(DOCUMENT) private doc: Document, private meta: Meta) {}

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

    let firebaselink: string = 'https://imalo-education.web.app';
    let canonicalURL: string = this.doc.URL;
    if (!canonicalURL.startsWith(firebaselink)) {
      canonicalURL = firebaselink + canonicalURL;
    }
    link.setAttribute('href', canonicalURL);
  }

  private removeExistingCanonicalLink(): void {
    const existingLinks: NodeListOf<Element> = this.doc.head.querySelectorAll(
      'link[rel="canonical"]'
    );

    for (let i: number = 0; i < existingLinks.length; i++) {
      this.doc.head.removeChild(existingLinks[i]);
    }
  }
}
