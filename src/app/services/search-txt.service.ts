import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class SearchTxtService {


	   url = "http://localhost/Angular/Proyectos/backendDiccionarioPhp/modules/phpFunctions/controllers/functions_controller.php";
  
  	 results:any;

 	   constructor(public http:HttpClient){ }

    	search_txt(searchTxt: any): Observable<any>{
   
          let json = JSON.stringify({request:'search-data',
          							             data:searchTxt});

          json = "json="+json;
          
          let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
              
          return this.http.post(this.url, json, {headers: headers});
    
      }

      search_byAlphabet(searchTxt:any): Observable<any>{

          let json = JSON.stringify({request:'search-byAlphabet',
                                     data:searchTxt});

          json = "json="+json;
          
          let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
           
          return this.http.post(this.url, json, {headers: headers});       

          //return this.http.get('http://localhost/Angular/Proyectos/backendDiccionarioPhp/prueba.php');

      }        

}