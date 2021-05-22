import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent  {

  anio: number;

  constructor() {
  this.anio = new Date().getFullYear();
  }
}
