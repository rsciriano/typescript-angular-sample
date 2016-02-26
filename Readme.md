#Añadiendo tipos a aplicación angularjs

##Preparando el entorno de desarrollo

Asegurarse de tener instalado git y node 
- `git --version` 
- `node --version` 

Descargar el código de ejemplo
    
    git clone https://github.com/rsciriano/typescript-angular-sample.git
    
    cd typescript-angular-sample 

Instalar paquetes de node globalmente

    npm install -g bower gulp http-server

Instalar paquetes de node locales

    npm install
    
Instalar paquetes de Bower

    bower install
    
Arrancar servidor web

    http-server
    
## Añadiendo TypeScript

Instalar paquetes de node globalmente

    npm install -g typescript tsc typings
    
Instalar Definición de tipos

    typyngs install
    
Cambiar extensiones de archivos `js` por `ts` 

    app/app.js --> app/app.ts
    app/directives/robTableSort.js --> app/directives/robTableSort.ts
    app/restaurants/restaurantsCtrl.js --> app/restaurants/restaurantsCtrl.ts
    app/restaurants/restaurantsService.js --> app/restaurants/restaurantsService.ts

Cambiar referencias en `index.html`

    <script src="app/app.js"></script>
    <script src="app/directives/robTableSort.js"></script>
    <script src="app/restaurants/restaurantsCtrl.js"></script>
    <script src="app/restaurants/restaurantsService.js"></script>

por:

    <script src="assets/app/app.js"></script>
    <script src="assets/app/directives/robTableSort.js"></script>
    <script src="assets/app/restaurants/restaurantsCtrl.js"></script>
    <script src="assets/app/restaurants/restaurantsService.js"></script>

Ejecutar primera compilación

    gulp ts

Iniciar tarea de compilación continua

    gulp wath:ts
