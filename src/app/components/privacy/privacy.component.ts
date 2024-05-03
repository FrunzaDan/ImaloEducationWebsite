import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.css',
})
export class PrivacyComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content: 'The Privacy Statement of Imalo Education Sibiu',
    });
  }
}
