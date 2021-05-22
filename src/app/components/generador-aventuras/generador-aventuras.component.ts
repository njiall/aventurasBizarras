import { Component, OnInit } from '@angular/core';
import { GeneradorAventurasService, Aventura } from '../../services/generador-aventuras.service';
import { GeneradorTitulosService } from '../../services/generador-titulos.service';

@Component({
  selector: 'app-generador-aventuras',
  templateUrl: './generador-aventuras.component.html'
})
export class GeneradorAventurasComponent implements OnInit {

  aventura: Aventura;
  titulo: String;
  version = 'V_0.1';
  versionServicio = 'No recibida';

  constructor(private _generadorAventura: GeneradorAventurasService, private _generadorTitulo: GeneradorTitulosService) {
    this.versionServicio = this._generadorAventura.getVersion();
  }

  ngOnInit() {
    this.generarAventura();
  }

  generarAventura() {
    this.titulo = this._generadorTitulo.generarTitulos(1)[0];
    this.aventura = this._generadorAventura.generarAventura();
  }

}
