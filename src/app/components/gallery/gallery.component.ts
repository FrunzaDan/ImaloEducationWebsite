import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, Signal } from '@angular/core';
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
  public galleryImageList: GalleryImage[] = [];
  languageRO: Signal<boolean>;

  currentIndex: number = -1;
  isFullViewOpen: boolean = false;

  // Variables for swipe detection
  private touchStartX: number = 0;
  private touchEndX: number = 0;

  constructor(
    private loadGalleryService: LoadGalleryService,
    private languageService: LanguageService,
    private seoService: SEOService,
  ) {
    this.languageRO = this.languageService.language;
  }

  ngOnInit(): void {
    this.seoService.createLinkForCanonicalURL();
    this.seoService.updateMetaDescription(
      'Galeria Imalo Education, afterschool pe limba germana din Sibiu.',
    );

    this.galleryImageList = this.loadGalleryService.loadGallery(); // Load images directly
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
