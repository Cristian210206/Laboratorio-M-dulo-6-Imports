import {
    partida,
    dameCartaBoton,
    plantarseBoton,
    supuestoBoton,
  } from "./modelo";

if (
    supuestoBoton !== null &&
    supuestoBoton !== undefined &&
    supuestoBoton instanceof HTMLButtonElement
    ) {
    supuestoBoton.disabled = true;
}

export function dameNumeroRandom() {
    return Math.floor(Math.random() * (9 + 1) + 1);
  }
  
  export function dameNumeroCarta(numeroRandom: number): number {
    if (numeroRandom >= 8) {
      return numeroRandom + 2;
    } else {
      return numeroRandom;
    }
  }

  export function dameURLCarta(numeroCarta: number): string {
    switch (numeroCarta) {
      case 1:
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
        break;
      case 2:
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
        break;
      case 3:
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
        break;
      case 4:
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
        break;
      case 5:
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
        break;
      case 6:
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
        break;
      case 7:
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
        break;
      case 10:
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
        break;
      case 11:
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
        break;
      case 12:
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
        break;
      default:
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
    }
  }

  export function damePuntuacion(numeroCarta: number): number {
    if (numeroCarta > 7) {
      return partida.puntuacion + 0.5;
    } else {
      return partida.puntuacion + numeroCarta;
    }
  }
  
  export function mensajeGameOver(): string {
    return "Game Over";
  }

  export function desactivarBotonesVictoria() {
    if (
      partida.puntuacion >= 7.5 &&
      dameCartaBoton !== null &&
      dameCartaBoton !== undefined &&
      dameCartaBoton instanceof HTMLButtonElement &&
      plantarseBoton !== null &&
      plantarseBoton !== undefined &&
      plantarseBoton instanceof HTMLButtonElement
    ) {
      dameCartaBoton.disabled = true;
      plantarseBoton.disabled = true;
    }
  }

  export function desactivarBotones() {
    if (
      dameCartaBoton !== null &&
      dameCartaBoton !== undefined &&
      dameCartaBoton instanceof HTMLButtonElement &&
      plantarseBoton !== null &&
      plantarseBoton !== undefined &&
      plantarseBoton instanceof HTMLButtonElement
    ) {
      dameCartaBoton.disabled = true;
      plantarseBoton.disabled = true;
    }
  }

  export function mensajePlantarse(puntuacion: number) {
    if (puntuacion < 4) {
      return "Has sido muy conservador";
    }
    if (puntuacion < 6) {
      return "Te ha entrado el canguelo eh?";
    }
    if (puntuacion < 7.5) {
      return "Casi casi...";
    } else {
      return "";
    }
  }



  export function reiniciarPuntos() {
    partida.puntuacion = 0;
  }

  export function desactivarBotonSupuesto() {
    if (
      supuestoBoton !== null &&
      supuestoBoton !== undefined &&
      supuestoBoton instanceof HTMLButtonElement
    ) {
      supuestoBoton.disabled = true;
    }
  }
  
  export function mensajeSupuesto(puntuacion: number) {
    if (puntuacion < 7.5) {
      return "No habrias ganado de todas formas si hubieras continuado";
    }
    if (puntuacion === 7.5) {
      return "Habrias ganado de haber continuado";
    }
    if (puntuacion > 7.5) {
      return "Habrias perdido de haber continuado";
    } else {
      return "";
    }
  }