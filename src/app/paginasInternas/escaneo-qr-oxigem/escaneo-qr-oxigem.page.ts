
import { Component, ViewChild, ElementRef,OnInit,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController, LoadingController, Platform } from '@ionic/angular';
import jsQR from 'jsqr';
import { BaseService } from 'src/app/service/base.service';
import { DatosEquiposService } from 'src/app/service/datos-equipos.service';
import { SweetalertService } from 'src/app/service/sweetalert.service';

@Component({
  selector: 'app-escaneo-qr-oxigem',
  templateUrl: './escaneo-qr-oxigem.page.html',
  styleUrls: ['./escaneo-qr-oxigem.page.scss'],
})
export class EscaneoQrOxigemPage implements OnInit , OnDestroy {
  buscar=false;
  buscarAnimacion=false;
  equipoEscaneado;
  equipos=[];
  verEquipo=false;
  verEscaner=true;
  verListaEscaneo=false;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private plt: Platform,
    private BaseService:BaseService,
    public SweetalertService:SweetalertService,
    public Router:Router,
    public DatosEquiposService:DatosEquiposService
  ) {
    const isInStandaloneMode = () =>
      'standalone' in window.navigator && window.navigator['standalone'];
    if (this.plt.is('ios') && isInStandaloneMode()) {
      console.log('I am a an iOS PWA!');
      // E.g. hide the scan functionality!
    }
  }
  ngOnInit() {
    
  }@ViewChild('video', { static: false }) video: ElementRef;
  @ViewChild('canvas', { static: false }) canvas: ElementRef;
  @ViewChild('fileinput', { static: false }) fileinput: ElementRef;
 
  canvasElement: any;
  videoElement: any;
  canvasContext: any;
  scanActive = false;
  scanResult = null;
  loading: HTMLIonLoadingElement = null;
  leerQR=true;
  
 
  ngAfterViewInit() {
    this.canvasElement = this.canvas.nativeElement;
    this.canvasContext = this.canvasElement.getContext('2d');
    this.videoElement = this.video.nativeElement;
    this.startScan();
  }


  buscarEquipo(serial){
    this.BaseService.postJson("productos","equipos","buscarPorSerialEnServicioAPI",{equipoSerial:serial}).subscribe(res=>{
      console.log(res);
      if(res.RESPUESTA="EXITO"){
        if(res.DATOS!= null && res.DATOS.length>0){
          this.equipoEscaneado=res.DATOS[0];
          this.stopScan();
          this.verEscaner=false;
          this.verListaEscaneo=false;
          this.verEquipo=true;
        }else{
          this.SweetalertService.notificacion("info","No se encontro el elemento.");
          this.startScan();
        }
      }else{
        this.SweetalertService.modal("error",res.MENSAJE);
      }
    });
  }

  AceptarEscaneo(){
    this.equipos.push(this.equipoEscaneado);
    this.verEscaner=true;
    this.verEquipo=false;
    this.verListaEscaneo=false;
    this.startScan();
  }

  cancelarEscaneo(){
    this.inicirEscaneo();
  }

  mostarListaEscaneo(){
    this.verEquipo=false;
    this.verListaEscaneo=true;
    this.verEscaner=false;
    this.stopScan();
  }

  inicirEscaneo(){
    this.verEquipo=false;
    this.verListaEscaneo=false;
    this.verEscaner=true;
    this.startScan();
  }

  accionBoton(){
    if(!this.verEscaner){
      this.inicirEscaneo();
    }else{
      if(this.equipos.length>0){
        this.mostarListaEscaneo();
      }else{
        this.SweetalertService.notificacion("info","No se encontraron elementos escaneados.")
      }
    }
  }

  reiniciarEscaneoElementos(){
    this.equipos=[];
  }

  sacarDeLista(index){
    console.log("eliminar:"+index);
    this.equipos.splice(index,1);
    if(this.equipos.length==0){
      this.accionBoton();
    }
  }

  finalizarEscaneo(ruta){
    this.Router.navigateByUrl(ruta);
    this.DatosEquiposService.setEquipos(this.equipos);
  }
 
  // Helper functions
  async showQrToast() {
    this.buscarEquipo(this.scanResult);
    const toast = await this.toastCtrl.create({
      message: `Open ${this.scanResult}?`,
      //position: 'top',
      duration: 5000,
      buttons: [
        {
          text: 'Abrir',
          handler: () => {
            window.open(this.scanResult, '_self');
          }
        }
      ]
    });
    toast.present();
     
    if(this.isUrl(this.scanResult)){
      window.open(this.scanResult, '_self');
    }else{
      this.startScan();
    }
    
  }

  reset() {
    this.scanResult = null;
  }
 
  stopScan() {
    
    try {
      this.videoElement.srcObject.getVideoTracks().forEach(function (track) {
        track.stop();
      });
    } catch (error) {
      console.log(error);
    }
    this.scanActive = false;
    
  }



  async startScan() {
    // Not working on iOS standalone mode!
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment' }
    });
   
    this.videoElement.srcObject = stream;
    // Required for Safari
    this.videoElement.setAttribute('playsinline', true);
   
    this.loading = await this.loadingCtrl.create({});
    await this.loading.present();
   
    this.videoElement.play();
    requestAnimationFrame(this.scan.bind(this));
  }
   
  async scan() {
    if (this.videoElement.readyState === this.videoElement.HAVE_ENOUGH_DATA) {
      if (this.loading) {
        await this.loading.dismiss();
        this.loading = null;
        this.scanActive = true;
      }
   
      this.canvasElement.height = this.videoElement.videoHeight;
      this.canvasElement.width = this.videoElement.videoWidth;
   
      this.canvasContext.drawImage(
        this.videoElement,
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });
   
      if (code) {
        this.scanActive = false;
        this.scanResult = code.data;
        /* this.showQrToast(); */
        this.buscarEquipo(this.scanResult);
      } else {
        if (this.scanActive) {
          requestAnimationFrame(this.scan.bind(this));
        }
      }
    } else {
      requestAnimationFrame(this.scan.bind(this));
    }
  }

  captureImage() {
    this.fileinput.nativeElement.click();
  }
   
  handleFile(files: FileList) {
    const file = files.item(0);
   
    var img = new Image();
    img.onload = () => {
      this.canvasContext.drawImage(img, 0, 0, this.canvasElement.width, this.canvasElement.height);
      const imageData = this.canvasContext.getImageData(
        0,
        0,
        this.canvasElement.width,
        this.canvasElement.height
      );
      const code = jsQR(imageData.data, imageData.width, imageData.height, {
        inversionAttempts: 'dontInvert'
      });
   
      if (code) {
        this.scanResult = code.data;
        this.showQrToast();
      }
    };
    img.src = URL.createObjectURL(file);
  }


   isUrl(s) {   
    var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    return regexp.test(s);
  }


  cambiarEstado(){
    this.leerQR=!this.leerQR;
    if(this.leerQR){
      this.startScan();
      this.buscar=false;
    }else{
      this.stopScan();
    }
  }

  
  ngOnDestroy(){
    this.stopScan();
  }

  buscador(){
    if(this.buscar){
      this.buscarAnimacion=false;
      setTimeout(() => {
        this.buscar=false;

      }, 900);
    }else{
      this.buscar=true;
      this.cambiarEstado();
      this.buscarAnimacion=true;
    }
  } 

}
