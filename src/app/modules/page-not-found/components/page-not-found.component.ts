import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-protected-page',
  standalone: true,
  imports: [],
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
})
export default class PageNotFound {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
