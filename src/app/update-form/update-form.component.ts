import { Component, OnInit } from '@angular/core';
import { UpdateFunctionService } from '../services/update-function.service';

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

      	let data = {'id':this.functionId,
      			        'functionName': this.functionName,
                    'description': this.description};
  
      	this.updateService.update_function(data).subscribe( result => {

                                                if(result.status == 'done'){

                                                  this.functionName = '';
                                                  this.description = '';

                                                  app.switch_view(app.switchViews(), 'coverPage');

                                                  app.innerHTML(this.serviceMsg, app.msg.success(result.notice));

                                                }else{

                                                  app.innerHTML(this.serviceMsg, app.msg.msg_type(result.status, result.notice));

                                                }    

                                            }, error => {
                                                    
                                                 app.innerHTML(this.serviceMsg, app.msg.danger(error.message+' / '+error.error.text));
                                            
                                            });
    
    }

  	open_form(data:any = ''){

        this.functionNameTitle = data.functionName;
     	  
        this.functionName = data.functionName;

        let arrayDesc = data.description.split('<br />');
        
        let description = '';

        app.loop({target: arrayDesc, fn:(text) => { 

            description += text;

        }});

       	this.description = description;

       	this.functionId = data.id;

        app.switch_view(app.switchViews(), 'updateFunctionForm');

  	}

  	close_form(){

      app.innerHTML(this.serviceMsg, '');

      app.switch_view(app.switchViews(), 'coverPage'); 

  	}

}