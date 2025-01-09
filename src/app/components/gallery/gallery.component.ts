import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { fadeIn, fadeOut, transformIn, transformOut } from '../../animations';
import { GalleryImage } from '../../interfaces/gallery-image';
import { LanguageService } from '../../services/language.service';
import { LoadGalleryService } from '../../services/load-gallery.service';
import { SEOService } from '../../services/seo.service';
import { SubscriptionService } from '../../services/subscription.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  animations: [transformIn, transformOut, fadeIn, fadeOut],
})
export class GalleryComponent implements OnInit, OnDestroy {
  public galleryImageList: GalleryImage[] = [];
  private gallerySubscription?: Subscription;

  currentIndex: number = -1;
  isFullViewOpen: boolean = false;
  languageRO: boolean = true;
  languageDE: boolean = false;

  constructor(
    private loadGalleryService: LoadGalleryService,
    private languageService: LanguageService,
    private seoService: SEOService,
    private subscriptionService: SubscriptionService
  ) {}

  ngOnInit(): void {
    this.seoService.createLinkForCanonicalURL();
    this.seoService.updateMetaDescription(
      'Galeria Imalo Education, afterschool pe limba germana din Sibiu.'
    );
    this.languageService.currentROLanguage$.subscribe((currentLang) => {
      this.languageRO = currentLang;
      this.languageDE = !currentLang;
    });

    this.displayGalleryContent();
  }

  async displayGalleryContent(): Promise<void> {
    if (this.galleryImageList.length === 0) {
      this.gallerySubscription = this.loadGalleryService
        .loadGallery()
        .subscribe((fetchedImages: GalleryImage[]): void => {
          this.galleryImageList = fetchedImages;
        });
    }
  }

  openFullView(index: number): void {
    this.currentIndex = index;
    this.isFullViewOpen = true;
  }

  closeFullView(): void {
    this.isFullViewOpen = false;
  }

  navigateLeft(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  navigateRight(): void {
    if (this.currentIndex < this.galleryImageList.length - 1) {
      this.currentIndex++;
    }
  }

  ngOnDestroy(): void {
    this.subscriptionService.unsubscribeIfActive(this.gallerySubscription);
  }
}
