import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DeleteFunctionService {
	
	url = "http://localhost/Angular/Proyectos/backendDiccionarioPhp/modules/phpFunctions/controllers/functions_controller.php";

 	constructor(private http:HttpClient){ }

  	del_function(functionData:any): Observable<any>{
 
        let json = JSON.stringify({request:'del-data',
        							data:functionData});

        json = "json="+json;
        
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
         
        return this.http.post(this.url, json, {headers: headers});
 
    }

}
