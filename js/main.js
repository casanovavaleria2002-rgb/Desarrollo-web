// Cuidemos el Mar - Entrega 2 (JavaScript)

//  ARRAYS DE DATOS 

const acciones = [
  {
    id: 1,
    titulo: "Reducí el plástico",
    descripcion: "Usá botellas y bolsas reutilizables para evitar que el plástico termine en el mar.",
    categoria: "En casa",
    imagen: "img/plastico.jpg",
    alt: "Bloques de botellas y envases de plástico compactados",
    detalle: "Una botella de plástico puede tardar hasta 450 años en degradarse. Cambiar a una botella reutilizable evita cientos de botellas por año."
  },
  {
    id: 2,
    titulo: "No dejes basura",
    descripcion: "Si vas a la playa, llevate tu basura y ayudá a mantenerla limpia.",
    categoria: "En la playa",
    imagen: "img/playa-limpia.jpg",
    alt: "Dos personas juntando basura en una bolsa en la playa",
    detalle: "Llevá siempre una bolsa para tus residuos. Las colillas de cigarrillo son uno de los residuos más encontrados en las playas."
  },
  {
    id: 3,
    titulo: "Difundí la causa",
    descripcion: "Contales a tus amigos y familia sobre la importancia de cuidar los océanos.",
    categoria: "En comunidad",
    imagen: "img/difundir.jpg",
    alt: "Grupo de amigos sentados sobre una roca mirando el atardecer en el mar",
    detalle: "Compartir información en redes o en tu escuela ayuda a que más personas cambien sus hábitos."
  },
  {
    id: 4,
    titulo: "Cuidá la fauna marina",
    descripcion: "No toques ni alimentes a los animales marinos y respetá sus espacios.",
    categoria: "En la playa",
    imagen: "img/fauna.jpg",
    alt: "Dos delfines asomando la cabeza fuera del agua",
    detalle: "Si ves delfines desde la costa o una embarcación, mantené distancia y no les tires comida. Muchos quedan atrapados en redes y residuos plásticos."
  },
  {
    id: 5,
    titulo: "Separá tus residuos",
    descripcion: "Reciclá en casa para que menos basura llegue a ríos y mares.",
    categoria: "En casa",
    imagen: "img/reciclar.jpg",
    alt: "Tachos de colores para separar residuos frente a una pared de plantas",
    detalle: "Separar plásticos, vidrios y papeles facilita el reciclaje y reduce la basura que termina en el ambiente."
  },
  {
    id: 6,
    titulo: "Sumate a una limpieza",
    descripcion: "Participá de jornadas de limpieza de playas organizadas en tu zona.",
    categoria: "En comunidad",
    imagen: "img/limpieza.jpg",
    alt: "Grupo de voluntarios reunidos en la playa",
    detalle: "Las jornadas de limpieza reúnen voluntarios que en pocas horas retiran cientos de kilos de residuos de la costa."
  }
];

// Preguntas frecuentes

const preguntasFrecuentes = [
  {
    pregunta: "¿Por qué es tan grave el plástico en el mar?",
    respuesta: "Porque tarda cientos de años en degradarse y los animales lo confunden con comida."
  },
  {
    pregunta: "¿Cómo puedo sumarme a la campaña?",
    respuesta: "Escribinos desde la sección Contacto y te avisamos de las próximas actividades."
  },
    {
    pregunta: "¿Qué hago si encuentro un animal marino herido?",
    respuesta: "No lo toques ni lo devuelvas al agua. Llamá a la Prefectura o a una organización de rescate de fauna de tu zona."
  },
    {
    pregunta: "¿Sirve hacer pequeñas acciones?",
    respuesta: "¡Sí! Si muchas personas cambian pequeños hábitos, el impacto es enorme."
  }

];

// Datos curiosos

const datosCuriosos = [
  "Se estima que cada año ingresan al mar más de 8 millones de toneladas de plástico.",
  "Los océanos producen más del 50% del oxígeno que respiramos.",
  "Una bolsa de plástico se usa en promedio 12 minutos, pero tarda siglos en degradarse.",
  "Más de 700 especies marinas se ven afectadas por la basura en el mar."
];


// ----- DOM -----
const grillaCards = document.getElementById("grilla-cards");
const contenedorFiltros = document.getElementById("filtros");

const modal = document.getElementById("modal");
const modalImagen = document.getElementById("modal-imagen");
const modalTitulo = document.getElementById("modal-titulo");
const modalCategoria = document.getElementById("modal-categoria");
const modalDetalle = document.getElementById("modal-detalle");
const modalCerrar = document.getElementById("modal-cerrar");
const contadorCompromisos = document.getElementById("contador-compromisos");
const botonTema = document.getElementById("btn-tema");
const listaFaq = document.getElementById("lista-faq");
const textoDatoCurioso = document.getElementById("dato-curioso");

