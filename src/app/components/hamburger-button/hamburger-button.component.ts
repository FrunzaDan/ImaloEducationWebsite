import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hamburger-button',
  templateUrl: './hamburger-button.component.html',
  styleUrls: ['./hamburger-button.component.css'],
})
export class HamburgerButtonComponent {
  @Input() isOpen = false;
  @Output() toggleMenu = new EventEmitter<boolean>();

  toggleNavbar() {
    this.isOpen = !this.isOpen;
    this.toggleMenu.emit(this.isOpen);
  }
}
