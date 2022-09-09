# Clase 3

## @Input y @Output

https://docs.angular.lat/guide/inputs-outputs 

Se consideran *decoradores*

### @Input

Es una forma de ingresar datos de un componente padre a un hijo.

En principio se siguen tres pasos:

1. Se declara una variable en el componente hijo antecedido por el decorador **@Input**:

        import { Component, Input } from '@angular/core'; // Primero, importamos Input

        export class ItemDetailComponent {
            @Input() item: string; // "decoramos" la propiedad con @Input
        }

2. Lo llamamos en la plantilla html

        <p>
            {{ item }}
        </p>

3. Creamos la relación agregandolo en la llamada del componente hijo, en el padre

        <app-item-detail [item]="currentItem"></app-item-detail>

4. En el componente padre, instanciamos la referencia que le pasamos al hijo

        export class AppComponent {
            currentItem = 'Television';
        }

### @Output

Es la forma que tiene Angular de enviar datos a través de la aplicación.

Esto lo hace a través de eventos.

En este caso, la forma de implementarlo es la siguiente:

1. En el componente hijo, declaramos una propiedad con el decorador **@Output** y lo inicializamos como una variable de tipo `EventEmitter<T>`

        import { Output, EventEmitter } from '@angular/core'; // Importamos las librerías necesarias

        export class ChildComponent {
            @Output() newItemEvent = new EventEmitter<string>(); // Instanciamos un objeto EventEmitter
        }

2. Utilizamos la propiedad mencionada en un método del componente, donde llamamos al método `emit($value)`

        import { Output, EventEmitter } from '@angular/core';

        export class ChildComponent {
            @Output() cambio = new EventEmitter<string>();

            // Creamos un método que "emita" el evento
            agregarNuevoItem(valor: string) {
                this.cambio.emit(valor);
            }
        }

3. Capturamos el evento en el componente padre, generando la referencia en la llamada del componente hijo

        <app-child (cambio)="capturarCambioHijo($event)"></app-child>

4. Manejamos el evento en el componente padre

        export class ParentComponent {
            valorHijo: string;
            [...]

            capturarCambioHijo(valorRecibido) {
                this.valorHijo = valorRecibido;
            }
        }

## Proyección de Contenido (Ng Content)

Es otra manera que existe para pasar contenido de un componente a otro.

Va al nivel de poner transferir contenido HTML a partir de la plantilla.

Ejemplo:

app-padre.component.html

    <app-hijo>
        <p>Este es el contenido que paso desde el padre</p>
    </app-hijo>

app-hijo.component.html

    <div>
        <p>Del Padre: </p>
        <ng-content></ng-content>
    </div>

Haciendo esto, el párrafo que ingresamos dentro de la etiqueta `<app-hijo>` será renderizado en lugar del `<ng-content>` en el componente hijo.
