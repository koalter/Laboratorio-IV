import { Component, OnInit } from '@angular/core';
import { FERIADOS } from '../../assets/feriados';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  feriados: any;
  textoFiltro: any;
  hoy: Date;

  constructor() {
    this.feriados = FERIADOS;
    this.hoy = new Date();
  }

  ngOnInit(): void {
  }

}
