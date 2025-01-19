import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly languageSignal = signal(true);

  get language() {
    return this.languageSignal;
  }

  toggleLanguage(): void {
    this.languageSignal.set(!this.languageSignal());
  }
}
