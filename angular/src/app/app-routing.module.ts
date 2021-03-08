import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PedidosComponent } from './vistas/pedidos/pedidos.component';
import { LoginComponent } from './vistas/login/login.component';
import { ProductosComponent } from './vistas/productos/productos.component';
import { CategoriaComponent } from './vistas/categoria/categoria.component';
import { DetalleComponent } from './vistas/detalle/detalle.component';
import { CarritoDetalleComponent } from './vistas/detalle/carrito-detalle/carrito-detalle.component';

const routes: Routes = [
  {path:'',redirectTo:'login', pathMatch:'full'},
  //Login
  {path:'login',component:LoginComponent},

  //Pedidos
  {path:'pedidos',component:PedidosComponent},

  //Productos
  {path: 'productos', component:ProductosComponent},

  //Categorias
  {path: 'categorias', component:CategoriaComponent},

  //Detalle
  {path: 'detalle', component:DetalleComponent},

  //Detalle
  {path: 'carrito', component:CarritoDetalleComponent},

  { path: '**', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,PedidosComponent,ProductosComponent,CategoriaComponent,DetalleComponent,CarritoDetalleComponent]
