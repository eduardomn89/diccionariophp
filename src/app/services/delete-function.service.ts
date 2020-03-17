import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import SettingsHttp from './SettingsHttp';

@Injectable({
  providedIn: 'root'
})

export class DeleteFunctionService {
	
    private url:string;
    private headers:any;

 	  constructor(private http:HttpClient){ 

        this.url = SettingsHttp.url;
        this.headers = SettingsHttp.headers;

    }

  	del_function(functionData:any): Observable<any>{
 
        let json = JSON.stringify({request:'del-data',
        							data:functionData});

        json = "json="+json;
                 
        return this.http.post(this.url, json, {headers: this.headers});
 
    }

}
