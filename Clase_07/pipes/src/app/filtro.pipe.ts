import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(value: any[], filtro: string): any[] | null {
    console.log('FiltroPipe anda!');
    if (!filtro) {
      return value;
    }
    return value.filter(t => (<string>t.motivo).indexOf(filtro) > -1);
  }

}