// Lista de ids de las acciones marcadas)
let compromisos = cargarCompromisos();

// ----- FUNCIONES -----
// Crea una card a partir de UNA acción del array
function crearCard(accion) {
  // Creamos la etiqueta <article class="card">
  const card = document.createElement("article");
  card.classList.add("card");

  // Imagen
  const imagen = document.createElement("img");
  imagen.src = accion.imagen;
  imagen.alt = accion.alt;

  // Título
  const titulo = document.createElement("h3");
  titulo.textContent = accion.titulo;

  // Descripción
  const descripcion = document.createElement("p");
  descripcion.textContent = accion.descripcion;

  // Metemos todo adentro de la card
  card.appendChild(imagen);
  card.appendChild(titulo);
  card.appendChild(descripcion);

  // Botón estrella para marcar la acción como compromiso
  const botonEstrella = document.createElement("button");
  botonEstrella.classList.add("boton-estrella");
  botonEstrella.setAttribute("aria-label", "Marcar como compromiso");
  actualizarEstrella(botonEstrella, accion.id);

  botonEstrella.addEventListener("click", function (evento) {
    evento.stopPropagation(); // evita que se abra el modal al tocar la estrella
    alternarCompromiso(accion.id);
    actualizarEstrella(botonEstrella, accion.id);
  });

  card.appendChild(botonEstrella);

  // Evento: al hacer click en la card, abrimos el modal con su detalle
  card.addEventListener("click", function () {
    abrirModal(accion);
  });

  return card;
}

// Dibuja en pantalla todas las acciones que recibe
function mostrarAcciones(lista) {
  // Vaciamos la grilla antes de volver a dibujar
  grillaCards.innerHTML = "";

  // Recorremos la lista y agregamos una card por cada acción
  lista.forEach(function (accion) {
    const card = crearCard(accion);
    grillaCards.appendChild(card);
  });
}

// Filtra las acciones según la categoría elegida
function filtrarPorCategoria(categoria) {
  if (categoria === "Todas") {
    mostrarAcciones(acciones);
  } else {
    const filtradas = acciones.filter(function (accion) {
      return accion.categoria === categoria;
    });
    mostrarAcciones(filtradas);
  }

  // Marcamos como activo el botón que se tocó
  const botones = contenedorFiltros.querySelectorAll("button");
  botones.forEach(function (boton) {
    if (boton.textContent === categoria) {
      boton.classList.add("activo");
    } else {
      boton.classList.remove("activo");
    }
  });
}

// Crea un botón por cada categoría
function crearBotonesFiltro() {
  const categorias = ["Todas", "En casa", "En la playa", "En comunidad"];

  categorias.forEach(function (categoria) {
    const boton = document.createElement("button");
    boton.textContent = categoria;
    boton.classList.add("boton-filtro");

    // Evento: al hacer click, filtramos por esa categoría
    boton.addEventListener("click", function () {
      filtrarPorCategoria(categoria);
    });

    contenedorFiltros.appendChild(boton);
  });
}

// Abre el modal y lo completa con los datos de la acción
function abrirModal(accion) {
  modalImagen.src = accion.imagen;
  modalImagen.alt = accion.alt;
  modalTitulo.textContent = accion.titulo;
  modalCategoria.textContent = accion.categoria;
  modalDetalle.textContent = accion.detalle;

  modal.classList.add("abierto");
}

// Cierra el modal
function cerrarModal() {
  modal.classList.remove("abierto");
}

// Cerrar con el botón ✕
modalCerrar.addEventListener("click", cerrarModal);

// Cerrar haciendo click en el fondo oscuro (fuera de la caja)
modal.addEventListener("click", function (evento) {
  if (evento.target === modal) {
    cerrarModal();
  }
});

// Cerrar con la tecla Escape
document.addEventListener("keydown", function (evento) {
  if (evento.key === "Escape") {
    cerrarModal();
  }
});

//LOCALSTORAGE: MIS COMPROMISOS 
// Lee los compromisos guardados (si no hay, devuelve una lista vacía)
function cargarCompromisos() {
  const guardados = localStorage.getItem("compromisos");
  if (guardados) {
    return JSON.parse(guardados);
  }
  return [];
}

// Guarda la lista de compromisos en el navegador
function guardarCompromisos() {
  localStorage.setItem("compromisos", JSON.stringify(compromisos));
}

// Agrega o quita una acción de la lista
function alternarCompromiso(id) {
  if (compromisos.includes(id)) {
    compromisos = compromisos.filter(function (item) {
      return item !== id;
    });
  } else {
    compromisos.push(id);
  }
  guardarCompromisos();
  actualizarContador();
}

