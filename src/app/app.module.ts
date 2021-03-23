import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { LugarService } from './services/lugar.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetalleLugarComponent } from './pages/detalle-lugar/detalle-lugar.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { RutasComponent } from './pages/rutas/rutas.component';
import { FullyearcalendarLibModule } from 'fullyearcalendar-lib/';
import { RutasService } from './services/rutas.service';
import { AgendaService } from './services/agenda.service';
import { DescargasComponent } from './pages/descargas/descargas.component';
import { DescargasService } from './services/descargas.service';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    InformacionComponent,
    MapaComponent,
    DetalleLugarComponent,
    AgendaComponent,
    RutasComponent,
    DescargasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FullyearcalendarLibModule
  ],
  providers: [
    LugarService,
    AgendaService,
    RutasService,
    DescargasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
