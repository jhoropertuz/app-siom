import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endpoind } from '../endpoind';
import { LoadingController } from '@ionic/angular';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class BaseService {

  headers =  new HttpHeaders({
    'Content-Type': 'aplication/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    'Access-Control-Allow-Headers' : 'Access-Control-Allow-Headers,Content-Type,Access-Control-All-Methods'
  });

   
  constructor(private AuthService:AuthService,private http: HttpClient,public loadingController: LoadingController) { }
  
  async presentLoading( mensaje="Cargando...",clase='my-custom-class') {
    let loading = await this.loadingController.create({
      cssClass: clase,
      message: mensaje
    });
    loading.present();
    return  loading;
  }

  getJson(url):Observable<any>{
    return this.http.get<any>(Endpoind.API_BASE+url);
  }

  postJson(componente,controlador,operacion,Data:any={},loading=true):Observable<any>{
    Data.componente=componente;
    Data.controlador=controlador;
    Data.accion=operacion;
    Data.authUsuarioID=this.AuthService.getUsuario().usuarioId;
    return this.http.post<any>(Endpoind.API_BASE,Data);
  }

  putJson(Data:any,url):Observable<any>{
    return this.http.patch<any>(Endpoind.API_BASE+url,Data);
  }

  /* sesion(controlador="sesion",operacion="ApiPorIdentificacion",Data:any={},loading=true):Observable<any>{
    Data.controlador=controlador;
    Data.accion=operacion;
    this.headers.append('Authorization', 'Basic' + base64.encode("joanathan" + ':' + "12345") );
    return this.http.post<any>(Endpoind.API_BASE,Data,{ headers:this.headers});
  } */
}
