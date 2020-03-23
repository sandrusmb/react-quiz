## Prueba técnica Fintonic 
https://sandrusmb.github.io/react-quiz/

# Instrucciones

Crear una maqueta replicando la siguiente imagen. La única tecnología obligatoria a usar es React como librería de componentes.

![Diseño](https://github.com/sandrusmb/react-quiz/blob/master/src/images/prueba-dise%C3%B1o.png?raw=true)

Se debe replicar completamente, incluido el menú de navegación superior. El menú no debe tener ninguna lógica, sólo estar maquetado.

Extra 1: obtener los datos desde https://opentdb.com/api_config.php

Extra 2: crear formulario para el filtrado de cuestiones.

El entregable debe ser una url a un repositorio de github/gitlab/bitbucket

Se puede partir de cualquier base propia o pública disponible en internet para la creación del proyecto base.

Se valorará:

- simplicidad de la solución: se intenta que se dedique a la prueba unas 3 horas como máximo. Se pueden aportar TODOs en un README para indicar que cosas se añadirían y como.

- ceñirse a lo requerido en el enunciado

- prueba sea coherente con las respuestas aportadas al cuestionario inicial

# Paso a paso

- [x] Crear el proyecto de React
- [x] Limpiar el código y crear los archivos necesarios

- [x] Hacer la maquetación por componentes con la siguiente estructura:

  - [x] App.js
    - [x] Menu.js
    - [x] Menu.scss (seguir el diseño y añadir un hover con transición)
    - [x] Main.js
    - [x] Main.scss (tras valorar la mejor manera de maquetar con flexbox, grid o tablas, he optado por utilizar las tablas poniendo especial cuidado en la semántica)
      - [x] QuestionList.js (he incluido una serie de condicionales ternarios y expresiones regulares para que al pintar las preguntas del trivial se busquen y sustituyan &quot; por comillas y &#039; por apóstrofe y mejorar así la lectura para el usuario)
      - [x] QuestionList.scss
      - [x] Tool.js
      - [x] Tool.scss

- [x] Hacer el fetch y obtener los datos
- [x] Filtrar los datos en función del número de resultados, el tipo de pregunta y el nivel de dificultad

# Tecnologías utilizadas

- React
- HTML5
- CSS3
- Sass

Para las tipografías he usado [Google Fonts](https://fonts.google.com/) y para los iconos [Font Awesome](https://fontawesome.com/).

# Cómo utilizar este código

- Descarga el repositorio
- npm install
- npm start

# Demo de mi solución

![Demo](https://github.com/sandrusmb/react-quiz/blob/master/src/images/demo-fintonic.gif?raw=true)
