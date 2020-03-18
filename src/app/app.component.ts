import { Component } from '@angular/core';

declare var app;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  title = 'funccionesphp';
  boxMsgs:any = null;

  ngOnInit(){

  	this.boxMsgs = app.getById('service-msg'); 
  
  }
}
