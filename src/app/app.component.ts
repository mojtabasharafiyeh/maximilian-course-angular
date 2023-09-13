import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    `
      h3 {
        color: red;
      }
    `,
    `
      p {
        color: green;
      }
    `,
  ],
})
export class AppComponent {
  title = 'my-app';
}
