import { Component, OnInit,OnDestroy  } from '@angular/core';
import { Router } from '@angular/router';
import { DatosServicioService } from 'src/app/service/datos-servicio.service';
import { SweetalertService } from 'src/app/service/sweetalert.service';

@Component({
  selector: 'app-recibos-servicios',
  templateUrl: './recibos-servicios.page.html',
  styleUrls: ['./recibos-servicios.page.scss'],
})
export class RecibosServiciosPage implements OnInit,OnDestroy {
  documentosServicios=[];
  constructor(
    public Router:Router,
    public SweetalertService:SweetalertService,
    public DatosServicioService:DatosServicioService
  ) { }

  ngOnInit() {
    this.documentosServicios=this.DatosServicioService.getRecibosServico();
    if(this.documentosServicios.length==0){
      this.SweetalertService.modal("info","No se recibieron los recibos generados.");
      this.Router.navigateByUrl("menu-principal");
    }
  }

  irRuta(ruta){
    this.Router.navigateByUrl(ruta);
  }
  
  ngOnDestroy(){
    this.DatosServicioService.deleteRecibosServico();
  }
}
