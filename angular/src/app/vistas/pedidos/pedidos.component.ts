import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../services/pedido.service';
import {ToastrService} from 'ngx-toastr'

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos:Array<any>=[];
  users:Array<any>=[];
  detalles:Array<any>=[];
  constructor(private pedidoService:PedidoService,  private toastr:ToastrService){}

  traerPedidos(){
    this.pedidoService.allPedidos().subscribe(res=>{
      this.pedidos=res.data
      // console.log(res.data)
    },
    err => {
      this.toastr.warning('Intentalo más tarde', 'SERVIDOR', {
        positionClass: 'toast-bottom-left'
      })
    })
  }

  eliminarPedido(id:string){
    this.pedidoService.deletePedidos(id).subscribe(res=>{
      this.toastr.error('Eliminado exitosamente', 'PEDIDOS', {
        positionClass: 'toast-bottom-left'
      })
      this.traerPedidos();
    },
      err => {
        this.toastr.warning('Intentalo más tarde', 'PEDIDOS ERROR', {
          positionClass: 'toast-bottom-left'
        })
      })
  }
  //Falta create
  //Falta update

//Llamar a los datos
  traerUsers(){
    this.pedidoService.getAllUsers().subscribe(res=>{
      this.users=res.data;
      console.log(res.data)
    })
  }

  traerDetalle(){
    this.pedidoService.getAllDetalle().subscribe(res=>{
      this.detalles=res.data;
      console.log(res.data)
    })
  }
  
  ngOnInit(): void {
    this.traerPedidos();
  	this.traerUsers();
    this.traerDetalle();
  }
  

}
