import {
    dameCartaBoton,
    plantarseBoton,
    nuevaPartidaBoton,
    supuestoBoton,
  } from "./modelo";
  
  import {
    ejecutarEnBotonDameCarta,
    ejecutarEnBotonPlantarse,
    ejecutarEnBotonNuevaPartida,
    ejectutarEnBotonSupuesto,
  } from "./ui";

  if (
    dameCartaBoton !== null &&
    dameCartaBoton !== undefined &&
    dameCartaBoton instanceof HTMLButtonElement
  ) {
    dameCartaBoton.addEventListener("click", ejecutarEnBotonDameCarta);
  }
  
  if (
    plantarseBoton !== null &&
    plantarseBoton !== undefined &&
    plantarseBoton instanceof HTMLButtonElement
  ) {
    plantarseBoton.addEventListener("click", ejecutarEnBotonPlantarse);
  }
  
  if (
    nuevaPartidaBoton !== null &&
    nuevaPartidaBoton !== undefined &&
    nuevaPartidaBoton instanceof HTMLButtonElement
  ) {
    nuevaPartidaBoton.addEventListener("click", ejecutarEnBotonNuevaPartida);
  }
  
  if (
    supuestoBoton !== null &&
    supuestoBoton !== undefined &&
    supuestoBoton instanceof HTMLButtonElement
  ) {
    supuestoBoton.addEventListener("click", ejectutarEnBotonSupuesto);
  }