//Componente para el formulario de busqueda

import { Component, OnInit, Input } from '@angular/core';
import { SearchTxtService } from '../services/search-txt.service';
import { SearchResultsData } from '../interfaces/SearchResultsData';

declare var app:any 

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})

export class SearchFormComponent implements OnInit {

  	public searchForm:any;
  	public searchTxt:any = '';
  	@Input() appComponent:any = '';
    boxMsg:any = null;
  	public functionsContainer:any = null;
  	public searchResults:SearchResultsData;
    private searchLoader:any = null; 

  	constructor(private searchService:SearchTxtService = null){}

  	ngOnInit() {

  		  this.searchForm = app.getById('search-form'); 
  		
      	app.dom.searchForm = this.searchForm;

      	app.objects.searchForm = this;
 
        this.boxMsg = this.appComponent.boxMsgs; 

        this.searchLoader = app.getById('search-loaderWrap');
 
  	}

  	search_txt():void{

      	let data:any = {search: this.searchTxt};
        
        app.show(this.searchLoader);
      	
        this.searchService.search_txt(data).subscribe( result => {
                                                
                                                if(result.status == 'done'){

                                                  	  app.innerHTML(this.boxMsg, app.msg.success(result.notice));

                                                      //cerrar todo y mostrar la portada
                                                      app.switch_view(app.switchViews(), 'functionsContainer');

                                                      //cargar los resultados en el componente showSearchResults

                                                      app.objects.searchResults.results = result.data; 

                                                      //app.objects.searchResults.functionsContainer.scrollTop = 0;

                                                      //resetear paginador
                                                      app.objects.searchResults.reset_pagination();

                                                      /*Si los resultados son mayores a 10 se muestra el paginador
                                                      de lo contrario se oculta*/
                                                      app.objects.searchResults.show_pagination(result.data);

                                                }else{

                                                  app.innerHTML(this.boxMsg, app.msg.msg_type(result.status, result.notice));

                                                }    

                                                //ocultar la imagen preloader
                                                app.hide(this.searchLoader);
                                                
                                            }, error => {
                                                    
                                                 app.innerHTML(this.boxMsg, app.msg.danger(error.message+' / '+error.error.text));
                                            
                                            });

    }

}



    