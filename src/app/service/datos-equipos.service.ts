import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosEquiposService {
  equipos=[];
  cliente=[];
  constructor() { }


  setEquipos(equipos){
    return new Promise((resolve, reject) => {
      this.equipos=equipos;
      console.log("promesa set eqipo");
      return resolve(true);
    });
  }

  getEquipos(){
    return this.equipos;
  }

  deleteEquipos(){
    this.equipos=[];
  }
}
