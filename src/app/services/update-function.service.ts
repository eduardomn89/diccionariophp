import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FunctionData } from '../interfaces/FunctionData';
import SettingsHttp from './SettingsHttp';

@Injectable({
  providedIn: 'root'
})

export class UpdateFunctionService {
	
    private url:string;
    private headers:any;

 	  constructor(private http:HttpClient){ 

      this.url = SettingsHttp.url;
      this.headers = SettingsHttp.headers;

    }

  	get_data_form(id:number = 0){

 		    let json = JSON.stringify({"request":"get_data_updateForm",
        						              "data":{"id":id}});

        json = "json="+json;

        return this.http.post(this.url, json, {headers: this.headers}); 		

  	}

  	update_function(functionData: FunctionData): Observable<any>{
      
        let json = JSON.stringify({request:'updatedata',
        							             data:functionData});
        
        json = "json="+json;

        return this.http.post(this.url, json, {headers: this.headers});
 
    }

}
