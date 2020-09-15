import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info:any={};
  cargada=false;

  constructor(private http: HttpClient) {
    
    //leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
        .subscribe(response =>{

          this.cargada=true;
          this.info=response;
          console.log(response);
        });
   }
}
