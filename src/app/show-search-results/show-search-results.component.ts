import { Component, OnInit } from '@angular/core';
import { SearchTxtService } from '../services/search-txt.service';
import { SearchResultsData } from '../interfaces/SearchResultsData';


declare var app:any;

@Component({
  selector: 'app-show-search-results',
  templateUrl: './show-search-results.component.html',
  styleUrls: ['./show-search-results.component.css']
})

export class ShowSearchResultsComponent implements OnInit {
	
	  public functionsContainer:any = null;
	  public results:SearchResultsData[] = [{id:0, functionName:'', description:''}];
    //paginador
    p: number = 1;
    totalRec : number;
    page: number = 1;
    paginationWrap:any = null;
   
  	constructor(private searchService:SearchTxtService = null) { 

  	}

  	ngOnInit() {

  		  this.functionsContainer = app.getById('functions-container'); 
        this.paginationWrap = app.getById('pagination-wrap');

  		  app.dom.functionsContainer = this.functionsContainer;
  		  app.objects.searchResults = this;

  	}

    open_updateForm(functionData:any = ''){
    
        app.objects.updateForm.open_form(functionData);

    }

    open_deleteForm(data:any = ''){
                
        app.objects.delForm.open_form(data);

    }

}
