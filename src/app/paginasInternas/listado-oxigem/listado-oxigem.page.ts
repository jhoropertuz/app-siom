import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { DatosEquiposService } from 'src/app/service/datos-equipos.service';
import { BaseService } from '../../service/base.service';
import { SweetalertService } from '../../service/sweetalert.service';
@Component({
  selector: 'app-listado-oxigem',
  templateUrl: './listado-oxigem.page.html',
  styleUrls: ['./listado-oxigem.page.scss'],
})
export class ListadoOxigemPage implements OnInit {
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
  constructor(public DatosEquiposService:DatosEquiposService ,public Router:Router,private ActivatedRoute: ActivatedRoute, public BaseService:BaseService,public Sweetalert:SweetalertService,private MenuController:MenuController) { }

  ngOnInit() {
    this.MenuController.enable(true, 'menu');
    this.listadoTipo=this.ActivatedRoute.snapshot.params.tipo;
    if(this.listadoTipo=='recoger'){
      this.titulo="Recoger"
      this.getListadoRecoger();
    }else if(this.listadoTipo=='entregar'){
      this.titulo="Entregar"
      this.getListadoRecoger();
    }


  }
 
  irRuta(ruta){
    this.Router.navigateByUrl(ruta);
  }


  /* irAccion(data){
    if (this.listadoTipo=='recoger') {
      this.DatosEquiposService.setEquipos([data]);
      this.Router.navigateByUrl('recoger-oxigem'); 
    }
  } */

  guardarSeleccion(estado=null){
    this.equipoSeleccionado.estadoEntregaEquipo=estado;
    this.equiposSeleccionados.push(this.equipoSeleccionado);
    this.inicioLista();
  }

  cancelarSeleccion(){
    this.inicioLista();
  }

  inicioLista(){
    this.mostrarSeleccionado=false;
    this.mostrarSeleccionados=false;
  }

  seleccionarEquipo(equipo){
    this.equipoSeleccionado=equipo;
    this.mostrarSeleccionado=true;
  }

  eliminarSeleccion(index){
    console.log("eliminar:"+index);
    this.equiposSeleccionados.splice(index,1);
    if(this.equiposSeleccionados.length==0){
      this.mostrarSeleccionados=false;
    }
  }

  finalizarSelecciones(ruta){
    this.DatosEquiposService.setEquipos(this.equiposSeleccionados);
    this.Router.navigateByUrl(ruta); 
  }

  mostrarListaSeleccionados(){
    this.mostrarSeleccionados=true;
  }

  reiniciarSeleccionados(){
    this.equiposSeleccionados=[];
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

  buscando(){

  }

  getListadoRecoger(){
    /* alert('cargar recoger'); */
     this.BaseService.postJson('repartidores','movimientosEquipos','mostrarRecogidosAPI').subscribe(res=>{
       if (res.RESPUESTA="EXITO") {
        if (res.DATOS) {
          this.listadoTodos=res.DATOS;
          this.listado=this.listadoTodos;
          this.listadoFilter=this.listadoTodos;
          console.log(this.listadoTodos);
        }else{
          this.Sweetalert.notificacion("info","No se encontraron servicios.");
        }
       }else{
         this.Sweetalert.modal("error",res.mensaje);
       }
      
     });
    
  }

  getListadoEntregar(){
    /* alert('cargar recoger'); */
  }

  doRefresh(event)  {
    this.getListadoRecoger();
    setTimeout(() => {
      event.target.complete();
    }, 1000);
  }

  ChangeSearchbar(value){
    let val=value;
    console.log(val);
     if (val && val.trim() !== '') {
      this.listado = this.listadoFilter.filter((item) => {
          return (item.personaRazonSocial.toString().toLowerCase().indexOf(val.toString().toLowerCase()) > -1);
      })
    } else{
      this.listado=this.listadoTodos;
    }
  }
}
