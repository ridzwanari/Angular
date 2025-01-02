import { Component } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  standalone: true,
  imports: [],
  template: '<p>This is a warning, you are in danger</p>',
  // styleUrl: './success-alert.component.css'
  styles:[
      `
      p {
          padding:20px;
          background-color:mistyrose;
          border:1px solid red;
      }
      `
  ]
})
export class WarningAlertComponent {

}
