import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FunctionData } from '../interfaces/FunctionData';
import SettingsHttp from './SettingsHttp';//trae la url para conexion al backend

@Injectable({
  providedIn: 'root'
})

export class AddFunctionService {
	
    private url:string;
    private headers:any;

 	  constructor(private http:HttpClient){

        this.url = SettingsHttp.url;
        this.headers = SettingsHttp.headers;

    }

  	add_function(functionData: FunctionData): Observable<any>{
 
        let json = JSON.stringify({request:'add-data',
        							             data:functionData});

        json = "json="+json;
         
        return this.http.post(this.url, json, {headers: this.headers});
 
    }

}
