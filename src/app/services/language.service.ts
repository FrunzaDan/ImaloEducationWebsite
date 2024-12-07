import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly languageROSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(true);

  readonly currentROLanguage$: Observable<boolean> =
    this.languageROSubject.asObservable();

  changeLanguage(): void {
    this.languageROSubject.next(!this.languageROSubject.getValue());
  }
}
