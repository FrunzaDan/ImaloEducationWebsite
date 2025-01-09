import { CommonModule, ViewportScroller } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { fadeIn, fadeOut, transformIn, transformOut } from '../../animations';
import { LanguageService } from '../../services/language.service';
import { SEOService } from '../../services/seo.service';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-offers',
  imports: [CommonModule],
  templateUrl: './offers.component.html',
  styleUrl: './offers.component.css',
  animations: [transformIn, transformOut, fadeIn, fadeOut],
})
export class OffersComponent implements OnInit, OnDestroy {
  isCourseModalOpen: boolean = false;
  courseTitle?: string;
  languageRO$: Observable<boolean>;

  constructor(
    private languageService: LanguageService,
    private viewportScroller: ViewportScroller,
    private seoService: SEOService
  ) {
    this.languageRO$ = this.languageService.language$;
  }

  ngOnInit(): void {
    this.seoService.createLinkForCanonicalURL();
    this.seoService.updateMetaDescription(
      'Pagina cu oferte Imalo Education, afterschool pe limba germana din Sibiu.'
    );
  }

  ngOnDestroy(): void {
    this.courseTitle = undefined;
  }

  openCourseModal(selectedCourseTitile?: string): void {
    this.isCourseModalOpen = true;
    this.courseTitle = selectedCourseTitile;
  }

  closeCourseModal(): void {
    this.isCourseModalOpen = false;
    this.courseTitle = undefined;
  }

  public scrollToSection(elementId: string): void {
    this.viewportScroller.scrollToAnchor(elementId);
  }
}
