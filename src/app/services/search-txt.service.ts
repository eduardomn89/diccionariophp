import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import  SettingsHttp  from './SettingsHttp';

@Injectable({
  providedIn: 'root'
})


export class SearchTxtService {
    
    private url:string;
    private headers:any;
  
  	private results:any;

 	  constructor(public http:HttpClient){ 

       this.url = SettingsHttp.url;
       this.headers = SettingsHttp.headers;

     }

    	search_txt(searchTxt: any): Observable<any>{
   
          let json = JSON.stringify({request:'search-data',
          							             data:searchTxt});

          json = "json="+json;
              
          return this.http.post(this.url, json, {headers: this.headers});
    
      }

      search_byAlphabet(searchTxt:any): Observable<any>{

          let json = JSON.stringify({request:'search-byAlphabet',
                                     data:searchTxt});

          json = "json="+json;
          
          return this.http.post(this.url, json, {headers: this.headers});       

      }        

}