import { Component, OnInit } from '@angular/core';
import 'ol/ol.css';
import Map from 'ol/Map';
import { Tile, Vector as Vec } from 'ol/layer';
import { OSM, Vector } from 'ol/source';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import LineString from 'ol/geom/LineString';
import Feature from 'ol/Feature';
import { Stroke, Style } from 'ol/style';
import { RutasService } from '../../services/rutas.service';
import { Rutas, CoordRuta } from '../../interfaces/interfaces';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.component.html',
  styleUrls: ['./rutas.component.css']
})
export class RutasComponent implements OnInit {
  rutas: Rutas[] = [];
  coord: CoordRuta[] = [];
  map;

  center;

  constructor(
    public _rutaService: RutasService
  ) { }
   
  ngOnInit(): void {
    setTimeout(() => {
      this.center = fromLonLat([-79.315125, -3.274187]);
      this.initilizeMap();
      this.getRutas();
    }, 200);
  }

  initilizeMap() {

    this.map = new Map({
      target: 'map',
      layers: [
        new Tile({
          source: new OSM()
        })
      ],
      view: new View({
        center: this.center,
        zoom: 12
      })
    });

  }

  getRutas(){
    this._rutaService.getRuta().subscribe(resp=>{
      this.rutas = resp;
    });
  }

  graficarRuta(idRuta){

    this._rutaService.getCoords(idRuta).subscribe(resp => {
      let coords = [];
      const cordRuta: CoordRuta[] = resp;

      for (let i = 0; i < cordRuta.length; i++) {
        coords[i] = [cordRuta[i].lng, cordRuta[i].lat];
      }

      const lineString = new LineString(coords);
      lineString.transform('EPSG:4326', 'EPSG:3857');

      const feature = new Feature({
        geometry: lineString,
        name: 'Line'
      });

      const lineStyle = new Style({
        stroke: new Stroke({
          color: '#bd2130',
          width: 8
        })
      });

      const source = new Vector({
        features: [feature]
      });
      
      const vector = new Vec({
        source: source,
        style: [lineStyle]
      });

      this.map.addLayer(vector);
    });

  }


}