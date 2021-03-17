import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'

import {LaravelApiService} from '../../services/api/laravel-api.service';
import {Router} from '@angular/router'
import { Login } from '../../models/login';
import { Response} from '../../models/response';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { DetalleComponent } from '../detalle/detalle.component';
import { CarritoComponent } from '../carrito/carrito.component';
import { Rol } from '../../models/rol.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //este método guarda el valor de los campos del formulario
  loginForm = new 
  FormGroup({
    email : new FormControl('', Validators.required),
    password : new FormControl('', Validators.required)
  })

  constructor(private api:LaravelApiService, private router:Router) { }

  errorStatus:boolean = false
   users:Array<any>=[];
   perfiles: Array<Rol>=[];
   input:string='';
   
  ngOnInit(): void {
    this.checkLocalStorage();
    this.traerUser();
    this.traerPerfil();
    NavbarComponent;
    DetalleComponent;
    CarritoComponent;
    
  }
user={
  key:localStorage.getItem('user_id')
}
  //revisar token
  checkLocalStorage(){
    if(localStorage.getItem('token')) {
      // code...
      console.log(this.user.key)
    }
  }
  traerPerfil(){
    this.api.getAllPerfil().subscribe(res=>{
      this.perfiles=res.data;
    })
  }
   traerUser(){
    this.api.getAllUsers().subscribe(res=>{
      this.users=res.data;
    })
   }


  //logaut de la app
  onLogaut(){
    localStorage.removeItem("user_id")
    localStorage.removeItem("token")
    this.router.navigate(['home'])
  }

  //Este método recibe los valores del formulario mediante el método ngSubmit
  onLogin(form:Login){
    
    this.api.loginByEmail(form).subscribe(data => {
      let dataResponse:Response = data;
      if(dataResponse.status == "success"){
        localStorage.setItem("token", dataResponse.data.token);
        localStorage.setItem("user_id", dataResponse.data.id);
        for (let i = 0; i < this.users.length; i++) {
          const usuario = this.users[i];
           if( usuario.email=="lcb.chamorro@yavirac.edu.ec" || dataResponse.data.id=='13'){
            this.router.navigate(['productos']);
            console.log(dataResponse.data.id)
           }else{
             this.router.navigate(['detalle']);
           }
        }
      }else{
        this.errorStatus=true;
      }
      console.log(data);
    });
    
  }

}
