# ASCII Map Loader

<h2>
    Documentación:
    <br/>
    <a target="_blank" href="https://jeff-aporta.github.io/ascii-maploader/">
        https://jeff-aporta.github.io/ascii-maploader/
        <br/>
        <br/>
        <p align="center">
            <img src="static/img/logo.jpeg" width="250" height="250" />
        </p>
    </a>
</h2>

**ASCII Map Loader** es un lenguaje interpretado diseñado para cargar dependencias de archivos `.jsx`, `.js`, y `.css` en proyectos web. Su principal característica es la capacidad de inyectar estos elementos en tiempo real al cargar un documento HTML, usando la función `document.write()`. Esto lo hace ideal para desarrollos que involucren múltiples módulos y para verificar la compatibilidad de archivos `.mjs` en páginas estáticas o aplicaciones que necesiten ser cargadas directamente en el cliente.

## Instalación

### Usando CDN

Para integrar **ASCII Map Loader** en tu proyecto, simplemente añade la siguiente URL en tu archivo HTML:

```html
<script
  type="text/javascript"
  src="https://jeff-aporta.github.io/ascii-maploader/static/js/index.all.min.js"
></script>
```

Esto permitirá que tu aplicación utilice las funcionalidades de **ASCII Map Loader** para estructurar y gestionar las dependencias de manera programada y visual.

### Usando npm

Si prefieres usar npm, ejecuta el siguiente comando en tu terminal:

```bash
npm install ascii-maploader
```

Luego, en tu código JavaScript, importa el módulo con:

```javascript
import asciiMap from "ascii-maploader";
```

## Funciones del Módulo

### Estructuración de Cascada

- **tree**: Inicia la generación de un árbol para organizar las dependencias en cascada.

### Funciones de Carga

- **writehtml**: Inserta las dependencias generadas directamente en el documento HTML.

### CLI

Incluye un gestor que facilita la vinculación a bibliotecas populares como React y Babel.

```javascript
/*
  Dependencias 
    - react 18.3.1
    - babel 7.25.5
    - MaterialUI 5.16.7 
    - FontAwesome 6.4.2
*/
asciiMap.CLI.react_mui_fa(); 

//Dependencia fluid CSS
//https://github.com/Jeff-Aporta/fluid-css

asciiMap.CLI.fluidCSS();
```

### Funciones de Conversión

- **html**: Retorna un arreglo de etiquetas `<link>` y `<script>` que representan las dependencias.
- **json**: Devuelve un JSON que representa la estructura de dependencias.

## Ejemplo de Uso

```javascript
asciiMap
  .tree("public")
  .subDir("ex-branch", (branch) => {
    branch.css("style").js("script").jsx("App");
  })
  .writehtml();
```

El código anterior generará e insertará en tu HTML las etiquetas de importación necesarias, manteniendo un código limpio y organizado para tus dependencias.
