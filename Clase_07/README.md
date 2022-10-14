# Clase 06

## [Pipes](https://angular.io/guide/pipes)

Es un objeto con un método.

Funcionan como transformadores de datos sin modificar el dato original.

Comando básico:  
`ng g pipe <nombre>`

Estructura inicial:

    import { Pipe, PipeTransform } from '@angular/core';

    @Pipe({
    name: 'filtro'
    })
    export class FiltroPipe implements PipeTransform {

        transform(value: unknown, ...args: unknown[]): unknown {
            return null;
        }

    }

Formato html básico:  
`{{ valorInicial | nombreDelFiltro [: parametro1 [: parametro2 [: ...]]] }}`
