import { Component, OnInit } from '@angular/core';
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
    serviceMsg:string = '';

  	constructor(private delService:DeleteFunctionService = null){

      this.serviceMsg = app.getById('service-msg'); 
    
    }
    
  	ngOnInit(){

      this.delModal = app.getById('del-modal');
      app.dom.delModal = this.delModal;
      this.delForm = app.getById('del-functionForm'); 
      app.dom.delForm = this.delForm;
      app.objects.delForm = this;
    
    }

    del_one(){

      let data = {id:this.functionId};
  
      this.delService.del_function(data).subscribe( result => {

                                                if(result.status == 'done'){

                                                    app.hide(this.delModal); 
                                                    
                                                    app.innerHTML(this.serviceMsg, app.msg.success(result.notice));

                                                    let newResults:[] = [];
         
                                                    newResults = app.objects.searchResults.results.filter(c => c.id != data.id);
                                                    
                                                    app.objects.searchResults.results = newResults;

                                                }else{

                                                  app.innerHTML(this.serviceMsg, app.msg.msg_type(result.status, result.notice));

                                                }    

                                            }, error => {
                                                    
                                                 app.innerHTML(this.serviceMsg, app.msg.danger(error.message+' / '+error.error.text));
                                            
                                            });
    
    }

  	open_form(data:any = ''){
             	  
        this.functionId = data.id;
        
        this.functionName = data.functionName;

        app.show(this.delModal);

  	}

  	close_form(){

      app.hide(this.delModal); 

  	}

}
