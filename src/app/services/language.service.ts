import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languageROSubject = new BehaviorSubject<boolean>(true);

  currentROLanguage$ = this.languageROSubject.asObservable();

  changeLanguage(): void {
    const currentROLang = this.languageROSubject.getValue();
    this.languageROSubject.next(currentROLang === true ? false : true);
  }
}
