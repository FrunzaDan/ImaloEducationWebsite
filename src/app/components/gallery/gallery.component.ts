import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, Signal } from '@angular/core';
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
  languageRO: Signal<boolean>;

  currentIndex: number = -1;
  isFullViewOpen: boolean = false;

  constructor(
    private loadGalleryService: LoadGalleryService,
    private languageService: LanguageService,
    private seoService: SEOService,
    private subscriptionService: SubscriptionService
  ) {
    this.languageRO = this.languageService.language;
  }

  async ngOnInit(): Promise<void> {
    this.seoService.createLinkForCanonicalURL();
    this.seoService.updateMetaDescription(
      'Galeria Imalo Education, afterschool pe limba germana din Sibiu.'
    );

    this.galleryImageList = await this.loadGalleryService.loadGallery();
  }

  readonly openFullView = (index: number) => {
    this.currentIndex = index;
    this.isFullViewOpen = true;
  };

  readonly closeFullView = () => {
    this.isFullViewOpen = false;
  };

  readonly navigateLeft = () => {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  };

  readonly navigateRight = () => {
    if (this.currentIndex < this.galleryImageList.length - 1) {
      this.currentIndex++;
    }
  };

  ngOnDestroy(): void {
    this.subscriptionService.unsubscribeIfActive(this.gallerySubscription);
  }
}
