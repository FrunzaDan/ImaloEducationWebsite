import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { GalleryImage } from '../interfaces/gallery-image';

@Injectable({
  providedIn: 'root',
})
export class LoadGalleryService {
  constructor(private http: HttpClient) {}

  loadGallery(): Observable<GalleryImage[]> {
    return this.http
      .get<GalleryImage[]>('../../assets/galleryImages.json')
      .pipe(
        map((galleryImages: GalleryImage[]): GalleryImage[] => galleryImages)
      );
  }
}
