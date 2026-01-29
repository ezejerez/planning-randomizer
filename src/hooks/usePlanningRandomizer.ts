import { useState, useCallback } from "react";
import type { Database, Planificacion, PlanEjercicio } from "../types";
import { getRandomElement } from "../../utils";

export type SlotSelection = {
  block: "SETUP" | "EC" | "PP1" | "PP2" | "CIERRE";
  index: number;
};

// Map blocks to their DB source keys
const SLOT_KEYS = {
  EC: ["EC_ZM", "EC_TI", "EC_TS"],
  PP1: ["PP_TI_1", "PP_ZM_1", "PP_TS_1"],
  PP2: ["PP_TI_2", "PP_ZM_2", "PP_TS_2"],
};

export const usePlanningRandomizer = (db: Database) => {
  const [planning, setPlanning] = useState<Planificacion | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<SlotSelection | null>(null);

  const toggleSelection = useCallback(
    (block: SlotSelection["block"], index: number) => {
      setSelectedSlot((prev) => {
        if (prev?.block === block && prev?.index === index) {
          return null; // deselect if same
        }
        return { block, index };
      });
    },
    [],
  );

  const generateNewPlanning = useCallback(() => {
    const newPlanning: Planificacion = {
      PLANIFICACION: "PLANI_ALEATORIA_GENERADA",
      TIPO_CLASE: "PILATES REFORMER",
      Bloques_Clase: {
        Setup_Inicial: {
          "CONEXION_INICIAL+MOVILIDAD_ARTICULAR": getRandomElement(
            db.BLOQUES_FIJOS.SETUP_INICIAL_OPCIONES,
          ),
        },
        ENTRADA_EN_CALOR_Minutos_0_a_10: [],
        Parte_Principal_Minutos_10_a_40: {
          Primera_Ronda: [],
          Segunda_Ronda_Minuto_30: [],
        },
        Cierre_Final: {
          STRETCHING_OBSERVACIONES: getRandomElement(
            db.BLOQUES_FIJOS.CIERRE_OPCIONES_SUGERIDAS,
          ),
        },
      },
    };

    // Entrada en Calor
    const ecSlots = SLOT_KEYS.EC;
    const ecCategories = ["ZM", "TI", "TS"];

    ecSlots.forEach((slot, idx) => {
      const ejercicio = getRandomElement(db.SLOTS_DINAMICOS[slot]);

      if (!ejercicio) return;

      const opcion = getRandomElement(ejercicio.Opciones);

      newPlanning.Bloques_Clase.ENTRADA_EN_CALOR_Minutos_0_a_10.push({
        Categoria: ecCategories[idx],
        Ejercicio: ejercicio.Ejercicio,
        RESORTE: opcion.RESORTE || "",
        ACCESORIO: opcion.ACCESORIO || "",
        EO: opcion.EO || "",
        V: opcion.V || "",
      });
    });

    // Primera Ronda PP
    const pp1Slots = SLOT_KEYS.PP1;
    const ppCategories = ["TI", "ZM", "TS"];

    pp1Slots.forEach((slot, idx) => {
      const ejercicio = getRandomElement(db.SLOTS_DINAMICOS[slot]);

      if (!ejercicio) return;

      const opcion = getRandomElement(ejercicio.Opciones);

      newPlanning.Bloques_Clase.Parte_Principal_Minutos_10_a_40.Primera_Ronda.push(
        {
          Categoria: ppCategories[idx],
          Ejercicio: ejercicio.Ejercicio,
          TIPO: opcion.TIPO || "",
          RESORTE: opcion.RESORTE || "",
          ACCESORIO: opcion.ACCESORIO || "",
          EO: opcion.EO || "",
          V: opcion.V || "",
        },
      );
    });

    const pp2Slots = SLOT_KEYS.PP2;

    pp2Slots.forEach((slot, idx) => {
      const ejercicio = getRandomElement(db.SLOTS_DINAMICOS[slot]);

      if (!ejercicio) return;

      const opcion = getRandomElement(ejercicio.Opciones);

      newPlanning.Bloques_Clase.Parte_Principal_Minutos_10_a_40.Segunda_Ronda_Minuto_30.push(
        {
          Categoria: ppCategories[idx],
          Ejercicio: ejercicio.Ejercicio,
          TIPO: opcion.TIPO || "",
          RESORTE: opcion.RESORTE || "",
          ACCESORIO: opcion.ACCESORIO || "",
          EO: opcion.EO || "",
          V: opcion.V || "",
        },
      );
    });

    setPlanning(newPlanning);
    setSelectedSlot(null); // Reset selection
    return newPlanning;
  }, [db]);

  const regenerateSelectedSlot = useCallback(() => {
    if (!selectedSlot || !planning) return;

    const { block, index } = selectedSlot;
    // Deep clone to avoid mutating state directly
    const newPlanning = JSON.parse(JSON.stringify(planning)) as Planificacion;

    // Helper to get excluded exercises from a list of exercises
    const getNames = (list: PlanEjercicio[]) => list.map((e) => e.Ejercicio);

    if (block === "SETUP") {
      const current =
        planning.Bloques_Clase.Setup_Inicial[
          "CONEXION_INICIAL+MOVILIDAD_ARTICULAR"
        ];
      const pool = db.BLOQUES_FIJOS.SETUP_INICIAL_OPCIONES;
      // Filter out current
      const available = pool.filter((item) => item !== current);
      if (available.length > 0)
        newPlanning.Bloques_Clase.Setup_Inicial[
          "CONEXION_INICIAL+MOVILIDAD_ARTICULAR"
        ] = getRandomElement(available);
    } else if (block === "CIERRE") {
      const current =
        planning.Bloques_Clase.Cierre_Final.STRETCHING_OBSERVACIONES;
      const pool = db.BLOQUES_FIJOS.CIERRE_OPCIONES_SUGERIDAS;
      const available = pool.filter((item) => item !== current);
      if (available.length > 0)
        newPlanning.Bloques_Clase.Cierre_Final.STRETCHING_OBSERVACIONES =
          getRandomElement(available);
    } else {
      // Dynamic slots
      let currentList: PlanEjercicio[] = [];
      let dbKeyStr = "";
      let category = "";

      // Determine context which list to modify and which DB key to check
      if (block === "EC") {
        currentList = planning.Bloques_Clase.ENTRADA_EN_CALOR_Minutos_0_a_10;
        dbKeyStr = SLOT_KEYS.EC[index];
        category = ["ZM", "TI", "TS"][index];
      } else if (block === "PP1") {
        currentList =
          planning.Bloques_Clase.Parte_Principal_Minutos_10_a_40.Primera_Ronda;
        dbKeyStr = SLOT_KEYS.PP1[index];
        category = ["TI", "ZM", "TS"][index];
      } else if (block === "PP2") {
        currentList =
          planning.Bloques_Clase.Parte_Principal_Minutos_10_a_40
            .Segunda_Ronda_Minuto_30;
        dbKeyStr = SLOT_KEYS.PP2[index];
        category = ["TI", "ZM", "TS"][index];
      }

      if (dbKeyStr && currentList) {
        const poolData = db.SLOTS_DINAMICOS[dbKeyStr];
        // Enforce uniqueness: exclude exercise present in the current visible list
        const existingNames = getNames(currentList);

        // Find options in pool that are NOT in the existingNames
        const validOptions = poolData.filter(
          (ex) => !existingNames.includes(ex.Ejercicio),
        );

        // Fallback: if all exercises are used (unlikely but possible if pool is small),
        // at least ensure it's not the *exact same one* at this index.
        const fallbackOptions = poolData.filter(
          (ex) => ex.Ejercicio !== currentList[index].Ejercicio,
        );

        const dataset =
          validOptions.length > 0 ? validOptions : fallbackOptions;

        if (dataset.length > 0) {
          const newExerciseData = getRandomElement(dataset);
          const newOption = getRandomElement(newExerciseData.Opciones);

          const newItem: PlanEjercicio = {
            Categoria: category,
            Ejercicio: newExerciseData.Ejercicio,
            RESORTE: newOption.RESORTE || "",
            ACCESORIO: newOption.ACCESORIO || "",
            EO: newOption.EO || "",
            V: newOption.V || "",
            TIPO: newOption.TIPO || undefined,
          };

          // Apply update
          if (block === "EC") {
            newPlanning.Bloques_Clase.ENTRADA_EN_CALOR_Minutos_0_a_10[index] =
              newItem;
          } else if (block === "PP1") {
            newPlanning.Bloques_Clase.Parte_Principal_Minutos_10_a_40.Primera_Ronda[
              index
            ] = newItem;
          } else if (block === "PP2") {
            newPlanning.Bloques_Clase.Parte_Principal_Minutos_10_a_40.Segunda_Ronda_Minuto_30[
              index
            ] = newItem;
          }
        }
      }
    }

    setPlanning(newPlanning);
    // setSelectedSlot(null) // Reset selection
  }, [planning, selectedSlot, db]);

  return {
    planning,
    setPlanning,
    generateNewPlanning,
    selectedSlot,
    toggleSelection,
    regenerateSelectedSlot,
  };
};
