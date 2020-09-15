import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:InfoPagina={};
  cargada=false;

  equipo:any[]=[];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo(){
    //leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
    .subscribe((response:InfoPagina) =>{

    this.cargada=true;
    this.info=response;
    });
  }
  
  private cargarEquipo(){
    //leer el archivo JSON
    this.http.get('https://portafolio-angular-html-b0b40.firebaseio.com/equipo.json')
    .subscribe((response:any[]) =>{

    this.equipo=response;
    });

  }
}
