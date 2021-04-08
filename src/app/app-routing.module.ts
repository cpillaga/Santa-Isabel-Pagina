import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { InformacionComponent } from './pages/informacion/informacion.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { DetalleLugarComponent } from './pages/detalle-lugar/detalle-lugar.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import { RutasComponent } from './pages/rutas/rutas.component';
import { DescargasComponent } from './pages/descargas/descargas.component';
import { ContactosComponent } from './pages/contactos/contactos.component';

const app_routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'info', component: InformacionComponent },
    { path: 'mapa', component: MapaComponent },
    { path: 'agenda', component: AgendaComponent },
    { path: 'rutas', component: RutasComponent },
    { path: 'detLugar/:idLugar', component: DetalleLugarComponent },
    { path: 'descargas', component: DescargasComponent },
    { path: 'contactos', component: ContactosComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio'},
    { path: '', pathMatch: 'full', redirectTo: 'inicio'}
]; 

@NgModule({
    imports: [
        RouterModule.forRoot( app_routes, { useHash: true } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}

