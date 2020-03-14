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
	
	functionsContainer:any = null;
	results:SearchResultsData[] = [{id:0,functionName:'', description:''}]

  	constructor(private searchService:SearchTxtService = null) { 

  	}

  	ngOnInit() {

  		this.functionsContainer = app.getById('functions-container'); 
  		
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
