import { Component, OnInit } from '@angular/core';
import { DetalleService } from '../../services/detalle.service';
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  detalles:Array<any>=[];
  users:Array<any>=[];
  pedidos:Array<any>=[];
  productos:Array<any>=[];

  constructor(private detalleService:DetalleService, private toastr:ToastrService) { }

  traerDetalles(){
    this.detalleService.allDetalles().subscribe(res=>{
      this.detalles=res.data
      console.log(res.data)
    },
    err => {
      this.toastr.warning('Intentalo más tarde', 'SERVIDOR', {
        positionClass: 'toast-bottom-left'
      })
    })
  }

  eliminarDetalle(id:string){
    this.detalleService.deleteDetalle(id).subscribe(res=>{
      this.toastr.error('Eliminado exitosamente', 'DETALLE', {
        positionClass: 'toast-bottom-left'
      })
      this.traerDetalles();
    },
      err => {
        this.toastr.warning('Intentalo más tarde', 'DETALLES ERROR', {
          positionClass: 'toast-bottom-left'
        })
      })
  }


  traerUsers(){
    this.detalleService.getAllUsers().subscribe(res=>{
      this.users=res.data;
    })
  }

  traerPedidos(){
    this.detalleService.getAllPedidos().subscribe(res=>{
      this.pedidos=res.data;
    })
  }

  traerProductos(){
    this.detalleService.getAllProductos().subscribe(res=>{
      this.productos=res.data;
    })
  }
  

  ngOnInit(): void {
    this.traerDetalles();
    this.traerUsers();
    this.traerPedidos();
    this.traerProductos();
  }

}
