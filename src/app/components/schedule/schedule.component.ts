import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-schedule',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css',
})
export class ScheduleComponent implements OnInit {
  languageRO: boolean = true;
  languageDE: boolean = false;

  constructor(private languageService: LanguageService, private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'The schedule of Imalo Education Sibiu',
    });
    this.languageService.currentROLanguage$.subscribe((currentLang) => {
      this.languageRO = currentLang;
      this.languageDE = !currentLang;
    });
  }
}
