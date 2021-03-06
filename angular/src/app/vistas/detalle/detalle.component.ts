import { Component, OnInit } from '@angular/core';
import { DetalleService } from '../../services/detalle.service';
import {ToastrService} from 'ngx-toastr'
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  detalles: Array<any>=[];
  productos: Array<any>=[];

  constructor(private detalleService:DetalleService, private toastr:ToastrService) { }

  traerDetalles(){
    this.detalleService.allDetalles().subscribe(res=>{
      this.detalles=res.data
      // console.log(res.data)
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


  traerProductos(){
    this.detalleService.getAllProductos().subscribe(res=>{
      this.productos = res.data;
      console.log(res.data)
    })
  }
  

  ngOnInit(): void {
    this.traerProductos();
    this.traerDetalles();
  }

}
