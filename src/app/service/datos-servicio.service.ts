import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosServicioService {

  recibosServico=[];
  constructor() { }


  setRecibosServico(recibosServico){
    this.recibosServico=recibosServico;
  }

  getRecibosServico(){
    return this.recibosServico;
  }

  deleteRecibosServico(){
    this.recibosServico=[];
  }
}
