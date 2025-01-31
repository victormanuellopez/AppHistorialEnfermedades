import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private registros: any[] = [];
  
  constructor() { }

  guardarRegistro(datos: string){
    if(datos){
      this.registros.push(datos);
      localStorage.setItem('registrosData', JSON.stringify(this.registros));
      console.log(this.registros);
    }
  }

  listarRegistros(){

    const datos = localStorage.getItem('registrosData');
    if(datos){
      this.registros = JSON.parse(datos);

      this.registros.sort(function (a, b){
        return a.fecha - b.fecha;
      });
      //console.log(this.registros);
    }
    return this.registros; 
  }


}
