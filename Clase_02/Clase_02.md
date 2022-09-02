# Clase 2

## Deploy a Firebase

### 1. Instalar Firebase CLI

Correr en la consola:

> `npm install -g firebase-tools`

### 2. Iniciar sesión

> `firebase login`  

Esto nos enviara un link al cual vamos a ir para iniciar sesión en nuestra cuenta de Firebase (desde la consola, hacemos `ctrl+click`).

### 3. Anadir al proyecto de Angular

> `ng add @angular/fire`

La consola desplegará un menú para que indiquemos que herramientas vamos a configurar, y de ahí seleccionaremos (usando las flechas y la barra espaciadora):

* ng deploy -- hosting
* Authentication
* Firestore

Seleccionamos nuestra cuenta de Firebase, el proyecto que creamos, el sitio de hosting en caso de que aún no lo hayamos generado y la app.

### 4. Despliegue directo

Una vez seguidos estos pasos, procedemos a ejecutar en el directorio de nuestra aplicación

> `ng deploy`

Si todo está bien hecho, la consola nos mostrará un link a nuestra aplicación y podremos verla online (en caso de que vayamos al link y no se abra correctamente la página, podremos optar por ir a Firebase Hosting e ingresar con la url *.firebaseapp.com)