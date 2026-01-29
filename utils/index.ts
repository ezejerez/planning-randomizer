import type { Planificacion } from "../src/types";

// Función para seleccionar elemento aleatorio
export function getRandomElement<T>(arr: T[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Función para guardar planificación en localStorage
export function savePlanning(planning: Planificacion) {
  try {
    localStorage.setItem("planificacionPilates", JSON.stringify(planning));

    console.log("Planificación guardada en localStorage");
  } catch (e) {
    console.error("Error al guardar en localStorage:", e);
  }
}

// Función para cargar planificación desde localStorage
export function loadPlanning(): Planificacion | null {
  try {
    const loadedPlanning = localStorage.getItem("planificacionPilates");

    if (loadedPlanning) {
      console.log("Planificación cargada desde localStorage");
      return JSON.parse(loadedPlanning);
    }
  } catch (e) {
    console.error("Error al cargar desde localStorage:", e);
  }

  return null;
}
