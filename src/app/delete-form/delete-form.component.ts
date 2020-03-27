//Componente para el modal para confirmar la eliminacion de una funcion

import { Component, OnInit, Input } from '@angular/core';
import { DeleteFunctionService } from '../services/delete-function.service';

declare var app:any;

@Component({

  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.css']

})

export class DeleteFormComponent implements OnInit {
    
    delModal:any = null;
  	delForm:any = null;
    functionName:string = '';
    functionId:number = 0;
    closeFormBtn = null;
    @Input() appComponent:any = null;
    boxMsg:any = null;

  	constructor(private delService:DeleteFunctionService = null){
    
    }
    
  	ngOnInit(){

      this.delModal = app.getById('del-modal');
      
      app.dom.delModal = this.delModal;

      this.boxMsg = this.appComponent.boxMsgs;
      
      this.delForm = app.getById('del-functionForm'); 
      
      app.dom.delForm = this.delForm;
      
      app.objects.delForm = this;
    
    }

    del_one():void{

      let data = {id:this.functionId};
  
      this.delService.del_function(data).subscribe( result => {

                                                if(result.status == 'done'){

                                                    app.hide(this.delModal); 
                                                    
                                                    app.innerHTML(this.boxMsg, app.msg.success(result.notice));

                                                    let newResults:[] = [];
         
                                                    newResults = app.objects.searchResults.results.filter(c => c.id != data.id);
                                                    
                                                    app.objects.searchResults.results = newResults;

                                                }else{

                                                  app.innerHTML(this.boxMsg, app.msg.msg_type(result.status, result.notice));

                                                }    

                                            }, error => {
                                                    
                                                 app.innerHTML(this.boxMsg, app.msg.danger(error.message+' / '+error.error.text));
                                            
                                            });
    
    }

  	open_form(data:any = ''):void{

        this.appComponent.clean_boxMsg();
             	  
        this.functionId = data.id;
        
        this.functionName = data.functionName;

        app.show(this.delModal);

  	}

  	close_form():void{

      app.hide(this.delModal); 

  	}

}
