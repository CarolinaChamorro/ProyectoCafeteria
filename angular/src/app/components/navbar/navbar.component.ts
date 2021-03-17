import { Component, OnInit } from '@angular/core';
import { LaravelApiService } from '../../services/api/laravel-api.service';
import {  Router } from '@angular/router';
import { CarritoComponent } from '../../vistas/carrito/carrito.component';
import { DetalleComponent } from '../../vistas/detalle/detalle.component';
import { LoginComponent } from '../../vistas/login/login.component';
import { CategoriasComponent } from '../categorias/categorias.component';
import { ProductosComponent } from '../productos/productos.component';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  perfiles: Array<any>=[];
  users: Array<any>=[];
  constructor(private ApiServe:LaravelApiService,private _router: Router) { 
   
  }

//user
  user={
    key:localStorage.getItem("user_id")
    }

  traerPerfil(){
    this.ApiServe.getAllPerfil().subscribe(res=>{
      this.perfiles=res.data;
    })
  }

  traerUser(){
    this.ApiServe.getAllUsers().subscribe(res=>{
      this.users=res.data;
      
    })
  }
  //cliente
  CatalogoProducto() {
    this._router.navigate(['detalle']);
    this.ngOnInit();
  }
  Carrito() {
    this._router.navigate(['carrito']);
    this.ngOnInit();
  }
  Pedido() {
    this._router.navigate(['pedidos']);

  }

  //admin
  Categoria() {
    this._router.navigate(['categoria']);

  }
  Productos() {
    this._router.navigate(['productos']);
    this.ngOnInit();
  }

  PedidoAdmin() {
    this._router.navigate(['pedidosAdmin']);
    this.ngOnInit();
  }

  //salir de sesión
  onLogaut(){
    localStorage.removeItem("user_id")
    localStorage.removeItem("token");
    this._router.navigate(['home'])
    this.ngOnInit();
  }

  ngOnInit(): void {
    this.traerPerfil();
    this.traerUser();
  }

}
