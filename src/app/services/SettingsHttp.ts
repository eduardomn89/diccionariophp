import { HttpHeaders } from '@angular/common/http';

const SettingsHttp = {
		url: "http://localhost/Angular/Proyectos/diccionarios/backendDiccionarioPhp/modules/phpFunctions/controllers/functions_controller.php",
		headers: new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded')
}

export default SettingsHttp;