import { useState, useCallback } from "react";
import type { Database, Planificacion, PlanEjercicio } from "../types";
import { getRandomElement } from "../../utils";

export const usePlanningRandomizer = (db: Database) => {
  const [planning, setPlanning] = useState<Planificacion | null>(null);

  const generateNewPlanning = useCallback(() => {
    const newPlanning: Planificacion = {
      PLANIFICACION: "PLANI_ALEATORIA_GENERADA",
      TIPO_CLASE: "PILATES REFORMER",
      Bloques_Clase: {
        Setup_Inicial: {
          "CONEXION_INICIAL+MOVILIDAD_ARTICULAR": getRandomElement(
            db.BLOQUES_FIJOS.SETUP_INICIAL_OPCIONES,
          ) as string,
        },
        ENTRADA_EN_CALOR_Minutos_0_a_10: [],
        Parte_Principal_Minutos_10_a_40: {
          Primera_Ronda: [],
          Segunda_Ronda_Minuto_30: [],
        },
        Cierre_Final: {
          STRETCHING_OBSERVACIONES: getRandomElement(
            db.BLOQUES_FIJOS.CIERRE_OPCIONES_SUGERIDAS,
          ) as string,
        },
      },
    };

    // Entrada en Calor
    const ecSlots = ["EC_ZM", "EC_TI", "EC_TS"];
    const ecCategories = ["ZM", "TI", "TS"];

    ecSlots.forEach((slot, idx) => {
      const ejercicioData = getRandomElement(db.SLOTS_DINAMICOS[slot]);
      if (!ejercicioData) return;

      const ejercicio = ejercicioData as any;
      const opcion = getRandomElement(ejercicio.Opciones) as any;

      newPlanning.Bloques_Clase.ENTRADA_EN_CALOR_Minutos_0_a_10.push({
        Categoria: ecCategories[idx],
        Ejercicio: ejercicio.Ejercicio,
        RESORTE: opcion.RESORTE || "",
        ACCESORIO: opcion.ACCESORIO || "",
        EO: opcion.EO || "",
        V: opcion.V || "",
      } as PlanEjercicio);
    });

    // Primera Ronda PP
    const pp1Slots = ["PP_TI_1", "PP_ZM_1", "PP_TS_1"];
    const ppCategories = ["TI", "ZM", "TS"];

    pp1Slots.forEach((slot, idx) => {
      const ejercicioData = getRandomElement(db.SLOTS_DINAMICOS[slot]);
      if (!ejercicioData) return;

      const ejercicio = ejercicioData as any;
      const opcion = getRandomElement(ejercicio.Opciones) as any;

      newPlanning.Bloques_Clase.Parte_Principal_Minutos_10_a_40.Primera_Ronda.push(
        {
          Categoria: ppCategories[idx],
          Ejercicio: ejercicio.Ejercicio,
          TIPO: opcion.TIPO || "",
          RESORTE: opcion.RESORTE || "",
          ACCESORIO: opcion.ACCESORIO || "",
          EO: opcion.EO || "",
          V: opcion.V || "",
        } as PlanEjercicio,
      );
    });

    const pp2Slots = ["PP_TI_2", "PP_ZM_2", "PP_TS_2"];

    pp2Slots.forEach((slot, idx) => {
      const ejercicioData = getRandomElement(db.SLOTS_DINAMICOS[slot]);
      if (!ejercicioData) return;

      const ejercicio = ejercicioData as any;
      const opcion = getRandomElement(ejercicio.Opciones) as any;

      newPlanning.Bloques_Clase.Parte_Principal_Minutos_10_a_40.Segunda_Ronda_Minuto_30.push(
        {
          Categoria: ppCategories[idx],
          Ejercicio: ejercicio.Ejercicio,
          TIPO: opcion.TIPO || "",
          RESORTE: opcion.RESORTE || "",
          ACCESORIO: opcion.ACCESORIO || "",
          EO: opcion.EO || "",
          V: opcion.V || "",
        } as PlanEjercicio,
      );
    });

    setPlanning(newPlanning);
    return newPlanning;
  }, [db]);

  return { planning, setPlanning, generateNewPlanning };
};
