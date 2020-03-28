//Componente con el abecedario para busqueda por alfabeto

import { Component, OnInit, Input } from '@angular/core';
import { SearchTxtService } from '../services/search-txt.service';

declare var app:any;

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})

export class AsideComponent implements OnInit {
	
	@Input() appComponent:any = null;
	public alphabet:any = '';
	boxMsg:any = null;
	loaderImg:any = null;

  	constructor(private searchService:SearchTxtService = null) { }

  	ngOnInit() {

  		this.boxMsg = this.appComponent.boxMsgs;
  		
  		this.loaderImg = this.appComponent.loaderImg;

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

  	search_txt(txt:string = ''):void{

  		//busqueda por alfabeto
  		//parametro txt recibe la letra del alfabeto

  		this.appComponent.clean_boxMsg();
      	
      	let data:any = {'search': txt};

      	app.show(this.loaderImg);

      	window.scroll(0, 100);//moviendo scroll hacia arriva

      	this.searchService.search_byAlphabet(data).subscribe( result => {
                                            
				                                                if(result.status == 'done'){

				                                                  	app.innerHTML(this.boxMsg, app.msg.success(result.notice));

				                                                  	//mostrar el contenedor para resultados 
				                                                    app.switch_view(app.switchViews(), 'showResultsWrap');

				                                                    //cargar resultados en el componente showRearchResults
				                                                    app.objects.searchResults.results = result.data;

				                                                    //resetear paginador
				                                                    app.objects.searchResults.reset_pagination();

				                                                    //mostrar paginador si los resultados son mayores a 10

				                                                    app.objects.searchResults.show_pagination(result.data);

				                                                }else{

				                                                  app.innerHTML(this.boxMsg, app.msg.msg_type(result.status, result.notice));

				                                                  app.objects.searchResults.results = '';

				                                                }    

				                                                app.hide(this.loaderImg);

				                                            }, error => {
				                                                    
				                                                 app.innerHTML(this.boxMsg, app.msg.danger(error.message+' / '+error.error.text));
				                                            
				                                            });

				                                            

  	}

}






	

