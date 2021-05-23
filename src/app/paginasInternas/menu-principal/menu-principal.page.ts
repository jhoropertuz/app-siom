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

  constructor( public SweetalertService:SweetalertService ,private MenuController:MenuController,public Router:Router) { }

  ngOnInit() {
    this.MenuController.enable(true, 'menu');
  }


  irRuta(ruta){
    if(ruta=="listado-oxigem/entregar"){
      this.SweetalertService.modal("info","En construcción....")
    }else{
      this.Router.navigateByUrl(ruta);
    }
  }

}
