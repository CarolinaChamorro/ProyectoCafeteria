import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { DetallePedido } from '../../models/detalle-pedido';
import { LaravelApiService } from 'src/app/services/api/laravel-api.service';
import {ToastrService} from 'ngx-toastr';
@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  constructor(private activaterouter:ActivatedRoute, private router:Router, 
    private api:LaravelApiService,
    private toastr:ToastrService) { }
  pedidoUserPrducto:Array<any>=[];
  detallesPedido:DetallePedido[]=[];
  index:number=0;
  subtotal:any=[];
  total:number=0
  pedido={
    status:"Realizado"
  }
  ngOnInit(): void {
    let pedidoProductos = localStorage.getItem('user_id') //this.activaterouter.snapshot.paramMap.get('id')
    this.api.perfilUser(pedidoProductos).subscribe(data=>{
      this.pedidoUserPrducto = data;
      console.log(this.pedidoUserPrducto)
    })
    this.api.detallesPedido(pedidoProductos).subscribe(data=>{
      for (let j = 0; j < data.length; j++) {
        if (data[j].status==="Agregado" ) {
          this.detallesPedido = data;
          this.subtotal.push(this.detallesPedido[j].cantidad * this.detallesPedido[j].precio)  
          console.log(this.subtotal)     
        }
      }      
      for (let i = 0; i < this.subtotal.length; i++) {
        let numero = this.subtotal[i];
        this.total += numero; 
        console.log(this.total);       
      }      
      console.log(data);
    })
  }

  updateStatus(id:any, data:any){
    this.api.updateDetalles(id, data).subscribe(data=>{
      console.log(data);
    })    
  }
  
  confirmarPedido(){
    for (let index = 0; index < this.detallesPedido.length; index++) {
      this.updateStatus(this.detallesPedido[index].id, this.pedido)      
    }
    this.router.navigate(['detalle'])
    this.toastr.success('Pedido registrado', 'Pedido', {
      positionClass: 'toast-bottom-left'
    })
  }
}