import { Component, OnInit } from '@angular/core';
import { SearchTxtService } from '../services/search-txt.service';

declare var app:any;

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})

export class AsideComponent implements OnInit {
	
	serviceMsg:any;
	alphabet:any = '';

  	constructor(private searchService:SearchTxtService = null) { }

  	ngOnInit() {

  		this.serviceMsg = app.getById('service-msg'); 

  		this.alphabet = [{"letra":"a", "valor":"A"},
						{"letra":"b", "valor":"B"},
						{"letra":"c", "valor":"C"},
						{"letra":"d", "valor":"D"},
						{"letra":"e", "valor":"E"},
						{"letra":"f", "valor":"F"},
						{"letra":"g", "valor":"G"},
						{"letra":"h", "valor":"H"},
						{"letra":"i", "valor":"I"},
						{"letra":"j", "valor":"J"},
						{"letra":"k", "valor":"K"},
						{"letra":"l", "valor":"L"},
						{"letra":"m", "valor":"M"},
						{"letra":"n", "valor":"N"},
						{"letra":"o", "valor":"O"},
						{"letra":"p", "valor":"P"},
						{"letra":"q", "valor":"Q"},
						{"letra":"r", "valor":"R"},
						{"letra":"s", "valor":"D"},
						{"letra":"t", "valor":"T"},
						{"letra":"v", "valor":"U"},
						{"letra":"v", "valor":"V"},
						{"letra":"w", "valor":"W"},
						{"letra":"x", "valor":"X"},
						{"letra":"y", "valor":"Y"},
						{"letra":"z", "valor":"Z"}];		
  	
  	}

  	search_txt(txt = ''){

      	let data = {'search': txt};

      	this.searchService.search_byAlphabet(data).subscribe( result => {
                                            
				                                                if(result.status == 'done'){

				                                                  	app.innerHTML(this.serviceMsg, app.msg.success(result.notice));

				                                                    app.switch_view(app.switchViews(), 'functionsContainer');

				                                                    app.objects.searchResults.results = result.data; 
				  													                         
				                                                }else{

				                                                  app.innerHTML(this.serviceMsg, app.msg.msg_type(result.status, result.notice));

				                                                }    

				                                            }, error => {
				                                                    
				                                                 app.innerHTML(this.serviceMsg, app.msg.danger(error.message+' / '+error.error.text));
				                                            
				                                            });

  	}

}






	

