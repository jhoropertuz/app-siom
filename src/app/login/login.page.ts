import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AuthService } from '../service/auth.service';
import { BaseService } from '../service/base.service';
import { SweetalertService } from '../service/sweetalert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
 validations_form: FormGroup;
 esperar=true;
constructor(public formBuilder: FormBuilder, private router: Router, public BaseService:BaseService,public Sweetalert:SweetalertService, private MenuController:MenuController, public AuthService:AuthService) { }
   
  ngOnInit() {
    this.MenuController.enable(false, 'menu');
    this.validations_form = this.formBuilder.group({
      usuarioName: new FormControl('', Validators.compose([
        Validators.required
       /* , Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$') */
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
    
    setTimeout(()=>{
      this.esperar=false;
    }, 3000);
   
  }

  validation_messages = {
    'usuarioName': [
      { type: 'required', message: 'Usuario es requerido.' }
    ],
    'password': [
      { type: 'required', message: 'Contraseña es requerida.' }
    ]
  };

  onSubmitLogin(values){
    console.log(values);
   
    this.BaseService.postJson('sistema','sesion','ApiValidarUsuario',values).subscribe(res=>{
      console.log(res);
      if(res.RESPUESTA=='EXITO'){
        this.AuthService.DatosUsuario(res.DATOS);
        this.Sweetalert.notificacion('success',res.MENSAJE);
        this.router.navigateByUrl("listado-oxigem/recoger");
      }else{
        let tipoModal=(res.RESPUESTA=='INFO')?'info':'error';
        this.Sweetalert.modal(tipoModal,res.MENSAJE);
      } 
    });
    
    
  }


}
