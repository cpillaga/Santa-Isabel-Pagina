import { Component, OnInit } from '@angular/core';
import { IInputData } from 'fullyearcalendar-lib/lib/Interface/IInputData';
import { FullyearcalendarLibModule } from 'node_modules/fullyearcalendar-lib/';
import * as moment from 'moment';
import { Agenda } from '../../interfaces/interfaces';
import { AgendaService } from '../../services/agenda.service';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {
  fechaAct = new Date().toISOString();

  fechaA = {
    value: {
      fecha: this.fechaAct.substring(0,10)
    }
  };

  agenda: Agenda[] = [];

  constructor(
    public _agendaService: AgendaService,
  ) { }

  ngOnInit(): void {
    this.fechaAct = this.fechaAct.substring(0,10);
    this.buscarFecha(this.fechaA);
  }

  buscarFecha(fecha){

    let fecSel = fecha.value.fecha;

    this._agendaService.getAgenda(fecSel).subscribe(resp => {
      this.agenda = resp;
    });
  }
}
