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
    showResults:any = null;

    ngOnInit(){

  	  this.boxMsgs = app.getById('service-msg');

      this.loaderImg = app.getById('loader-img'); 
      
      this.appComponent = this;
  
    }

    encode_txt(stringData:string = ''){

        //codificar espacios en blanco, escapar hexadecimales y sustituir saltos de linea 
        //del texto para su nevio, si no se hace ocurre un error de parsing en backend

        let data = stringData.replace(/\n/g, "<br />");
    
        return encodeURI(this.appComponent.fixedEncodeURIComponent(data));

    }

    decode_txt(stringData:string = ''){

        //decodificat texto
        
        return decodeURIComponent(stringData);
        
    }
    
    fixedEncodeURIComponent(str) {

      //escapar hexadecimales 

      return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {

        return '%' + c.charCodeAt(0).toString(16);

      });

    }

    clean_boxMsg():void{
        
       app.innerHTML(this.boxMsgs, '');

    }

}
