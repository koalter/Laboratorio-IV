import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'diasHasta'
})
export class DiasHastaPipe implements PipeTransform {

  transform(hoy: Date, dia: number, mes: number): number {
    const pipeDate = new Date(hoy.getFullYear(), mes, dia);

    const hoyTimestamp = Date.parse(hoy.toDateString());
    let pipeTimestamp = Date.parse(pipeDate.toDateString());

    let resultado = pipeTimestamp - hoyTimestamp;

    if (resultado < 0) {
      pipeDate.setFullYear(pipeDate.getFullYear() + 1);
      pipeTimestamp = Date.parse(pipeDate.toDateString());
      resultado = pipeTimestamp - hoyTimestamp;
    }

    return resultado / 86400000;
  }

}
