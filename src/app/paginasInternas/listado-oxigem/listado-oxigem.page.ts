import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DatosEquiposService } from 'src/app/service/datos-equipos.service';
import { BaseService } from '../../service/base.service';
import { SweetalertService } from '../../service/sweetalert.service';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-listado-oxigem',
  templateUrl: './listado-oxigem.page.html',
  styleUrls: ['./listado-oxigem.page.scss'],
})
export class ListadoOxigemPage implements OnInit {
  cantidadItemLista=10;
  inicioItemLista=0;
  buscadorActivo=false;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  buscar=false;
  buscarAnimacion=false;
  listadoTipo;
  titulo;
  listado=[];
  listadoFilter=[];
  listadoTodos=[];
  equiposSeleccionados=[];
  equipoSeleccionado;
  mostrarSeleccionados=false;
  mostrarSeleccionado=false;
  active=true;
  openIndex;
  eventCargandoLista;
  configLista;
  RECOGER=false;
  ENTREGAR=false;
  constructor(public DatosEquiposService:DatosEquiposService ,public Router:Router,private ActivatedRoute: ActivatedRoute, public BaseService:BaseService,public Sweetalert:SweetalertService,private MenuController:MenuController) { }

  ngOnInit() {
    this.MenuController.enable(true, 'menu');
    this.listadoTipo=this.ActivatedRoute.snapshot.params.tipo;
    if(this.listadoTipo=='recoger'){
      this.titulo="Recoger";
      this.RECOGER=true;
      this.configLista={
        'operacionBusqueda': ["recogerEquipos","buscarEquipos"],
        'operacionListado':  ["recogerEquipos","listaPendientesPaginado"],
        'operacionOtrosPendientes':  ["entregarEquipos","otrosPendientesPorCliente"]
      }
    }else if(this.listadoTipo=='entregar'){
      this.titulo="Entregar";
      this.ENTREGAR=true;
      this.configLista={
        'operacionBusqueda': ["entregarEquipos","buscarEquipos"],
        'operacionListado':  ["entregarEquipos","listaPendientesPaginado"],
        'operacionOtrosPendientes':  ["entregarEquipos","otrosPendientesPorRecibo"]
      }
    }
    this.getListado();
  }
 
  irRuta(ruta){
    this.Router.navigateByUrl(ruta);
  }

  guardarSeleccion(estado=null){
    this.equipoSeleccionado.estadoEntregaEquipo=estado;
    this.equiposSeleccionados.push(this.equipoSeleccionado);
    if(this.ENTREGAR){
      this.finalizarSelecciones('entrega-oxigem');

    }else{
      this.inicioLista();
    }
  }

  cancelarSeleccion(){
    this.inicioLista();
  }

  inicioLista(){
    this.mostrarSeleccionado=false;
    this.mostrarSeleccionados=false;
  }

  seleccionarEquipo(equipo){
    equipo.otrosPendientes=[];
      let data;
      if(this.ENTREGAR){
        data={reciboID:equipo.reciboId,equipoID:equipo.equipoId};
      }else{
        data={clienteID:equipo.clienteId,equipoID:equipo.equipoId};
      }
      this.BaseService.postJson('repartidores',this.configLista.operacionOtrosPendientes[0],this.configLista.operacionOtrosPendientes[1],data).subscribe(res=>{
          if(res.RESPUESTA="EXITO"){
            if(res.DATOS){
              equipo.otrosPendientes=res.DATOS;
            }
            this.equipoSeleccionado=equipo;
            if(this.buscadorActivo){this.buscador();}
            this.mostrarSeleccionado=true;
          }else{
            this.Sweetalert.modal("error","No se a cargado correctamente la info del equipo.");
          }
      });
   /*  }else{
      this.equipoSeleccionado=equipo;
      if(this.buscadorActivo){this.buscador();}
      this.mostrarSeleccionado=true;
    } */
   
  }

  eliminarSeleccion(index){
    console.log("eliminar:"+index);
    this.equiposSeleccionados.splice(index,1);
    if(this.equiposSeleccionados.length==0){
      this.mostrarSeleccionados=false;
    }
  }

  finalizarSelecciones(ruta){
    let loading=this.BaseService.presentLoading();
    this.DatosEquiposService.setEquipos(this.equiposSeleccionados).then((val)=>{
      setTimeout(() => {
        loading.then(e=>{
          e.dismiss();
        });
        this.reiniciarSeleccionados();
        this.Router.navigateByUrl(ruta);
      }, 500);
    }).catch(e=>{
      console.log(e);
    })
  }

  mostrarListaSeleccionados(){
    this.mostrarSeleccionados=true;
  }

  reiniciarSeleccionados(){
    this.equiposSeleccionados=[];
  }

  loadData(event) {
    if(!this.buscadorActivo){
      this.inicioItemLista=this.inicioItemLista+10;
      this.eventCargandoLista=event;
      if (this.listado.length<10) {
        this.eventCargandoLista.target.disabled = true;
      } 
      this.getListado();
    }
    /* setTimeout(() => {
      console.log('Done'); 
      event.target.complete();
       if (this.listado.length == 1000) {
        event.target.disabled = true;
      } 
    }, 500); */
    
  }

  toggleInfiniteScroll() {
    console.log("jdhkfjkj");
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
    this.BaseService.postJson('repartidores',this.configLista.operacionListado[0],this.configLista.operacionListado[1],{inicioEquiposRecoger:this.inicioItemLista,mostrarEquiposRecoger: this.cantidadItemLista }).subscribe(res=>{
      if (res.RESPUESTA="EXITO") {
       if (res.DATOS) {
         this.listadoTodos=[].concat(this.listadoTodos,res.DATOS);
         this.listado=this.listadoTodos;
         this.listadoFilter=this.listadoTodos;
         console.log(this.listadoTodos);
       }else{
         this.Sweetalert.notificacion("info","No se encontraron servicios.");
       }
      }else{
        this.Sweetalert.modal("error",res.mensaje);
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
      this.BaseService.postJson('repartidores',this.configLista.operacionBusqueda[0],this.configLista.operacionBusqueda[1],{datoBusqueda:value}).subscribe(res=>{
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
