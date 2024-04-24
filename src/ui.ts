import {
    partida,
    puntuacionHtml,
    carta,
    mostrarMensajeHTML,
    dameCartaBoton,
    plantarseBoton,
    supuestoBoton,
  } from "./modelo";

import {
    dameNumeroRandom,
    dameNumeroCarta,
    dameURLCarta,
    damePuntuacion,
    mensajeGameOver,
    desactivarBotonesVictoria,
    desactivarBotones,
    mensajePlantarse,
    reiniciarPuntos,
    desactivarBotonSupuesto,
    mensajeSupuesto,
  } from "./motor";

   function cambioCarta(URLCarta: string) {
    if (
      carta !== null &&
      carta !== undefined &&
      carta instanceof HTMLImageElement
    ) {
      carta.src = URLCarta;
    }
  }

    function muestraPuntuacion() {
    if (
      puntuacionHtml !== null &&
      puntuacionHtml !== undefined &&
      puntuacionHtml instanceof HTMLHeadingElement
    )
      puntuacionHtml.innerText = `Tienes ${partida.puntuacion} puntos`;
  }
  
   function mostrarMensaje(mensaje: string, puntuacion: number) {
    if (
      mostrarMensajeHTML !== null &&
      mostrarMensajeHTML !== undefined &&
      puntuacion > 7.5
    ) {
      mostrarMensajeHTML.innerText = mensaje;
    }
  }

   function victoria(puntuacion: number) {
    if (
      mostrarMensajeHTML !== null &&
      mostrarMensajeHTML !== undefined &&
      puntuacion === 7.5
    ) {
      mostrarMensajeHTML.innerText = "¡ Lo has clavado! ¡Enhorabuena!";
    }
  }

   function mostrarMensajeAlPlantarse(mensajeAlPlantarse: string) {
    if (
      mostrarMensajeHTML !== null &&
      mostrarMensajeHTML !== undefined &&
      mostrarMensajeHTML instanceof HTMLHeadingElement
    ) {
      mostrarMensajeHTML.innerText = mensajeAlPlantarse;
    }
  }

   function reiniciarMensaje() {
    if (
      mostrarMensajeHTML !== null &&
      mostrarMensajeHTML !== undefined &&
      mostrarMensajeHTML instanceof HTMLHeadingElement
    ) {
      mostrarMensajeHTML.innerText = "";
    }
  }
  
   function reiniciarCarta() {
    if (
      carta !== null &&
      carta !== undefined &&
      carta instanceof HTMLImageElement
    ) {
      carta.src =
        "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    }
  }

  function activarBotonSupuesto() {
    if (
      supuestoBoton !== null &&
      supuestoBoton !== undefined &&
      supuestoBoton instanceof HTMLButtonElement
    ) {
      supuestoBoton.disabled = false;
    }
  }

  function reiniciarBotones() {
    if (
      plantarseBoton !== null &&
      plantarseBoton !== undefined &&
      plantarseBoton instanceof HTMLButtonElement &&
      dameCartaBoton !== null &&
      dameCartaBoton !== undefined &&
      dameCartaBoton instanceof HTMLButtonElement &&
      supuestoBoton !== null &&
      supuestoBoton !== undefined &&
      supuestoBoton instanceof HTMLButtonElement
    ) {
      dameCartaBoton.disabled = false;
      plantarseBoton.disabled = false;
      supuestoBoton.disabled = true;
    }
  }

   function mostrarMensajeSupuesto(mensajeSupuestoConst: string) {
    if (
      mostrarMensajeHTML !== null &&
      mostrarMensajeHTML !== undefined &&
      mostrarMensajeHTML instanceof HTMLHeadingElement
    ) {
      mostrarMensajeHTML.innerText = mensajeSupuestoConst;
    }
  }

   function dameCarta() {
    const numeroRandom = dameNumeroRandom();
    const numeroCarta = dameNumeroCarta(numeroRandom);
    const URLCarta = dameURLCarta(numeroCarta);
    partida.puntuacion = damePuntuacion(numeroCarta);
    cambioCarta(URLCarta);
  }
  
 function gameOver() {
    const mensaje = mensajeGameOver();
    mostrarMensaje(mensaje, partida.puntuacion);
    desactivarBotonesVictoria();
  }

  function gestionarPartida() {
    if (partida.puntuacion === 7.5) {
      victoria(partida.puntuacion)
    }

    if (partida.puntuacion > 7.5) {
      gameOver()
    }
  }
  
  export function ejecutarEnBotonDameCarta() {
    dameCarta();
    muestraPuntuacion();
    gestionarPartida();
  }
  
  export function ejecutarEnBotonPlantarse() {
    desactivarBotones();
    const mensajeAlPlantarse = mensajePlantarse(partida.puntuacion);
    mostrarMensajeAlPlantarse(mensajeAlPlantarse);
    activarBotonSupuesto();
  }
  
  export function ejecutarEnBotonNuevaPartida() {
    reiniciarBotones();
    reiniciarCarta();
    reiniciarMensaje();
    reiniciarPuntos();
    muestraPuntuacion();
  }
  
   export function ejectutarEnBotonSupuesto() {
    dameCarta();
    muestraPuntuacion();
    const mensajeSupuestoConst = mensajeSupuesto(partida.puntuacion);
    mostrarMensajeSupuesto(mensajeSupuestoConst);
    desactivarBotonSupuesto();
  }