import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Login } from '../../models/login';
import { Response} from '../../models/response';
import { Registrarse } from '../../models/registrarse';
import { Perfil } from '../../models/perfil';
import { DetallePedido } from '../../models/detalle-pedido';
import { environment } from '../../../environments/environment.prod';
import { Rol } from '../../models/rol.interface';


@Injectable({
  providedIn: 'root'
})

export class LaravelApiService {

  _Api= environment.urlAPI;

  constructor( private http:HttpClient) { }

  loginByEmail(form:Login):Observable<Response>{
    let url = "http://127.0.0.1:8000/api/login"
    return this.http.post<Response>(url, form)
  }

  registerUser(form:Registrarse):Observable<Response>{
    let url = "http://127.0.0.1:8000/api/register"
    return this.http.post<Response>(url,form)
  }

  crearPerfil(form:Perfil):Observable<Perfil>{
    let url = "http://127.0.0.1:8000/api/perfil/create"
    return this.http.post<Perfil>(url, form)
  }

  detallesPedido(id:any):Observable<DetallePedido[]>{
    let url ="http://127.0.0.1:8000/api/detalle/pedido/"+id;
    return this.http.get<DetallePedido[]>(url)
  }

  getAllUsers():Observable<any>{
    return this.http.get(`${this._Api}/users`);
  }
  getPerfil(id:any):Observable<Rol>{
    return this.http.get<Rol>(`${this._Api}/rol/`+id);
  }
  getAllPerfil():Observable<any>{
    return this.http.get(`${this._Api}/perfil`);
  }
  perfilUser(id:any):Observable<any>{
    let url ="http://127.0.0.1:8000/api/perfil/"+id;
    return this.http.get<any>(url);
  }
  updateDetalles(id:any, data:any):Observable<any>{
    let url = "http://127.0.0.1:8000/api/detalle/"+id;
    return this.http.put<any>(url, data);
  }

  getPedidosUsers():Observable<any>{
    let url = "http://127.0.0.1:8000/api/rol";
    return this.http.get<any>(url);
  }

}
