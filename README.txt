TRABAJO PRÁCTICO INTEGRADOR - ENTREGA 2 (JavaScript)
Diseño y Desarrollo Web - UADE
Profesor: Lic. Alejandro Lucas Potente

INTEGRANTES
    - Casanova Pérez, Valeria
    - Macías, Blas

Comisión: Viernes Noche

TEMÁTICA
    ONG / Causa social - "Cuidemos el Mar"
    Campaña de concientización sobre el cuidado de los océanos.
    Continuación del sitio de la Entrega 1.


ARCHIVOS
    - index.html
    - styles.css
    - js/main.js
    - img/ (imágenes del sitio)
    - README.txt
    - integrantes.txt


QUÉ HACE EL JAVASCRIPT (js/main.js)

1. ARRAYS DE DATOS
    - acciones: 6 objetos (id, titulo, descripcion, categoria,
      imagen, alt, detalle) con las acciones para cuidar el mar.
    - preguntasFrecuentes: objetos con pregunta y respuesta.
    - datosCuriosos: textos que se muestran en el recuadro
      "Dato curioso".

2. GENERACIÓN DINÁMICA EN EL DOM
    - Las cards de "¿Cómo podés ayudar?" se generan desde el array
      "acciones" con createElement y appendChild. No están escritas
      en el HTML.
    - La sección "Preguntas frecuentes" también se genera desde JS.

3. INTERACCIONES (eventos click / keydown)
    - Filtro por categoría: botones Todas / En casa / En la playa /
      En comunidad.
    - Modal de detalle: al hacer click en una card se abre una
      ventana con la imagen y más información. Se cierra con la X,
      haciendo click afuera o con la tecla Escape.
    - Mis compromisos: cada card tiene una estrella para marcar las
      acciones con las que el usuario se compromete, con contador.
    - Modo noche: botón en el menú para cambiar entre tema claro
      y oscuro.
    - Acordeón de preguntas frecuentes: cada pregunta se abre y
      se cierra al hacer click.

4. LOCALSTORAGE
    - "compromisos": guarda los ids de las acciones marcadas con
      estrella. Al recargar, siguen marcadas.
    - "tema": guarda si el usuario eligió modo día o noche. Al
      recargar, se mantiene.

BONUS
    - Timers: el "Dato curioso" cambia cada 6 segundos (setInterval)
      con un efecto de fundido (setTimeout + transición CSS).
    - Mejoras CSS: hover y transiciones en cards, botones, modal,
      acordeón y cambio de tema.
    - Más de 2 interacciones integradas.


CÓMO PROBARLO PASO A PASO
    1. Abrir index.html en el navegador (recomendado: con la
       extensión Live Server de VS Code).
    2. En "¿Cómo podés ayudar?" aparecen 6 cards generadas desde JS.
    3. Tocar los botones de filtro (por ejemplo "En la playa"):
       se muestran solo las cards de esa categoría.
    4. Hacer click en una card: se abre el modal con el detalle.
       Cerrarlo con la X, haciendo click afuera o con Escape.
    5. Tocar la estrella de 2 o 3 cards: se marcan en amarillo y el
       contador se actualiza. Recargar la página (F5): las estrellas
       siguen marcadas.
    6. Tocar el botón de luna en el menú: se activa el modo noche.
       Recargar la página: sigue en modo noche.
    7. En "Preguntas frecuentes", hacer click en una pregunta para
       ver la respuesta.
    8. En la sección "Nosotros", esperar unos segundos: el dato
       curioso cambia solo.
    9. Abrir la consola del navegador (F12): no hay errores.


NAVEGADORES PROBADOS
    - Google Chrome
    - Safari


HORAS APROXIMADAS DEDICADAS (Entrega 2)
    Aproximadamente 7 horas.