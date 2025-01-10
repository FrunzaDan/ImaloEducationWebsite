import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly languageSubject = new BehaviorSubject<boolean>(true);
  readonly language$ = this.languageSubject.asObservable();

  toggleLanguage(): void {
    this.languageSubject.next(!this.languageSubject.value);
  }
}
