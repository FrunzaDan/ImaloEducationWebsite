import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { transformIn, transformOut } from '../../animations';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-offers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css',
  animations: [transformIn, transformOut],
})
export class OffersComponent implements OnInit {
  isCourseModalOpen: boolean = false;
  languageRO: boolean = true;
  languageDE: boolean = false;

  constructor(
    private languageService: LanguageService,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {
    this.languageService.currentROLanguage$.subscribe((currentLang) => {
      this.languageRO = currentLang;
      this.languageDE = !currentLang;
    });
  }

  openCourseModal() {
    this.isCourseModalOpen = true;
  }

  closeCourseModal() {
    this.isCourseModalOpen = false;
  }

  public scrollToSection(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
