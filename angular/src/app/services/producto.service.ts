import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
_Api= environment.urlAPI;
  constructor(private http: HttpClient) { }

  allProductos():Observable<any>{
    let header = new HttpHeaders()
    .set('Type-content','application/json')
    return this.http.get(`${this._Api}/productos`,{
      headers:header
    });
  }

  addProductos(productos:any):Observable<any>{
      return this.http.post(`${this._Api}/productos/create`,productos);
  }

  deleteProductos(id:string):Observable<any>{
    return this.http.delete(`${this._Api}/productos/${id}`);
  }

  getOnlyProducto(id:string): Observable<any>{
    return this.http.get(`${this._Api}/productos/${id}`);
  }

  updateProductos(id:string, data:any): Observable<any>{
    return this.http.put(`${this._Api}/productos/${id}`,data);
  }

}
