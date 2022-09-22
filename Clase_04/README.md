# Clase 4

## Directivas

https://angular.io/guide/attribute-directives

Permite modificar un componente o su comportamiento

Comando básico:

`ng generate directive nombre-de-la-directiva`

Se le aplica en el constructor toda la lógica necesaria para nuestra directiva, ejemplo:

`src/app/hightlight.directive.ts`

    import { Directive, ElementRef } from '@angular/core';

    @Directive({
        selector: '[appHighlight]'
    })

    export class HighlightDirective {
        contructor(private el: ElementRef) {
            this.el.nativeElement.style.backgroundColor = 'yellow';
        }
    }

### Eventos de usuarios

@HostListener()

    import { Directive, ElementRef, HostListener } from '@angular/core';
    [...]
    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('');
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }    