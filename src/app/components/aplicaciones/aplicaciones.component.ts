import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aplicaciones',
  templateUrl: './aplicaciones.component.html',
  styleUrls: ['./aplicaciones.component.css']
})
export class AplicacionesComponent implements OnInit {

  listaAplicaciones: Aplicacion [] = [
     {
      nombre: 'Generador aleatorio de titulares',
      descripcion: '¿Quieres generar el título de una historia estilo pulp pero no se te ocurre. ¡Prueba nuestro generador aleatorio!',
      img: '../../../assets//images/libros.jpg',
      img_alt: 'Generador aleatorio de titulares',
      enlace: '/generadorTitulos',
      botonTexto: 'Ir al generador'
    },
    {
      nombre: 'Lanzador de dados',
      descripcion: 'Generador de tiradas de dados para Aventuras Bizarras JdR',
      img: '../../../assets//images//numeros.jpg',
      img_alt: 'Lanzador de dados',
      enlace: '/lanzaDados',
      botonTexto: 'Ir al lanzador'
    },
    {
      nombre: 'Generador de aventuras',
      descripcion: 'Generador de tramas',
      img: '../../../assets//images//aventuras.jpg',
      img_alt: 'Generador de tramas',
      enlace: '/generaAventuras',
      botonTexto: 'Ir al generador'
    }
  ];
  constructor( private _router: Router) { }

  ngOnInit() {
  }

  irA(ruta: string) {
    this._router.navigate([ruta]);
  }

}

export interface Aplicacion {
  nombre: string;
  descripcion: string;
  img: string;
  img_alt: string;
  enlace: string;
  botonTexto: string;
}
