/* Archivo de rutas */

import {RouterModule, Routes} from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { AplicacionesComponent } from './components/aplicaciones/aplicaciones.component';
import { GeneradorTitulosComponent } from './components/generador-titulos/generador-titulos.component';
import { LanzaDadosComponent } from './components/lanza-dados/lanza-dados.component';
import { GeneradorAventurasComponent } from './components/generador-aventuras/generador-aventuras.component';
import { ContactoComponent } from './components/contacto/contacto.component';


const APP_ROUTES: Routes = [
    { path: 'inicio', component: InicioComponent},
    { path: 'aplicaciones', component: AplicacionesComponent},
    { path: 'generadorTitulos', component: GeneradorTitulosComponent},
    { path: 'lanzaDados', component: LanzaDadosComponent},
    { path: 'generaAventuras', component: GeneradorAventurasComponent},
    { path: 'contacto', component: ContactoComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
