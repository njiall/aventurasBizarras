import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  listaAplicaciones: Aplicacion [] = [
    {
     nombre: 'Generador aleatorio de títulos',
     descripcion: '¿Quieres generar el título de una historia estilo pulp pero no se te ocurre. ¡Prueba nuestro generador aleatorio!',
     enlace: '/generadorTitulos',
     imagen: '../assets/images/libros.jpg'
   },
   {
     nombre: 'Generador de aventuras',
     descripcion: 'Generador de tramas. Genera de forma aleatoria el esqueleto de una aventura pulp ¡Añadirle la carne es cosa tuya!',
     enlace: '/generaAventuras',
     imagen: '../assets/images/aventuras.jpg'
   }
 ];

   constructor( private _router: Router) { }

  irA(ruta: string) {
    this._router.navigate([ruta]);
  }

  ngOnInit() {
  }

}

export interface Aplicacion {
  nombre: string;
  descripcion: string;
  enlace: string;
  imagen: string;
}
