import { Component, OnInit, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Router } from '@angular/router';
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

import {  ActivatedRoute } from '@angular/router';
import { LugarService } from '../../services/lugar.service';
import { Lugares, Redes } from '../../interfaces/interfaces';

@Component({
  selector: 'app-detalle-lugar',
  templateUrl: './detalle-lugar.component.html',
  styleUrls: ['./detalle-lugar.component.css']
})
export class DetalleLugarComponent implements OnInit {

  idLugar: string;
  lugar: Lugares;
  redes: Redes;

  cont = 0;
  contLay = 0;

  map;
  center;
  capa;


  constructor(
    public route: ActivatedRoute,
    public _lugarService: LugarService
  ) { 
    this.idLugar = this.route.snapshot.paramMap.get("idLugar");
  }

  ngOnInit(): void {
    this.getLugar();
  }

  getLugar(){
    this._lugarService.getLugarID(this.idLugar).subscribe(resp => {
      this.lugar = resp;
      this.getRedes();
    });
  }

  getRedes(){
    this._lugarService.getRedes(this.idLugar).subscribe(resp => {
      this.redes = resp.redes[0];
    });
  }

  // initilizeMap() {

  //   this.map = new Map({
  //     target: 'map',
  //     layers: [
  //       new Tile({
  //         source: new OSM()
  //       })
  //     ],
  //     view: new View({
  //       center: this.center,
  //       zoom: 12
  //     })
  //   });
  // }

  // crearMarcador(categoria){
  //   var container = document.getElementById('popup');
  //   var content = document.getElementById('popup-content');
  //   var closer = document.getElementById('popup-closer');

  //   var overlay = new Overlay({
  //     element: container,
  //     autoPan: true,
  //     autoPanAnimation: {
  //       duration: 250,
  //     },
  //   });

  //   closer.onclick = function () {
  //     overlay.setPosition(undefined);
  //     closer.blur();
  //     return false;
  //   };

  //   const marcadores = [];

  //   if(this.contLay > 0){
  //     this.map.removeLayer(this.capa);
  //   }

  //   this._lugarService.getTipoDesc(categoria).subscribe(resp => {
  //     this._lugarService.getLugarTipo(resp[0]._id).subscribe(lug => {

  //       for (let i = 0; i < lug.length; i++) {
  //         let marcador = new Feature({
  //           geometry: new Point(
  //               fromLonLat([lug[i].lng, lug[i].lat])// En dónde se va a ubicar
  //           ),
  //         });

  //         marcador.setStyle(new Style({
  //             image: new Icon({
  //               color: resp[0].color,
  //               crossOrigin: 'anonymous',
  //               src: 'assets/img/marcador.png',
  //               imgSize: [24, 24]
  //             })
  //         }));
  //         marcadores.push(marcador);
  //       }

  //       this.capa = new Vec({
  //           source: new Vector({
  //               features: marcadores,
  //           }),
  //       });

  //       this.map.addLayer(this.capa);
  //       this.map.addOverlay(overlay);

  //       // this.map.on('singleclick', function (evt) {
  //       //   console.log(evt.pixel);
  //       //   // var coordinate = evt.coordinate;
  //       //   // var hdms = toStringHDMS(toLonLat(coordinate));
        
  //       //   // content.innerHTML = '<p>You clicked here:</p><code>' + hdms + '</code>';
  //       //   // overlay.setPosition(coordinate);
  //       // });

  //       this.map.on('click', function(evt) {
  //         var pixel = this.getEventPixel(evt.originalEvent);
  //         var mapFeature = this.map.forEachFeatureAtPixel(pixel, function(feature, layer) {
  //             return feature;
  //               }, null, function(layer) {
  //                        return layer === this.capa;
  //               });
  //         console.log(mapFeature);
  //         });

  //       this.contLay = 1;
  //     });
  //   });
  // }

}
