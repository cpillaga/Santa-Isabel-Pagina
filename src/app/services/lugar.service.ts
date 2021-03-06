import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lugares, Sector, Tipo, Redes } from '../interfaces/interfaces';
import { URL_SERVICE } from '../config/config';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LugarService {

  constructor(
    private http: HttpClient
  ) { }

  getLugar(){

    const url = URL_SERVICE.url + '/lugar';

    return this.http.get(url)
        .map((resp: any) =>
            resp.lugar
        );
  }

  getLugarID(id){

    const url = URL_SERVICE.url + '/lugar/id/' + id;

    
    return this.http.get(url)
        .map((resp: any) =>
            resp.lugar
        );
  }

  insertarLugar(lugar: Lugares){

    const url = URL_SERVICE.url + '/lugar';

    return this.http.post( url, lugar)
        .map((resp: any) =>
            resp
        );
  }

  getSector(){
    const url = URL_SERVICE.url + '/sector';

    return this.http.get(url)
        .map((resp: any) =>
            resp.sector
        );
  }

  getTipo(){
    const url = URL_SERVICE.url + '/tipo';

    return this.http.get(url)
        .map((resp: any) =>
            resp.tipo
        );
  }

  getTipoID(id){
    const url = URL_SERVICE.url + '/tipo/' + id;

    return this.http.get(url)
        .map((resp: any) =>
            resp.tipo
        );
  }

  addSector(sector: Sector){
    const url = URL_SERVICE.url + '/sector';

    return this.http.post(url, sector)
        .map((resp: any) =>
            resp.sector
        );
  }

  addTipo(tipo: Tipo){
    const url = URL_SERVICE.url + '/tipo';

    return this.http.post(url, tipo)
        .map((resp: any) =>
            resp.tipo
        );
  }

  eliminarLugar(id){
    const url = URL_SERVICE.url + '/lugar/' + id;

    return this.http.delete(url)
        .map((resp: any) =>
            resp
        );
  }

  getRedes(id){
    const url = URL_SERVICE.url + '/redes/' + id;

    return this.http.get(url)
        .map((resp: any) =>
            resp
        );
  }

  addRedes(redes: Redes){
    const url = URL_SERVICE.url + '/redes';

    return this.http.post( url, redes)
    .map((resp: any) =>
        resp
    );
  }

  getTipoDesc(descTipo){
    const url = URL_SERVICE.url + '/tipo/descripcion/' + descTipo;

    return this.http.get(url)
        .map((resp: any) =>
            resp.tipo
        );
  };

  getLugarTipo(idTipo){
    
    const url = URL_SERVICE.url + '/lugar/tipo/' + idTipo;

    return this.http.get(url)
    .map((resp: any) =>
        resp.lugar
    );
  }
}
