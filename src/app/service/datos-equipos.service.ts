import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosEquiposService {
  equipos=[];
  constructor() { }


  setEquipos(equipos){
    this.equipos=equipos;
  }

  getEquipos(){
    return this.equipos;
  }

  deleteEquipos(){
    this.equipos=[];
  }
}
