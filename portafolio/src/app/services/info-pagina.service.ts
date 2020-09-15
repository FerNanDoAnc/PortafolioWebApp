import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:InfoPagina={};
  cargada=false;

  constructor(private http: HttpClient) {

    //leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
        .subscribe((response:InfoPagina) =>{

          this.cargada=true;
          this.info=response;
          console.log(response);
        });
   }
}