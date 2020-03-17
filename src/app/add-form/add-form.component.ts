import { Component, OnInit } from '@angular/core';
import { AddFunctionService } from '../services/add-function.service';

declare var app:any 

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})

export class AddFormComponent implements OnInit {

  	private addForm:any = null;
  	private closeFormBtn:any = null;
    private functionName:string = '';
    private description:string = '';
    private serviceMsg:any = '';
    
  	constructor(private afs:AddFunctionService = null){

    }

  	ngOnInit() {

      this.serviceMsg = app.getById('service-msg'); 

      this.addForm = app.getById('add-form'); 
      
      app.dom.addForm = this.addForm;
      
      app.objects.addForm = this;

  	}

  	add_one(){

      let data = {'functionName': this.functionName,
                  'description': this.description};

      this.afs.add_function(data).subscribe( result => {
                                                
                                              if(result.status == 'done'){

                                                  this.functionName = '';
                                                  this.description = '';

                                                  app.innerHTML(this.serviceMsg, app.msg.success(result.notice));

                                                }else{

                                                  app.innerHTML(this.serviceMsg, app.msg.msg_type(result.status, result.notice));

                                                }    

                                            }, error => {
                                                console.log(error);    
                                                 app.innerHTML(this.serviceMsg, app.msg.danger(error.message+' / '+error.error.text));
                                            
                                            });
    
    }

  	open_form(){

      app.switch_view(app.switchViews(), 'addForm');

  	}

  	close_form(){

      app.innerHTML(this.serviceMsg, '');

      app.switch_view(app.switchViews(), 'coverPage'); 

  	}

}