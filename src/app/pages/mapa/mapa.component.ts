import { Component, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Router } from '@angular/router';
import { Lugares } from '../../interfaces/interfaces';
import { LugarService } from '../../services/lugar.service';
import 'ol/ol.css';
import Map from 'ol/Map';
import { Tile, Vector as Vec } from 'ol/layer';
import { OSM, Vector } from 'ol/source';
import View from 'ol/View';
import { fromLonLat, toLonLat } from 'ol/proj';
import Feature from 'ol/Feature';
import { Style, Icon } from 'ol/style';
import Point from 'ol/geom/Point';
import Overlay from 'ol/Overlay';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit {

  categoria = "";
  lugares: Lugares[] = [];
  lugarTipo: Lugares[] = [];
  cont = 0;
  contLay = 0;

  @ViewChild('closebuttonadd',  {static: false}) closebuttonadd;

  map;
  center;
  capa;

  constructor(
    private _lugarService: LugarService
  ) { }

  ngOnInit(): void {
    this.center = fromLonLat([-79.315125, -3.274187]);
    // this.getLugares();

    // setTimeout(() => {
      // this.getLugares();
    this.initilizeMap();
      // this.crearMarcador("Atractivos culturales");
    this.lugaresTipo('Atractivos culturales');
    // }, 200);

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

  crearMarcador(categoria){
    var container = document.getElementById('popup');
    var content = document.getElementById('popup-content');
    var closer = document.getElementById('popup-closer');

    var overlay = new Overlay({
      element: container,
      autoPan: true,
      autoPanAnimation: {
        duration: 250,
      },
    });

    closer.onclick = function () {
      overlay.setPosition(undefined);
      closer.blur();
      return false;
    };

    const marcadores = [];

    if(this.contLay > 0){
      this.map.removeLayer(this.capa);
    }

    this._lugarService.getTipoDesc(categoria).subscribe(resp => {
      this._lugarService.getLugarTipo(resp[0]._id).subscribe(lug => {

        for (let i = 0; i < lug.length; i++) {
          let marcador = new Feature({
            geometry: new Point(
                fromLonLat([lug[i].lng, lug[i].lat])// En dónde se va a ubicar
            ),
          });

          marcador.setStyle(new Style({
              image: new Icon({
                color: resp[0].color,
                crossOrigin: 'anonymous',
                src: 'assets/img/marcador.png',
                imgSize: [24, 24]
              })
          }));
          marcadores.push(marcador);
        }

        this.capa = new Vec({
            source: new Vector({
                features: marcadores,
            }),
        });

        this.map.addLayer(this.capa);
        this.map.addOverlay(overlay);

        // this.map.on('singleclick', function (evt) {
        //   console.log(evt.pixel);
        //   // var coordinate = evt.coordinate;
        //   // var hdms = toStringHDMS(toLonLat(coordinate));
        
        //   // content.innerHTML = '<p>You clicked here:</p><code>' + hdms + '</code>';
        //   // overlay.setPosition(coordinate);
        // });

        this.map.on('click', function(evt) {
          var pixel = this.getEventPixel(evt.originalEvent);
          var mapFeature = this.map.forEachFeatureAtPixel(pixel, function(feature, layer) {
              return feature;
                }, null, function(layer) {
                         return layer === this.capa;
                });
          console.log(mapFeature);
          });

        this.contLay = 1;
      });
    });
  }

  clearMapV(vectorLayer) {
    let features = [];
    features.length = 0;
    vectorLayer.destroyFeatures();
  }

  lugaresTipo(tipo){
    this._lugarService.getTipoDesc(tipo).subscribe(resp => {
      this._lugarService.getLugarTipo(resp[0]._id).subscribe(lug => {
          this.lugares = lug;
          console.log(this.lugares);
      });
    });
  }

  getLugares(){
    this._lugarService.getLugar().subscribe(resp => {
      this.lugares = resp;
      console.log(this.lugares);
    });
  }

  cambiarTipo(tipo){
    this.categoria = tipo;

    this.cont = 0;
    this.lugarTipo = [];

    for (let i = 0; i < this.lugares.length; i++) {
      if(this.lugares[i].tipo["descripcion"] == this.categoria ){
        console.log(this.lugares[i]);
        this.lugarTipo[this.cont] = this.lugares[i];
        this.cont += 1;
      }
    }
  }
}
