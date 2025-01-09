import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GalleryImage } from '../interfaces/gallery-image';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';

@Injectable({
  providedIn: 'root',
})
export class LoadGalleryService {
  constructor(private http: HttpClient) {}

  async loadGallery(): Promise<GalleryImage[]> {
    return await firstValueFrom(
      this.http.get<GalleryImage[]>('../../assets/galleryImages.json')
    );
  }
}