// Pinta la estrella llena o vacía según si está marcada
function actualizarEstrella(boton, id) {
  if (compromisos.includes(id)) {
    boton.textContent = "★";
    boton.classList.add("marcada");
  } else {
    boton.textContent = "☆";
    boton.classList.remove("marcada");
  }
}

// Muestra cuántos compromisos tiene el usuario
function actualizarContador() {
  const cantidad = compromisos.length;
  if (cantidad === 0) {
    contadorCompromisos.textContent = "Tocá la ☆ de las acciones que te comprometés a hacer.";
  } else if (cantidad === 1) {
    contadorCompromisos.textContent = "⭐ Te comprometiste con 1 acción. ¡Gracias!";
  } else {
    contadorCompromisos.textContent = "⭐ Te comprometiste con " + cantidad + " acciones. ¡Gracias!";
  }
}

// MODO NOCH
function aplicarTema(tema) {
  if (tema === "noche") {
    document.body.classList.add("modo-noche");
    botonTema.textContent = "☀️";
    botonTema.setAttribute("aria-label", "Activar modo día");
  } else {
    document.body.classList.remove("modo-noche");
    botonTema.textContent = "🌙";
    botonTema.setAttribute("aria-label", "Activar modo noche");
  }
}

// Cambia de tema y lo guarda en localStorage
function alternarTema() {
  if (document.body.classList.contains("modo-noche")) {
    aplicarTema("dia");
    localStorage.setItem("tema", "dia");
  } else {
    aplicarTema("noche");
    localStorage.setItem("tema", "noche");
  }
}

// Evento: click en el botón de tema
botonTema.addEventListener("click", alternarTema);

// ----- PREGUNTAS FRECUENTES  -----
// Genera una pregunta desplegable por cada objeto del array
function crearFaq() {
  preguntasFrecuentes.forEach(function (item) {
    const contenedor = document.createElement("div");
    contenedor.classList.add("faq-item");

    // Botón con la pregunta
    const boton = document.createElement("button");
    boton.classList.add("faq-pregunta");
    boton.setAttribute("aria-expanded", "false");
    boton.innerHTML = item.pregunta + ' <span class="faq-icono">+</span>';

    // Caja con la respuesta (empieza cerrada)
    const respuesta = document.createElement("div");
    respuesta.classList.add("faq-respuesta");
    const texto = document.createElement("p");
    texto.textContent = item.respuesta;
    respuesta.appendChild(texto);

    // Evento: abrir o cerrar la respuesta
    boton.addEventListener("click", function () {
      alternarFaq(contenedor, boton);
    });

    contenedor.appendChild(boton);
    contenedor.appendChild(respuesta);
    listaFaq.appendChild(contenedor);
  });
}

// Abre o cierra una pregunta
function alternarFaq(contenedor, boton) {
  const icono = boton.querySelector(".faq-icono");

  if (contenedor.classList.contains("abierta")) {
    contenedor.classList.remove("abierta");
    boton.setAttribute("aria-expanded", "false");
    icono.textContent = "+";
  } else {
    // Cerramos las demás preguntas antes de abrir esta
    const abiertas = listaFaq.querySelectorAll(".faq-item.abierta");
    abiertas.forEach(function (item) {
      item.classList.remove("abierta");
      item.querySelector(".faq-pregunta").setAttribute("aria-expanded", "false");
      item.querySelector(".faq-icono").textContent = "+";
    });
    contenedor.classList.add("abierta");
    boton.setAttribute("aria-expanded", "true");
    icono.textContent = "−";
  }
}


// DATO CURIOSO
let indiceDato = 0;

// Muestra el siguiente dato con un efecto de fundido
function mostrarSiguienteDato() {
  // 1) Desvanecemos el texto
  textoDatoCurioso.classList.add("oculto");

  // 2) Medio segundo después cambiamos el texto y lo volvemos a mostrar
  setTimeout(function () {
    indiceDato++;
    if (indiceDato >= datosCuriosos.length) {
      indiceDato = 0; // volvemos al primero
    }
    textoDatoCurioso.textContent = datosCuriosos[indiceDato];
    textoDatoCurioso.classList.remove("oculto");
  }, 500);
}

//  INICIO 

crearBotonesFiltro();
filtrarPorCategoria("Todas");
actualizarContador();
// Recupera el tema 
const temaGuardado = localStorage.getItem("tema");
if (temaGuardado) {
  aplicarTema(temaGuardado);
}
crearFaq();
// Mostramos el primer dato y cambiamos cada 6 segundos
textoDatoCurioso.textContent = datosCuriosos[0];
setInterval(mostrarSiguienteDato, 6000);