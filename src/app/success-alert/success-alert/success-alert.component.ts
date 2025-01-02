import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  standalone: true,
  imports: [],
  template: '<p>This is a success, you are in heaven</p>',
  // styleUrl: './success-alert.component.css'
  styles:[
      `
      p {
          padding:20px;
          background-color:palegreen;
          border:1px solid green;
      }
      `
  ]
})
export class SuccessAlertComponent {

}
