import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { transformIn, transformOut } from '../../animations';
import { GalleryImage } from '../../interfaces/gallery-image';
import { LanguageService } from '../../services/language.service';
import { LoadGalleryService } from '../../services/load-gallery.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  animations: [transformIn, transformOut],
})
export class GalleryComponent implements OnInit {
  public galleryImageList: GalleryImage[] = [];

  currentIndex: number = -1;
  isFullViewOpen: boolean = false;
  languageRO: boolean = true;
  languageDE: boolean = false;

  constructor(
    private loadGalleryService: LoadGalleryService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.languageService.currentROLanguage$.subscribe((currentLang) => {
      this.languageRO = currentLang;
      this.languageDE = !currentLang;
    });

    this.displayGalleryContent();
  }

  displayGalleryContent() {
    this.loadGalleryService.loadGallery().subscribe((fetchedImages) => {
      this.galleryImageList = fetchedImages;
    });
  }

  openFullView(index: number) {
    this.currentIndex = index;
    this.isFullViewOpen = true;
  }

  closeFullView() {
    this.isFullViewOpen = false;
  }

  navigateLeft() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  navigateRight() {
    if (this.currentIndex < this.galleryImageList.length - 1) {
      this.currentIndex++;
    }
  }
}
