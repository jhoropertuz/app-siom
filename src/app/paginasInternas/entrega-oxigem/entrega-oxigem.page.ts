import { Component, OnInit , ViewChild, AfterViewInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from 'src/app/service/base.service';
import { DatosEquiposService } from 'src/app/service/datos-equipos.service';
import { SweetalertService } from 'src/app/service/sweetalert.service';
import { FirmaComponent } from 'src/app/shareds/firma/firma.component';

@Component({
  selector: 'app-entrega-oxigem',
  templateUrl: './entrega-oxigem.page.html',
  styleUrls: ['./entrega-oxigem.page.scss'],
})
export class EntregaOxigemPage implements OnInit {

  codigo="xxxx";
  firmaBase64;
  Servicio;
  equipos;

  constructor(public DatosEquiposService: DatosEquiposService,public Router:Router,private BaseService:BaseService, public Sweetalert:SweetalertService,private ActivatedRoute: ActivatedRoute) { 
    this.equipos=this.DatosEquiposService.getEquipos();
    if(this.equipos.length){
      console.log(this.equipos);
    }else{
        this.Sweetalert.notificacion("info","Datos Insuficientes.")
        this.Router.navigateByUrl("menu-principal");
    }
  }

  ngOnInit() {

  }

  entregar(){
    alert("entregar");
    let loading=this.BaseService.presentLoading();
      this.BaseService.postJson('ServiciosEquipo','buscarPorId',"").subscribe(res=>{
        console.log(res);
        if (res.RESPUESTA="EXITO") {
          this.Servicio=res.DATOS;
        }else{
          this.Sweetalert.modal("error",res.MENSAJE);
        }
        loading.then(e=>{
          e.dismiss();});
      });
  }

  firmaBase64Event($event){
    this.firmaBase64=$event;
  }

}
