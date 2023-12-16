import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentYear = new Date().getFullYear();

  title = 'glev';

  scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
}
