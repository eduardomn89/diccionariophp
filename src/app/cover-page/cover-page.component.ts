import { Component, OnInit } from '@angular/core';

declare var app:any;

@Component({
  selector: 'app-cover-page',
  templateUrl: './cover-page.component.html',
  styleUrls: ['./cover-page.component.css']
})

export class CoverPageComponent implements OnInit {
	
	  coverPage:any;

  	constructor() { }

  	ngOnInit() {
 	
 		   this.coverPage = app.getById('cover-page'); 
  		
  		 app.dom.coverPage = this.coverPage;

  	}

}
