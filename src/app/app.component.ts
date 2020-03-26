import { Component } from '@angular/core';

declare var app;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
    title = 'funccionesphp';
    boxMsgs:any = null;
    appComponent:any = null;
    loaderImg:any = null;

    ngOnInit(){

  	  this.boxMsgs = app.getById('service-msg');

      this.loaderImg = app.getById('loader-img'); 
      
      this.appComponent = this;
  
    }

    encode_txt(string:string = ''){



    }

    decode_txt(string:string = ''){



    }
    
    fixedEncodeURIComponent(str) {

      //escapar los hexadecimales 

      return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {

        return '%' + c.charCodeAt(0).toString(16);

      });

    }

    clean_boxMsg():void{
        
       app.innerHTML(this.boxMsgs, '');

    }

}
