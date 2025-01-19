import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly languageROSignal = signal(true);

  get language() {
    return this.languageROSignal;
  }

  toggleLanguage(): void {
    this.languageROSignal.set(!this.languageROSignal());
  }
}
