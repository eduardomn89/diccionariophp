import { Component, OnInit } from '@angular/core';

declare var app:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  	constructor() { }

  	ngOnInit() {
  	
  	}

  	open_add_form(){

      app.objects.addForm.open_form();

  	}


}