export type Opcion = {
  RESORTE: string;
  EO: string;
  V: string;
  ACCESORIO?: string;
  TIPO?: string;
  POSICION?: string;
};

export type Ejercicio = {
  Ejercicio: string;
  Opciones: Opcion[];
};

export type SlotsDinamicos = {
  [key: string]: Ejercicio[];
};

export type Database = {
  METADATA_ESTRUCTURAL: {
    TIPO_CLASE: string;
    ESTRUCTURA_PRINCIPAL_SLOTS: string[];
  };
  BLOQUES_FIJOS: {
    SETUP_INICIAL_OPCIONES: string[];
    CIERRE_OPCIONES_SUGERIDAS: string[];
  };
  SLOTS_DINAMICOS: SlotsDinamicos;
};

export type PlanEjercicio = {
  Categoria?: string; // e.g. ZM, TI, TS - not in DB but added in generation
  Ejercicio: string;
  RESORTE: string;
  EO: string;
  V: string;
  ACCESORIO?: string;
  TIPO?: string;
};

export type Planificacion = {
  PLANIFICACION: string;
  TIPO_CLASE: string;
  Bloques_Clase: {
    Setup_Inicial: {
      "CONEXION_INICIAL+MOVILIDAD_ARTICULAR": string;
    };
    ENTRADA_EN_CALOR_Minutos_0_a_10: PlanEjercicio[];
    Parte_Principal_Minutos_10_a_40: {
      Primera_Ronda: PlanEjercicio[];
      Segunda_Ronda_Minuto_30: PlanEjercicio[];
    };
    Cierre_Final: {
      STRETCHING_OBSERVACIONES: string;
    };
  };
};
