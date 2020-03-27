//Componente de formulario para agregar funcion

import { Component, OnInit, Input } from '@angular/core';
import { AddFunctionService } from '../services/add-function.service';
import { FunctionData } from '../interfaces/FunctionData';

declare var app:any 

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})

export class AddFormComponent implements OnInit {

  	public addForm:any = null;
  	public closeFormBtn:any = null;
    public functionName:string = '';
    public description:string = '';
    @Input() appComponent:any = null;
    public boxMsg:any = '';
    
  	constructor(private afs:AddFunctionService = null){

    }

  	ngOnInit() {

      this.addForm = app.getById('add-form'); 
      
      app.dom.addForm = this.addForm;

      this.boxMsg = this.appComponent.boxMsgs;
      
      app.objects.addForm = this;

  	}

  	add_one():void{

      let description = this.appComponent.encode_txt(this.description);

      let data:FunctionData = {'functionName': this.functionName,
                               'description': description};

      this.afs.add_function(data).subscribe( result => {
                                                
                                              if(result.status == 'done'){

                                                  this.functionName = '';
                                                  this.description = '';

                                                  app.innerHTML(this.boxMsg, app.msg.success(result.notice));

                                                }else{

                                                  app.innerHTML(this.boxMsg, app.msg.msg_type(result.status, result.notice));

                                                }    

                                            }, error => {
                                                 console.log(error);    
                                                 app.innerHTML(this.boxMsg, app.msg.danger(error.message+' / '+error.error.text));
                                            
                                            });
    
    }

  	open_form():void{

      app.switch_view(app.switchViews(), 'addForm');

  	}

  	close_form():void{

      app.innerHTML(this.boxMsg, '');

      app.switch_view(app.switchViews(), 'coverPage'); 

  	}

}