import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lugares, Sector, Tipo, Redes } from '../interfaces/interfaces';
import { URL_SERVICE } from '../config/config';
import 'rxjs/add/operator/map';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor(
    private http: HttpClient
  ) { }

  getAgenda(fecha){

    const url = URL_SERVICE.url + '/agenda/fecha/' + fecha;

    return this.http.get(url)
        .map((resp: any) =>
            resp.agenda
        );
  }

}
