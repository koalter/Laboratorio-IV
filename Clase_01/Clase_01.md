# Clase 1

## Crear un nuevo proyecto en Firebase

1. Nos dirigimos a https://firebase.google.com y nos logueamos
2. Creamos un nuevo proyecto, y le ponemos un nombre (ej. lcea-lab4-2022)
3. Aceptamos las condiciones y le damos a siguiente (para este ejemplo no es necesario Data Analytics)

Principalmente usaremos las aplicaciones de **Authentication**, **Hosting** y **Firestore Database**

A continuación, creamos nuestra primera base de datos:

4. Vamos a *Compilación*>*Firestore Database*
5. Creamos una nueva base de datos en modo Test en este caso
6. (opcional) Vamos a *Reglas* y eliminamos la condición de la fecha por un *true*

Ahora volvemos al dashboard del proyecto y creamos una aplicación web.

Volvemos a Firestore Database e Iniciamos una colección:

1. Le ponemos un ID a la colección
2. Generamos un id aleatorio para el primer documento

# Parte 2

## Instalación de herramientas

Instalamos Node.js desde la página, usando toda la configuración por defecto

Luego instalamos Angular CLI abriendo una consola de comandos y ejecutando `npm i -g @angular/cli`

Si todo esta correcto, al ejecutar `ng version` debería mostrarnos la version de Angular instalada.

## Primer proyecto Angular

Abrimos una consola de comandos, nos dirigimos a un nuevo directorio y ejecutamos los comandos de ejemplo en la página de Angular

    ng new sala-juegos
    cd sala-juegos
    ng serve --open

(Cuando nos pida si queremos usar Angular Routing, en este ejemplo ponemos que sí)

Entre los archivos que nos genera, podemos destacar:

- `index.html`
    + El punto de entrada a cualquier aplicación web, dentro podemos notar las etiquetas `<app-root></app-root>` que es donde se va a contener todo el contenido de la aplicación Angular.
- `main.ts`
    + Contiene cierta lógica de arranque a la aplicación
- `app.module.ts`
    + Aquí es donde vamos integrando los distintos módulos que vaya necesitando la aplicación
- `app.component.*`
    + Son los archivos de inicio por defecto que genera Angular
    + De aquí se toma la referencia de la etiqueta `app-root` mencionada anteriormente

## Generar un nuevo componente

`ng [g|generate] [c|component] ruta/del/componente`

Este es el comando basico para generar un componente nuevo. Angular generará un directorio conteniendo los archivos html/css/ts correspondientes, con el nombre del final de la ruta indicada (por ejemplo Vistas/juegos generará los archivos juegos.component.*);

## Generar una nueva clase

`ng [g|generate] class ruta/de/la/clase`

Con este comando podemos generar una nueva clase lista para ser utilizada en la aplicación.

### Ventajas de usar TypeScript

Entre las ventajas que nos presenta TS, tenemos la posibilidad de definir el tipo de dato de una variable o propiedad, como asi también su visibilidad (p.ej. `public nombre: string` indica que **nombre** es una *cadena de caracteres* *pública*). Por defecto la visibilidad es pública.

### Data-binding y double data-binding

En Angular tenemos la particularidad de poder interpolar data dentro de los archivos HTML.

Por un lado, lo podemos hacer inicializando una variable en el archivo *.ts* del componente y llamandolo en el *.html* como `{{ esteFormato }}`

Ejemplo:

**app.component.ts**

    [...]
    export class AppComponent {
        title: string = 'sala-juegos';
    }

**app.component.html**

    <h2>Titulo: {{ title }}</h2>

**Salida**

<h2>Titulo: sala-juegos</h2>

Aparte de hacerlo de esa manera, Angular nos posibilita manejar datos por medio de las propiedades de las etiquetas.

En este sentido, se utilizan corchetes `[]` para obtener datos (por ejemplo en campos como `[value]`), y paréntesis `()` para ingresar datos (para eventos como `(click)`).

Además está lo que se llama *double data-binding*, donde se combinan los corchetes y los paréntesis para manipular datos ambivalentemente. Esto usualmente se lo combina con la propiedad ng-model, y lo que nos permite es leer datos y al mismo tiempo cambiar ese dato.

### Uso de ngModel

Para utilizar esta propiedad, es necesario integrar el módulo **FormsModule** en `app.module.ts`.

**app.module.ts**

    [...]
    import { FormsModule } from '@angular/forms'; // Agregar el import
    [...]
    @NgModule({
    declarations: [
        AppComponent,
        JuegoComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule // Agregar la referencia
    ],
    [...]

**app.component.html**

    <input type="text" [(ngModel)]="title">
