import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lugares, Sector, Tipo, Redes } from '../interfaces/interfaces';
import { URL_SERVICE } from '../config/config';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RutasService {

  constructor(
    private http: HttpClient
  ) { }

  getRuta(){

    const url = URL_SERVICE.url + '/ruta';

    return this.http.get(url)
        .map((resp: any) =>
            resp.ruta
        );
  }

  getCoords(idRuta){
    const url = URL_SERVICE.url + '/coordRuta/' + idRuta;
    return this.http.get(url)
        .map((resp: any) =>
            resp.coords
        );
  }
}
