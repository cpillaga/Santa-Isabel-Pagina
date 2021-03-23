import { Component, OnInit } from '@angular/core';
import { DescargasService } from '../../services/descargas.service';
import { Descargables } from '../../interfaces/interfaces';
import { URL_SERVICE } from '../../config/config';

@Component({
  selector: 'app-descargas',
  templateUrl: './descargas.component.html',
  styleUrls: ['./descargas.component.css']
})
export class DescargasComponent implements OnInit {

  archivos: Descargables[] = [];

  constructor(
    public _descargables: DescargasService
  ) { }

  ngOnInit(): void {
    this.getArchivos();
  }

  getArchivos(){
    this._descargables.getArchivos().subscribe(resp => {
      this.archivos = resp;
    });
  }

  public abrirFile(link: string){
    let archivo =URL_SERVICE.url + '/upload/' + link;
    window.open(archivo);
  }

}
