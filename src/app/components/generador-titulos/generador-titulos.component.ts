import { Component, OnInit } from '@angular/core';
import { GeneradorTitulosService } from 'src/app/services/generador-titulos.service';

@Component({
  selector: 'app-generador-titulos',
  templateUrl: './generador-titulos.component.html',
})
export class GeneradorTitulosComponent  {

  version = 'V_0.2';
  versionServicio = 'No recibida';
  titulos: String[]; // Array de títulos

  constructor(private _generadorTitulosService: GeneradorTitulosService) {
    this.versionServicio = this._generadorTitulosService.getVersion();
  }

  /* Generador de títulos.
     Recibe como parámetro el número de títulos a generar
  */
  generarTitulos(numero: number) {
    this.titulos = this._generadorTitulosService.generarTitulos(numero);
  }

}
