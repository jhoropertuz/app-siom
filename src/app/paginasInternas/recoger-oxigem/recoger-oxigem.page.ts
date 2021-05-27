import { Component, OnInit , ViewChild, AfterViewInit} from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
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
  form_persona;
  form_registrar_persona;
  registrarPersona=false;
  formularioCompleto=false;
  personaId="";

  constructor(public formBuilder: FormBuilder,public DatosEquiposService: DatosEquiposService,public Router:Router,private BaseService:BaseService, public Sweetalert:SweetalertService,private ActivatedRoute: ActivatedRoute) { 
    this.equipos=this.DatosEquiposService.getEquipos();
    if(this.equipos.length){
      console.log(this.equipos);
    }else{
        this.Sweetalert.notificacion("info","Datos Insuficientes.")
        this.Router.navigateByUrl("menu-principal");
    }
   
  }

  ngOnInit() {
    this.form_persona = this.formBuilder.group({
      personaTipoIdentificacion: new FormControl('1', Validators.compose([Validators.required])),
      personaIdentificacion: new FormControl('', Validators.compose([Validators.required]))
    });

    this.form_registrar_persona = this.formBuilder.group({
      personaNombres: new FormControl(''),
      personaApellidos: new FormControl(''),
      personaCelular: new FormControl(''),
      personaCorreoElectronico: new FormControl('')
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
    ]
  };
  
  
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
    alert("ok");
    let  imageUrl = image.webPath;
    console.log(image);
  }



  recogido(){
    let persona=Object.assign(this.form_registrar_persona.value, this.form_persona.value);
    persona.personaId=this.personaId;
    let equiposID=this.equipos.map(res=>{
      return res.equipoId; 
    });
    console.log({firmaBase64:this.firmaBase64,coordenadas:this.coordenadas,equipos:equiposID,persona:persona});
    
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
