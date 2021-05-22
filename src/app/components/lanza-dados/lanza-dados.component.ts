import { Component, OnInit } from '@angular/core';
import { mapToExpression } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-lanza-dados',
  templateUrl: './lanza-dados.component.html'
})
export class LanzaDadosComponent implements OnInit {

  version = 'V_0.1';
  versionServicio = 'V_0.1';

  resultado: number;
  resultadoExito: string;
  resultadosTexto: string;

  constructor() { }

  ngOnInit() {
  }

  lanzarDados(tipoTirada: number, dificultad: number, habilidad: string) {
    console.log(tipoTirada);

    // tslint:disable-next-line:triple-equals
    if (tipoTirada == 2) {
      const DADO1 = this.d10();
      const DADO2 = this.d10();
      const DADO3 = this.d10();

      const menor = Math.min(DADO1, DADO2, DADO3);

      this.resultado = DADO1 + DADO2 + DADO3 - menor + parseInt(habilidad, 10);
      this.resultadosTexto = `Al ser una tirada en ventaja se lanzarán tres dados descartando el menor resultado. Los resultados han sido ${DADO1}, ${DADO2} y ${DADO3}.
                              De estos se descarta el ${menor} por ser el menor resultado y se suma el nivel ${habilidad} de habilidad`;
    }

    // tslint:disable-next-line:triple-equals
    if (tipoTirada == 0) {
      const DADO1 = this.d10();
      const DADO2 = this.d10();
      const DADO3 = this.d10();

      const mayor = Math.max(DADO1, DADO2, DADO3);

      this.resultado = DADO1 + DADO2 + DADO3 - mayor + parseInt(habilidad, 10);
      this.resultadosTexto = `Al ser una tirada en ventaja se lanzarán tres dados descartando el menor resultado. Los resultados han sido ${DADO1}, ${DADO2} y ${DADO3}.
                              De estos se descarta el ${mayor} por ser el mayor resultado y se suma el nivel ${habilidad} de habilidad`;
    }

    // tslint:disable-next-line:triple-equals
    if (tipoTirada == 1) {
      const DADO1 = this.d10();
      const DADO2 = this.d10();
      this.resultado = DADO1 + DADO2 + parseInt(habilidad, 10);
      this.resultadosTexto = `Al ser una tirada normal se lanzarán dos dados. Los resultados han sido ${DADO1} y ${DADO2} a los que se suma el nivel ${habilidad} de habilidad.`;
    }

    // Fracaso
    if (this.resultado < dificultad) {
      this.resultadoExito = 'La acción ha fracasado o al menos no ha salido como pretendías';
    }

    // Éxito marginal
    // tslint:disable-next-line:triple-equals
    if (this.resultado == dificultad) {
      this.resultadoExito = `No se puede decir que haya sido tu mejor acción pero al menos no has quedado en ridículo`;
    }

    // Éxito completo
    if (this.resultado > dificultad) {
      const aumentos = Math.floor((this.resultado - dificultad) / 2);
      this.resultadoExito = `No ha estado nada mal, tienes estilo. Has conseguido ${aumentos} aumentos en tu tirada`;
    }

  }

  d10() {
    return Math.floor(Math.random() * 10) + 1;
  }
}
