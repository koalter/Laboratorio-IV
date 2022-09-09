import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() valorRecibido: any;
  @Output() eventoHijo = new EventEmitter<string>();
  valorParaElPadre: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  emitirValor(valor: string): void {
    this.eventoHijo.emit(valor);
  }
}
