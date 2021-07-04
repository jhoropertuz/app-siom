import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DatosEquiposService } from 'src/app/service/datos-equipos.service';
import { BaseService } from '../../service/base.service';
import { SweetalertService } from '../../service/sweetalert.service';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-historial-reparto',
  templateUrl: './historial-reparto.page.html',
  styleUrls: ['./historial-reparto.page.scss'],
})
export class HistorialRepartoPage implements OnInit {
  cantidadItemLista=10;
  inicioItemLista=0;
  buscadorActivo=false;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  buscar=false;
  buscarAnimacion=false;
  
  listado=[];
  listadoFilter=[];
  listadoTodos=[];
  equipoSeleccionado;
  mostrarSeleccionado=false;
  eventCargandoLista;

  COLORES_ESTADOS={
    "ENSERVICIO":"#6AD64D",
    "RECOGIDO": "#6AE4FC",
    "PERDIDA": "#FC588F",
    "NOFUNCIONO" : "#FC588F",
    "PORENTREGAR" : "#F90244",
    "ENREPARTO" : "#F99C2A"
  }
  constructor(public DatosEquiposService:DatosEquiposService ,public Router:Router,private ActivatedRoute: ActivatedRoute, public BaseService:BaseService,public Sweetalert:SweetalertService,private MenuController:MenuController) { }

  ngOnInit() {
    this.MenuController.enable(true, 'menu');
    this.getListado();
  }

  cancelarSeleccion(){
    this.inicioLista();
  }

  inicioLista(){
    this.mostrarSeleccionado=false;
  }

  seleccionarEquipo(equipo){
    equipo.otrosPendientes=[];
    this.equipoSeleccionado=equipo;
    if(this.buscadorActivo){this.buscador();}
    this.mostrarSeleccionado=true;
  }

  loadData(event) {
    /* if(!this.buscadorActivo){
      this.inicioItemLista=this.inicioItemLista+10;
      this.eventCargandoLista=event;
      if (this.listado.length<10) {
        this.eventCargandoLista.target.disabled = true;
      } 
      this.getListado();
    } */
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  buscador(){
    if(this.buscar){
      this.buscarAnimacion=false;
      setTimeout(() => {
        this.buscar=false;
         this.ChangeSearchbar(''); 
      }, 900);
    }else{
      this.buscar=true;
      this.buscarAnimacion=true;
    }
  }

  getListado(){
    this.BaseService.postJson('repartidores','repartosUsuario','historialApi',{}).subscribe(res=>{
      if (res.RESPUESTA="EXITO") {
       if (res.DATOS) {
         this.listadoTodos=[].concat(this.listadoTodos,res.DATOS);
         this.listado=this.listadoTodos;
         this.listadoFilter=this.listadoTodos;
         console.log(this.listadoTodos);
       }else{
         this.Sweetalert.notificacion("info",res.MENSAJE);
       }
      }else{
        this.Sweetalert.modal("error",res.MENSAJE);
      }
      if(this.eventCargandoLista){
        this.eventCargandoLista.target.complete();
      }
    });
  }

  reiniciar(){
    this.listadoTodos=[];
    this.listado=[];
    this.listadoFilter=[];
  }

  doRefresh(event)  {
    this.inicioItemLista=0;
    this.reiniciar();
    this.getListado();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  ChangeSearchbar(value){
     let val=value;
     if (val && val.trim() !== '' && val.length>3 ) {
       this.buscadorActivo=true;
      this.BaseService.postJson('repartidores','','',{datoBusqueda:value}).subscribe(res=>{
        if (res.RESPUESTA="EXITO") {
         if (res.DATOS) {
           this.listado=res.DATOS;
         }else{
          this.listado=[];
           this.Sweetalert.notificacion("info","No se encontraron equipos.");
         }
        }else{
          this.Sweetalert.modal("error",res.mensaje);
        }
      });
    }else{
      this.buscadorActivo=false;
      this.listado=this.listadoTodos;
    }
  }
}
