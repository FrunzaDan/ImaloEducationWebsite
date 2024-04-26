import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Analytics } from '@angular/fire/analytics';
import { RouterOutlet } from '@angular/router';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ScheduleComponent } from './components/schedule/schedule.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    BackToTopComponent,
    CommonModule,
    RouterOutlet,
    GalleryComponent,
    ScheduleComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'Imalo Education';

  constructor(private fireAnalytics: Analytics) {}

  ngOnInit() {}
}
