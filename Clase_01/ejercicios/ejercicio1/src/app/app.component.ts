import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  edadUno: string = "";
  edadDos: string = "";
  promedioEdades: string = "";
  sumaEdades: string = "";

  limpiar(): void {
    this.edadUno = "";
    this.edadDos = "";
    this.sumaEdades = "";
    this.promedioEdades = "";
  }

  calcular(): void {
    const intEdadUno: number = parseInt(this.edadUno);
    const intEdadDos: number = parseInt(this.edadDos);

    if (intEdadUno >= 0 && intEdadDos >= 0) {
      const suma = intEdadUno + intEdadDos;

      this.sumaEdades = suma.toString();
      this.promedioEdades = (suma / 2).toString();
    }
  }

  validarEntrada(ev: KeyboardEvent): void {
    if (isNaN(parseInt(ev.key)) && ev.key !== "Backspace"
        && ev.key !== "Tab" && !ev.key.startsWith("Arrow")) { 
      ev.preventDefault();
    }
  }
}
