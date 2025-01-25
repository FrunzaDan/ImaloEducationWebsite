import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, Signal, inject } from '@angular/core';
import { fadeIn, fadeOut, transformIn, transformOut } from '../../animations';
import { GalleryImage } from '../../interfaces/gallery-image';
import { LanguageService } from '../../services/language.service';
import { LoadGalleryService } from '../../services/load-gallery.service';
import { SEOService } from '../../services/seo.service';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  animations: [transformIn, transformOut, fadeIn, fadeOut],
})
export class GalleryComponent implements OnInit {
  private loadGalleryService = inject(LoadGalleryService);
  private languageService = inject(LanguageService);
  private seoService = inject(SEOService);

  galleryImageList: GalleryImage[] = [];
  languageRO: Signal<boolean>;
  currentIndex = -1;
  isFullViewOpen = false;

  private touchStartX = 0;
  private touchEndX = 0;

  constructor() {
    this.languageRO = this.languageService.language;
  }

  ngOnInit(): void {
    this.seoService.createLinkForCanonicalURL();
    this.seoService.updateMetaDescription(
      'Galeria Imalo Education, afterschool pe limba germana din Sibiu.',
    );

    this.galleryImageList = this.loadGalleryService.loadGallery(); // Load images directly
  }

  openFullView(index: number): void {
    this.currentIndex = index;
    this.isFullViewOpen = true;
  }

  closeFullView(): void {
    this.isFullViewOpen = false;
  }

  navigateLeft(): void {
    this.currentIndex = Math.max(0, this.currentIndex - 1);
  }

  navigateRight(): void {
    this.currentIndex = Math.min(
      this.galleryImageList.length - 1,
      this.currentIndex + 1,
    );
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (this.isFullViewOpen) {
      switch (event.key) {
        case 'ArrowLeft':
          this.navigateLeft();
          break;
        case 'ArrowRight':
          this.navigateRight();
          break;
        case 'Escape':
          this.closeFullView();
          break;
      }
    }
  }

  // Handle touch events for swipe navigation
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent): void {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe(): void {
    if (this.touchStartX - this.touchEndX > 50) {
      // Swipe Left
      this.navigateRight();
    }

    if (this.touchEndX - this.touchStartX > 50) {
      // Swipe Right
      this.navigateLeft();
    }
  }
}
