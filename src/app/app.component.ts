import { Component } from '@angular/core';

const COMPLETE_PAGES = [
  '/curriculum'
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mysite-front-end';

  pathname = window.location.pathname;
  isCompletePage = COMPLETE_PAGES.includes(this.pathname);
}
