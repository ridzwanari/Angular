import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-server',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {

  allowNewServer = false;
  opensesamy="Kau nak ape ha!!!";
  addUser="";
  name='';

  constructor(){
    setTimeout(()=>{this.allowNewServer=true},2000);
  }

  ngOnInit(){

  }

  filter(){

    this.name='';
    this.addUser = ''; // Clear the addUser message
  }

  add(){

    this.addUser= `User budak baru bername===> ${this.name} eeee busuk`;
  }

}
