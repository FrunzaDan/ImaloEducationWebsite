import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LanguageService } from '../../services/language.service';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  languageRO: boolean = true;
  languageDE: boolean = false;

  constructor(private languageService: LanguageService, private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Imalo Education este un program tip after-school din Sibiu unde copilul Dvs. va fi întâmpinat cu toată căldura și atenția noastră. Viziunea noastră este de a ne asigura că fiecare copil primește atenția și îngrijirea pe care o merită cu adevărat. ',
    });
    this.languageService.currentROLanguage$.subscribe((currentLang) => {
      this.languageRO = currentLang;
      this.languageDE = !currentLang;
    });
  }
}
