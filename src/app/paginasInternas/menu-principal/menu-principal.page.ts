import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { SweetalertService } from 'src/app/service/sweetalert.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {

  constructor(public SweetalertService:SweetalertService ,private MenuController:MenuController,public Router:Router) { }

  ngOnInit() {
    this.MenuController.enable(true, 'menu');
    /* var url="https://siom.oximeiser.com/archivos/oximeiser/servicios/280521123638/recibos-equipos/008777-60b12a266ab45.pdf";    
    window.open(url, 'Download'); */
  }

  irRuta(ruta){
    if(ruta=="listado-oxigem/entregar"){
      this.SweetalertService.modal("info","En construcción....")
    }else{
      this.Router.navigateByUrl(ruta);
    }
  }

}
