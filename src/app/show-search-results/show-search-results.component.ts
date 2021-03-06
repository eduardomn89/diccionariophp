//componente para mostrar los resultados de busqueda tanto con alfabeto como por nombre

import { Component, OnInit, Input } from '@angular/core';
import { SearchTxtService } from '../services/search-txt.service';
import { SearchResultsData } from '../interfaces/SearchResultsData';


declare var app:any;

@Component({
  selector: 'app-show-search-results',
  templateUrl: './show-search-results.component.html',
  styleUrls: ['./show-search-results.component.css']
})

export class ShowSearchResultsComponent implements OnInit {
	
	  public showResultsWrap:any = null;
	  public results:SearchResultsData[] = [{id:0, functionName:'', description:''}];
    @Input() appComponent:any = ''; 
    //paginador
    p: number = 1;
    totalRec : number;
    page: number = 1;
    paginationWrap:any = null;
   
  	constructor(private searchService:SearchTxtService = null) { 

  	}

  	ngOnInit() {

  		  this.showResultsWrap = app.getById('show-resultsWrap'); 

        app.dom.showResultsWrap = this.showResultsWrap;

        this.paginationWrap = app.getById('pagination-wrap');
  		  
        app.objects.searchResults = this;

  	}

    open_updateForm(functionData:any = ''):void{
        
        //abrir el formulario para editar funcion
        app.objects.updateForm.open_form(functionData);

    }

    open_deleteForm(data:any = ''):void{
                
        //abrir el formulario para borrar funcion 
        app.objects.delForm.open_form(data);

    }

    show_pagination(dataFunctions:any = ''):void{
        
        //si los resultados son mayores a 10 se mostrara el paginador

        if(dataFunctions.length >= 10){
                                                  
          app.show(this.paginationWrap);

        }else{

          app.hide(this.paginationWrap);
          
        }
    
    }

    paginate(pageNumber:number = 0):void{

      //funcion que se llama al paginar las funciones
      //pageNumber recibe el numero de pagina  

      this.page = pageNumber;

      window.scroll(0, 100);//moviendo scroll hacia arriva

    }

    reset_pagination():void{

      //poner el paginador en pagina 1
      this.page = 1;

    }

    unescape_data(data:string = ''){
        
        let dataF = this.appComponent.decode_txt(data);

        return dataF;

    }

}
