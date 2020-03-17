import { Component, OnInit } from '@angular/core';
import { UpdateFunctionService } from '../services/update-function.service';
import { SearchResultsData } from '../interfaces/SearchResultsData';

declare var app:any;

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})

export class UpdateFormComponent implements OnInit {

  	updateForm = null;
  	closeFormBtn = null;
    functionName:string = '';
    functionNameTitle:String = '';
    description:string = '';
    functionId:number = 0;
    serviceMsg:string = '';

  	constructor(private updateService:UpdateFunctionService = null){

      this.serviceMsg = app.getById('service-msg'); 
    
    }

  	ngOnInit(){

        this.updateForm = app.getById('update-functionForm'); 
        app.dom.updateForm = this.updateForm;
        app.objects.updateForm = this;
    
    }

    update_one(){

      	let data:SearchResultsData = {'id':this.functionId,
      			        'functionName': this.functionName,
                    'description': this.description};
  
      	this.updateService.update_function(data).subscribe( result => {

                                                if(result.status == 'done'){

                                                  app.switch_view(app.switchViews(), 'functionsContainer');

                                                  let newData:Array<SearchResultsData> = [{id:0,
                                                                                           functionName:'', 
                                                                                           description:''}];
                                                  
                                                  let c:number = 0;//contador para indice de array para funciones
                                                  
                                                  app.loop({target:app.objects.searchResults.results, fn: (target) => {

                                                    if(target.id === this.functionId){

                                                    /*si el id de la funcion editada es igual l que se encuentra en 
                                                    la variable results se modifica los datos editados*/

                                                      newData[c] = {id:this.functionId, 
                                                                   functionName:this.functionName,
                                                                    description:this.description};;

                                                    }else{

                                                      //si los id no coinciden se almacena igual

                                                      newData[c] = {id:target.id, 
                                                                    functionName:target.functionName,
                                                                    description:target.description};
                                                    }

                                                    c++;

                                                  }});

                                                  /*colocar los nuevos datos en la variable results para que se muestren  
                                                  en pantalla lo cambios*/

                                                  app.objects.searchResults.results = newData;

                                                  //limpiar campos de formulario
                                                  this.functionName = '';
                                                  this.description = '';

                                                  app.innerHTML(this.serviceMsg, app.msg.success(result.notice));

                                                }else{

                                                  app.innerHTML(this.serviceMsg, app.msg.msg_type(result.status, result.notice));

                                                }    

                                            }, error => {
                                                    
                                                 app.innerHTML(this.serviceMsg, app.msg.danger(error.message+' / '+error.error.text));
                                            
                                            });
    
    }

  	open_form(data:any = ''){

        /*Abrir formulario para editar funcion
        El parametro data viene de el componente show-search-results.
        Se pasa en el metodo open_update_form.*/

        this.functionNameTitle = data.functionName;
     	  
        this.functionName = data.functionName;

        //Quitar los <br> de la descripcion
        
        let arrayDesc = data.description.split('<br />');
        
        let description = '';

        app.loop({target: arrayDesc, fn:(text) => { 

            description += text;

        }});

       	this.description = description;

       	this.functionId = data.id;

        //ocultar lo que este en pantalla y mostrar el formulario para editar funcion

        app.switch_view(app.switchViews(), 'updateFunctionForm');

  	}

  	close_form(){

      //cerrar formulario para editar funcion 

      app.innerHTML(this.serviceMsg, '');

      app.switch_view(app.switchViews(), 'functionsContainer'); 

  	}

}