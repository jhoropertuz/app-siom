import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';
import { SweetalertService } from 'src/app/service/sweetalert.service';
import { Endpoind } from '../../endpoind';
@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {

  constructor(public AuthService:AuthService ,public SweetalertService:SweetalertService ,private MenuController:MenuController,public Router:Router) { }
  usuarioAvatar="assets/profile.jpg";
  ngOnInit() {
    this.MenuController.enable(true, 'menu');
    let avatarCliente=this.AuthService.getUsuario().usuarioAvatar;
    if(avatarCliente){
      this.usuarioAvatar=Endpoind.ARCHIVO_BASE+avatarCliente;
    }
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
