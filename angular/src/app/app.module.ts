import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './plantillas/footer/footer.component';
import { HeaderComponent } from './plantillas/header/header.component';
import { HomeComponent } from './vistas/home/home.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

import {HttpClientModule} from '@angular/common/http';
import { DetalleComponent } from './vistas/detalle/detalle.component';
import { LoginComponent } from './vistas/login/login.component';
import { PedidosComponent } from './vistas/pedidos/pedidos.component';
import { ProductosComponent } from './vistas/productos/productos.component';
import { CategoriaComponent } from './vistas/categoria/categoria.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    routingComponents,
    DetalleComponent,
    LoginComponent,
    PedidosComponent,
    ProductosComponent,
    CategoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
