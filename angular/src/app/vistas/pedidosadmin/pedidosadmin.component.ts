import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { Pedidosadmin} from '../../models/pedidosadmin';
import { LaravelApiService } from 'src/app/services/api/laravel-api.service';

@Component({
  selector: 'app-pedidosadmin',
  templateUrl: './pedidosadmin.component.html',
  styleUrls: ['./pedidosadmin.component.css']
})
export class PedidosadminComponent implements OnInit {

  constructor(private activaterouter:ActivatedRoute, private router:Router, private api:LaravelApiService) { }
  pedidosAdminU:Pedidosadmin[]=[];
  pedidosAdminH:Pedidosadmin[]=[];
  pedidos1:Array<any>=[];
  pedidos2:Array<any>=[];
  users:Array<any>=[];
  index:number=0;
  ngOnInit(): void {
    this.api.getPedidosUsers().subscribe(data=>{
      for (let index = 0; index <data.length; index++) {
        if (data[index].user_id !== null && data[index].status==="Realizado" && data[index].id==data[index].user_id) {
          this.pedidosAdminU = data;
          //console.log(this.pedidosAdminU)
        }if(data[index].status==="Enviado"){
          this.pedidosAdminH = data;
          if(this.pedidosAdminH[0].id==this.pedidosAdminH[0].user_id){
            this.pedidos2=this.pedidosAdminH;
            console.log(this.pedidosAdminH.length);
          }
          
        }else{
          console.log("no hay pedidos")
        }
      } 
    })

    this.api.getAllUsers().subscribe(res=>{
      this.users=res.data;
    })
  }
  verPedidos(id:any){
    this.router.navigate(['pedidosAdmin/realizarPedido', id])
  }
}
