//Componente para el header

import { Component, OnInit, Input } from '@angular/core';

declare var app:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

    @Input() appComponent:any = null;

  	constructor() { }

  	ngOnInit() {
  	
  	}

    go_home(){

      //cerrar todo y mostrar la portada
      app.switch_view(app.switchViews(), 'coverPage');
      this.appComponent.clean_boxMsg();

    }

  	open_add_form():void{

      app.objects.addForm.open_form();

  	}


}