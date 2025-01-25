import { Injectable } from '@angular/core';
import { GalleryImage } from '../interfaces/gallery-image';
import galleryData from '../../../public/assets/galleryImages.json'; // Importing the JSON data directly

@Injectable({
  providedIn: 'root',
})
export class LoadGalleryService {
  loadGallery(): GalleryImage[] {
    return galleryData;
  }
}
