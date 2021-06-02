import { Component, OnInit , ViewChild, AfterViewInit} from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseService } from 'src/app/service/base.service';
import { DatosEquiposService } from 'src/app/service/datos-equipos.service';
import { SweetalertService } from 'src/app/service/sweetalert.service';
import { FirmaComponent } from 'src/app/shareds/firma/firma.component';
import { Plugins } from "@capacitor/core";
import { AuthService } from 'src/app/service/auth.service';
import { DatosServicioService } from 'src/app/service/datos-servicio.service';
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
  form_persona;
  form_registrar_persona;
  registrarPersona=false;
  formularioCompleto=false;
  personaId="";
  permisosFirma:boolean=false;
  constructor(public DatosServicioService:DatosServicioService,private AuthService:AuthService ,public formBuilder: FormBuilder,public DatosEquiposService: DatosEquiposService,public Router:Router,private BaseService:BaseService, public Sweetalert:SweetalertService,private ActivatedRoute: ActivatedRoute) { 
    
   
  }

  ngOnInit() {

    this.equipos=this.DatosEquiposService.getEquipos();
    if(this.equipos.length){
      console.log("ingresando a recoger");
      console.log(this.equipos);
    }else{
        this.Sweetalert.notificacion("info","Datos Insuficientes.")
        this.Router.navigateByUrl("menu-principal");
    }

    this.form_persona = this.formBuilder.group({
      personaTipoIdentificacion: new FormControl('1', Validators.compose([Validators.required])),
      personaIdentificacion: new FormControl('', Validators.compose([Validators.required]))
    });

    this.form_registrar_persona = this.formBuilder.group({
      personaNombres: new FormControl('', Validators.compose([Validators.required])),
      personaApellidos: new FormControl('', Validators.compose([Validators.required])),
      personaCelular: new FormControl('', Validators.compose([Validators.required])),
      personaCorreoElectronico: new FormControl('', Validators.compose([Validators.required]))
    });

    Plugins.Geolocation.getCurrentPosition().then(result => {
      console.log(result);
      this.coordenadas.lat = result.coords.latitude;
      this.coordenadas.lng = result.coords.longitude; 
    });

    /* this.takePicture(); */

    this.form_persona.get("personaIdentificacion").valueChanges.subscribe(x => {
      this.registrarPersona=false;
      this.formularioCompleto=false;
   });

  }

  validation_messages = {
    'personaTipoIdentificacion': [
      { type: 'required', message: 'Tipo de identificación es requerido.' }
    ],
    'personaIdentificacion': [
      { type: 'required', message: 'Identificación es requerida.' }
    ],
    'personaNombres': [
      { type: 'required', message: 'Nombres es requerida.' }
    ],
    'personaApellidos': [
      { type: 'required', message: 'Apellidos es requerida.' }
    ],
    'personaCelular': [
      { type: 'required', message: 'Celular es requerida.' }
    ],
    'personaCorreoElectronico': [
      { type: 'required', message: 'Correo es requerida.' }
    ]
  };
  
  irRuta(ruta){
    this.Router.navigateByUrl(ruta);
  }
  buscarPersona(value){
    this.registrarPersona=false;
    this.formularioCompleto=false;
    let loading=this.BaseService.presentLoading();
    this.BaseService.postJson('personas','directorio',"validarExistenciaPersonaApi",value).subscribe(res=>{
      console.log(res);
      if (res.RESPUESTA=="EXITO") {
        this.formularioCompleto=true;
        this.registrarPersona=true;
        this.personaId=res.DATOS.personaId;
        this.form_registrar_persona.controls['personaNombres'].setValue(res.DATOS.personaNombres);
        this.form_registrar_persona.controls['personaApellidos'].setValue(res.DATOS.personaApellidos);
        this.form_registrar_persona.controls['personaCelular'].setValue(res.DATOS.personaCelular);
        this.form_registrar_persona.controls['personaCorreoElectronico'].setValue(res.DATOS.personaCorreoElectronico);
      }else if(res.RESPUESTA=="INFO"){
        this.formularioCompleto=true;
        this.registrarPersona=true;
        this.personaId="";
        this.form_registrar_persona.controls['personaNombres'].setValue("");
        this.form_registrar_persona.controls['personaApellidos'].setValue("");
        this.form_registrar_persona.controls['personaCelular'].setValue("");
        this.form_registrar_persona.controls['personaCorreoElectronico'].setValue("");
      }else{
        this.Sweetalert.modal("error",res.MENSAJE);
        this.personaId="";
      }
      loading.then(e=>{
        e.dismiss();});
    });
  }

  async takePicture () {
    let image = await Plugins.Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: Plugins.CameraResultType.Uri
    });
   /*  alert("ok"); */
    let  imageUrl = image.webPath;
    console.log(image);
  }



  recogido(){

    if(this.permisosFirma && this.firmaBase64 && this.equipos.length>0){
      let persona=Object.assign(this.form_registrar_persona.value, this.form_persona.value);
      persona.personaId=this.personaId;
      let equiposID=this.equipos.map(res=>{return {equipoID:res.equipoId,clienteID:res.clienteId,clientePersona:res.clientePersona,estadoEntregaEquipo:res.estadoEntregaEquipo};});
      let datos={
        firmaBase64:this.firmaBase64,
        coordenadas:this.coordenadas,
        equipos:equiposID,
        persona:persona
      };
      console.log(datos);
      let loading=this.BaseService.presentLoading();
      this.BaseService.postJson('repartidores','movimientosEquipos',"registrarRecogidaEquipos",datos).subscribe(res=>{
        console.log(res);
        if (res.RESPUESTA="EXITO") {
          this.DatosEquiposService.deleteEquipos();
          this.Sweetalert.notificacion("success","Recolección exitosa")
          this.DatosServicioService.setRecibosServico(res.DATOS);
          this.Router.navigateByUrl("recibos-servicios");
        }else{
          this.Sweetalert.modal("error",res.MENSAJE);
        }
        loading.then(e=>{
          e.dismiss();});
      });
    }else{
      this.Sweetalert.modal("info","Datos insuficientes para la operación.");
    }
    
    
  }

  firmaBase64Event($event){
    this.firmaBase64=$event;
  }

  permisoFirma(){
    console.log(this.permisosFirma);
  }
}
