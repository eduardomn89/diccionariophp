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
  	public serviceMsg:any = '';
  	public functionsContainer:any = null;
  	public searchResults:SearchResultsData;

  	constructor(private searchService:SearchTxtService = null){}

  	ngOnInit() {

  		  this.searchForm = app.getById('search-form'); 
  		
      	app.dom.searchForm = this.searchForm;

      	app.objects.searchForm = this;
 
        this.serviceMsg = app.getById('service-msg'); 
 
  	}

  	search_txt(){

      	let data = {search: this.searchTxt};

      	this.searchService.search_txt(data).subscribe( result => {
                                                
                                                if(result.status == 'done'){

                                                  	  app.innerHTML(this.serviceMsg, app.msg.success(result.notice));

                                                      //cerrar todo y mostrar la portada
                                                      app.switch_view(app.switchViews(), 'functionsContainer');

                                                      //cargar los resultados en el componente showSearchResults

                                                      app.objects.searchResults.results = result.data; 
  													                         
                                                }else{

                                                  app.innerHTML(this.serviceMsg, app.msg.msg_type(result.status, result.notice));

                                                }    

                                            }, error => {
                                                    
                                                 app.innerHTML(this.serviceMsg, app.msg.danger(error.message+' / '+error.error.text));
                                            
                                            });

    }

}



    