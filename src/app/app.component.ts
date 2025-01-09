import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, FooterComponent, BackToTopComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'Imalo Education';
}
