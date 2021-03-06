import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes';

// Servicios
import { GeneradorTitulosService} from './services/generador-titulos.service';
// Componentes
import { AppComponent } from './app.component';
import { CabeceraComponent } from './components/cabecera/cabecera.component';
import { PieComponent } from './components/pie/pie.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { AplicacionesComponent } from './components/aplicaciones/aplicaciones.component';
import { GeneradorTitulosComponent } from './components/generador-titulos/generador-titulos.component';
import { LanzaDadosComponent } from './components/lanza-dados/lanza-dados.component';
import { GeneradorAventurasComponent } from './components/generador-aventuras/generador-aventuras.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    PieComponent,
    InicioComponent,
    AplicacionesComponent,
    GeneradorTitulosComponent,
    LanzaDadosComponent,
    GeneradorAventurasComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    GeneradorTitulosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
