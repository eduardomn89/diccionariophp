import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { FunctionData } from '../interfaces/FunctionData';

@Injectable({
  providedIn: 'root'
})

export class AddFunctionService {
	
	url = "http://localhost/Angular/Proyectos/backendDiccionarioPhp/modules/phpFunctions/controllers/functions_controller.php";

 	constructor(private http:HttpClient){ }

  	add_function(functionData: FunctionData): Observable<any>{
 
        let json = JSON.stringify({request:'add-data',
        							data:functionData});

        json = "json="+json;
        
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
         
        return this.http.post(this.url, json, {headers: headers});
 
    }

}
