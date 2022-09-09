import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  valorParaElHijo: string = '';
  valorHijo: any;

  constructor() { }

  ngOnInit(): void {
  }

  manejarEventoHijo(valor: any) {
    this.valorHijo = valor;
  }
}
