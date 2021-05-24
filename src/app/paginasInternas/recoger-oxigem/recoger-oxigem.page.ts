import { Component, OnInit , ViewChild, AfterViewInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from 'src/app/service/base.service';
import { DatosEquiposService } from 'src/app/service/datos-equipos.service';
import { SweetalertService } from 'src/app/service/sweetalert.service';
import { FirmaComponent } from 'src/app/shareds/firma/firma.component';
import { Plugins } from "@capacitor/core";
@Component({
  selector: 'app-recoger-oxigem',
  templateUrl: './recoger-oxigem.page.html',
  styleUrls: ['./recoger-oxigem.page.scss'],
})
export class RecogerOxigemPage implements OnInit {

  codigo="xxxx";
  firmaBase64;
  Servicio;
  equipos;
  coordenadas={lat:0,lng:0};
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

    Plugins.Geolocation.getCurrentPosition().then(result => {
      console.log(result);
      this.coordenadas.lat = result.coords.latitude;
      this.coordenadas.lng = result.coords.longitude; 
    });

  }

  

  recogido(){

    console.log({firmaBase64:this.firmaBase64,coordenadas:this.coordenadas,equipos:this.equipos});
    
    /* alert("recogido");
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
      }); */
  }

  firmaBase64Event($event){
    this.firmaBase64=$event;
  }
}
