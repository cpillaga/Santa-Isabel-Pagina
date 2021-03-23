import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lugares, Sector, Tipo, Redes } from '../interfaces/interfaces';
import { URL_SERVICE } from '../config/config';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DescargasService {

  constructor(
    private http: HttpClient
  ) { }

  getArchivos(){

    const url = URL_SERVICE.url + '/descargables';

    return this.http.get(url)
        .map((resp: any) =>
            resp.descargables
        );
  }

}
