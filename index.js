// Base de datos estructural
const DATABASE = {
  METADATA_ESTRUCTURAL: {
    TIPO_CLASE: "PILATES REFORMER",
    ESTRUCTURA_PRINCIPAL_SLOTS: [
      "EC_ZM",
      "EC_TI",
      "EC_TS",
      "PP_TI_1",
      "PP_ZM_1",
      "PP_TS_1",
      "PP_TI_2",
      "PP_ZM_2",
      "PP_TS_2",
    ],
  },
  BLOQUES_FIJOS: {
    SETUP_INICIAL_OPCIONES: [
      "Movilidad de columna (gato contento/enojado) sin movimiento del equipo",
      "Round con empujes leves y movilidad de brazos",
      "Flat con empujes (foco en postura) con Banda en manos",
      "Cintas en manos para abdomen (bajar brazos)",
      "Round-Flat a la barra (resorte Ve)",
    ],
    CIERRE_OPCIONES_SUGERIDAS: [
      "Estiramiento sugerido: Glúteos - Cuadriceps - Espalda - Abdomen. Movilidad de Hombros y cuello. Relajación. Cierre de la clase - motivación - agradecimiento. saludo",
      "Estiramiento sugerido: Flexores/cuadriceps - Gluteos -cintura - espalda-Pecho. Movilidad de Hombros y cuello. Relajación. Cierre de la clase - motivación - agradecimiento. saludo",
      "Estiramiento sugerido: Isquios- Psoas -cuadriceps-cintura-espalda-hombros-triceps. Movilidad de Hombros y cuello. Relajación. Cierre de la clase - motivación - agradecimiento. saludo",
    ],
  },
  SLOTS_DINAMICOS: {
    EC_ZM: [
      {
        Ejercicio: "Round con empujes",
        Opciones: [
          {
            RESORTE: "AZ",
            EO: "Movimiento del equipo",
            V: "movilidad de brazos",
          },
        ],
      },
      {
        Ejercicio: "Round con cintas",
        Opciones: [
          {
            RESORTE: "AZ",
            EO: "Movimiento del tronco",
            V: "coordinación de piernas",
          },
          {
            RESORTE: "VE",
            EO: "round/flat mirando a poleas",
            V: "elevar 1 pierna al bajar",
          },
        ],
      },
      {
        Ejercicio: "Flat con empujes",
        Opciones: [
          {
            RESORTE: "VE",
            EO: "Movimiento de piernas",
            V: "coordinación de brazos",
            ACCESORIO: "box largo",
          },
        ],
      },
      {
        Ejercicio: "CIEN",
        Opciones: [{ RESORTE: "VERDE", EO: "Movim crunch", V: "Batidas" }],
      },
      {
        Ejercicio: "Stomach massage",
        Opciones: [
          {
            RESORTE: "VE",
            EO: "Movim del equipo en flat",
            V: "Movil brazos",
            ACCESORIO: "box largo",
          },
        ],
      },
      {
        Ejercicio: "Movilidad columna (gato contento/enojado)",
        Opciones: [
          {
            RESORTE: "VE",
            EO: "Movilidad sin movim del equipo",
            V: "con empuje barra",
          },
        ],
      },
      {
        Ejercicio: "Rowing the caderas",
        Opciones: [
          {
            RESORTE: "VE",
            EO: "Movilidad con cintas hacia arriba",
            V: "cambiar sentido",
          },
        ],
      },
      {
        Ejercicio: "Round + Flat hacia barra sentados en box largo",
        Opciones: [
          {
            RESORTE: "VE",
            EO: "Empujes de barra en flat",
            V: "Sumar round al cerrar y movil brazos con accesorio en mano",
          },
        ],
      },
      {
        Ejercicio: "Roll up con empujes",
        Opciones: [
          {
            RESORTE: "VE+AM",
            EO: "Subir y bajar completo el tronco hasta sentarse",
            V: "agregar movim del equipo y brazos",
          },
        ],
      },
      {
        Ejercicio: "Abd DCD piernas 90 grados y brazos extendidos",
        Opciones: [
          {
            RESORTE: "",
            EO: "bajar y subir escápulas",
            V: "3 Batidos al subir",
          },
        ],
      },
      {
        Ejercicio: "Abdomen crunch con brazos + empujes",
        Opciones: [
          {
            RESORTE: "ROJO",
            EO: "",
            V: "Al bajar brazos llevar una rodilla la pecho, hacerlo alternadamente",
          },
        ],
      },
      {
        Ejercicio: "Roll up",
        Opciones: [
          {
            RESORTE: "VE+pesas",
            EO: "",
            V: "rotar a la derecha / Rotar a la izquierda / hacer round al rotar",
          },
        ],
      },
    ],
    EC_TI: [
      {
        Ejercicio: "Puente de gluteos",
        Opciones: [
          {
            RESORTE: "AZ+AM",
            EO: "Movilidad de cadera sube/baja",
            V: "movilidad de brazos",
          },
          {
            RESORTE: "ROJO+AM",
            EO: "Elev caderas",
            V: "Movil equipo o brazos",
          },
        ],
      },
      {
        Ejercicio: "Hi Strecth",
        Opciones: [
          {
            RESORTE: "AZ",
            EO: "Movilidad del tronco",
            V: "movilidad de caderas",
          },
        ],
      },
      {
        Ejercicio: "Single leg",
        Opciones: [
          {
            RESORTE: "VE",
            EO: "Movilidad de equipo con pie de apoyo",
            V: "movilidad de la pierna de arriba",
          },
        ],
      },
      {
        Ejercicio: "Footwork",
        Opciones: [
          { RESORTE: "VE+AM", EO: "Movilidad de equipo con metatarsos", V: "" },
          { RESORTE: "VE", EO: "saltos en tabla", V: "tijeras al saltar" },
        ],
      },
      {
        Ejercicio: "Sentadillas",
        Opciones: [
          {
            RESORTE: "",
            EO: "al costado del equipo con banda altura muslos",
            V: "abeduccion pp",
          },
        ],
      },
      {
        Ejercicio: "Elephant",
        Opciones: [
          {
            RESORTE: "VE+AM",
            EO: "Abrir equipo hasta donde no se despeguen los talones",
            V: "Elevar 1 pierna alternadamente",
          },
        ],
      },
      {
        Ejercicio:
          "Estocadas alternadas parados al costado del equipo con 1 cinta",
        Opciones: [
          {
            RESORTE: "VE",
            EO: "bajar y subir caderas",
            V: "sumarle movilidad de columna",
          },
        ],
      },
    ],
    EC_TS: [
      {
        Ejercicio: "Remos abiertos/cerrados",
        Opciones: [
          {
            RESORTE: "AZ+AM",
            EO: "Tracción de brazos",
            V: "movimiento circular",
          },
          { RESORTE: "ROJO+AM", EO: "Remo abierto", V: "Remo cerrado" },
        ],
      },
      {
        Ejercicio: "Vuelos Frontales + circulares",
        Opciones: [
          {
            RESORTE: "AZ",
            EO: "Vuelo común",
            V: "movimiento circular",
            POSICION: "hacia poleas",
          },
        ],
      },
      {
        Ejercicio: "Pushing the barr",
        Opciones: [
          {
            RESORTE: "VE",
            EO: "empuje de brazos",
            V: "movimiento de piernas",
            POSICION: "dcv",
          },
        ],
      },
      {
        Ejercicio: "Cintas en manos DCD",
        Opciones: [
          { RESORTE: "VE", EO: "Pendulos", V: "extender pp al techo" },
        ],
      },
      {
        Ejercicio: "Press pecho con cintas",
        Opciones: [
          {
            RESORTE: "VE",
            EO: "Press",
            V: "press triceps",
            POSICION: "a caball del box sentados",
          },
        ],
      },
      {
        Ejercicio: "Vuelos posteriores",
        Opciones: [
          { RESORTE: "VE", EO: "Sentados a poleas", V: "vuelo frontal" },
        ],
      },
      {
        Ejercicio: "Remos de pie a un costado",
        Opciones: [
          {
            RESORTE: "VE",
            EO: "Ambas manos en 1 cinta",
            V: "Redondear columna",
          },
        ],
      },
      {
        Ejercicio: "Chest expansion",
        Opciones: [
          {
            RESORTE: "VE+AM",
            EO: "Arrodillado hacia poleas con cintas, separar y juntar escapulas",
            V: "",
          },
        ],
      },
      {
        Ejercicio: "Flat con movilidad de brazos mancuernas",
        Opciones: [
          {
            RESORTE: "VE+AM",
            EO: "Movilidad tipo press de hombros con manc.",
            V: "sumar movim del equipo en flat",
          },
        ],
      },
    ],
    PP_TI_1: [
      {
        Ejercicio: "Leg push",
        Opciones: [
          {
            RESORTE: "AZ",
            TIPO: "UNILATERAL",
            EO: "Extensión de piernas",
            V: "Elevación de brazos",
            ACCESORIO: "pelota en manos",
            POSICION: "al costado del equipo en piso",
          },
        ],
      },
      {
        Ejercicio: "Glúteo lateral DCL",
        Opciones: [
          {
            RESORTE: "AZ + AM",
            TIPO: "UNILATERAL",
            EO: "Extensión de piernas",
            V: "Elevación de brazos",
            ACCESORIO: "pesa 1/2 kg en brazo de arriba",
          },
        ],
      },
      {
        Ejercicio: "ESTOCADAS",
        Opciones: [
          {
            RESORTE: "VE",
            TIPO: "UNILATERAL",
            EO: "Descenso de cadera mientras abro equipo",
            V: "Movilidad de brazos",
            ACCESORIO: "mancuernas",
            POSICION: "(Empujo box corto)",
          },
        ],
      },
      {
        Ejercicio: "Frog empuja rana",
        Opciones: [
          {
            RESORTE: "VE",
            TIPO: "OPCION 1 EJERCICIO",
            EO: "Empuje pp",
            V: "Movilidad tronco tipo cisne al cerrar equipo",
            ACCESORIO: "box (pesitas)",
          },
        ],
      },
      {
        Ejercicio: "Gluteo lateral con salto",
        Opciones: [
          {
            RESORTE: "VE+AM",
            TIPO: "UNILATERAL",
            EO: "saltos con pierna de arriba, posicion lateral cuerpo",
            V: "rodilla al pecho",
            ACCESORIO: "tabla",
          },
        ],
      },
      {
        Ejercicio: "Sentadillas con cinta",
        Opciones: [
          {
            RESORTE: "VE+AM",
            TIPO: "1 EJERCICIO",
            EO: "bajar y subir con equipo fuera de tope",
            V: "al subir elevar talones",
            ACCESORIO: "CINTAS",
            POSICION: "de pie al costado del equipo",
          },
        ],
      },
      {
        Ejercicio: "Cintas en los pies",
        Opciones: [
          {
            RESORTE: "VE+AM",
            TIPO: "OPCION 1 EJERCICIO",
            EO: "Bajar y subir con pp extendidas flex entre rodillas",
            V: "sumar presion del anillo",
            ACCESORIO: "cintas+flex",
          },
        ],
      },
      {
        Ejercicio: "Sentadillas sumo",
        Opciones: [
          {
            RESORTE: "VE+AM",
            TIPO: "OPCION 2 EJERCICIOS",
            EO: "Sentadillas con 1 cinta en mano (rodis hacia fuera)",
            V: "Bajar en 3 tiempos, subir en 1",
            ACCESORIO: "cinta",
          },
        ],
      },
      {
        Ejercicio: "Hi stretch con cintas",
        Opciones: [
          {
            RESORTE: "VE",
            TIPO: "OPCION 1 EJERCICIO",
            EO: "Movilidad gluteos a talones",
            V: "al subir cadera empujar brazos hacia atrás",
            ACCESORIO: "cintas",
          },
        ],
      },
      {
        Ejercicio: "Russian split",
        Opciones: [
          {
            RESORTE: "VE",
            TIPO: "OPCION UNILATERAL",
            EO: "Extender pierna de adelante (desde el piso, pie de arriba contra hombrera)",
            V: "Abrir y cerrar equipo presionando flex",
            ACCESORIO: "Flex",
          },
        ],
      },
    ],
    PP_ZM_1: [
      {
        Ejercicio: "Kness off + Up stretch",
        Opciones: [
          {
            RESORTE: "AZ",
            TIPO: "2 EJERCICIOS",
            EO: "elevación de rodillas + extensión de piernas",
            V: "empujes con antebrazos",
            ACCESORIO: "pelota entre rodrillas",
            POSICION: "(box corto)",
          },
        ],
      },
      {
        Ejercicio: "Twist con empujes",
        Opciones: [
          {
            RESORTE: "AZ",
            TIPO: "1 EJERCICIO",
            EO: "movilidad del equipo + round",
            V: "twist al abrir equipo",
          },
        ],
      },
      {
        Ejercicio: "Side ben (cintura lateral sentados en box corto)",
        Opciones: [
          {
            RESORTE: "EQUIPO SIN MOVIMIENTO",
            TIPO: "UNILATERAL",
            EO: "Descender en bloque hacia las poleas",
            V: "movilidad de brazos",
            ACCESORIO: "barra de body o baston",
          },
        ],
      },
      {
        Ejercicio: "Side ben con empujes",
        Opciones: [
          {
            RESORTE: "VE",
            TIPO: "UNILATERAL",
            EO: "empuje barra con pie arriba apoyo antebrazo en box",
            V: "elevacion tronco al abrir equipo",
            ACCESORIO: "1 mancuerna",
          },
        ],
      },
      {
        Ejercicio: "Cisne manos en barra",
        Opciones: [
          {
            RESORTE: "VE",
            TIPO: "2 EJERCICIOS",
            EO: "Abrir equipo con el pecho bajo, al cerrarlo subir tronco",
            V: "coordinacion piernas con accesorio",
            ACCESORIO: "Pelota o flex entre tobillos",
            POSICION: "(box largo en el centro)",
          },
        ],
      },
      {
        Ejercicio: "SNAKE",
        Opciones: [
          {
            RESORTE: "VE",
            TIPO: "UNILATERAL",
            EO: "Bajar a plancha lateral, parados en suelo",
            V: "al llegar a plancha hacer 3 insistencias con cadera",
          },
        ],
      },
      {
        Ejercicio: "Roll up con empuje tabla",
        Opciones: [
          {
            RESORTE: "VE",
            TIPO: "2 EJERCICIOS",
            EO: "Al empujar la tabla me siento (sin saltos)",
            V: "coordinacion con movim de brazos al subir",
            ACCESORIO: "barra body o baston",
          },
        ],
      },
      {
        Ejercicio: "STAR",
        Opciones: [
          {
            RESORTE: "VE",
            TIPO: "UNILATERAL",
            EO: "Subir y bajar cadera +movim del equipo",
            V: "rulo (rotacion columna al quedar en plancha lateral)",
            ACCESORIO: "1 mancuerna+box",
            POSICION: "(box corto)",
          },
        ],
      },
      {
        Ejercicio: "Around the world",
        Opciones: [
          {
            RESORTE: "VE+AM",
            TIPO: "UNILATERAL",
            EO: "Mirando hacia poleas con 1 cinta bajar a round y rotar columna",
            V: "sumar el circulo completo",
            ACCESORIO: "1 mancuerna+ 1 CINTA",
          },
        ],
      },
      {
        Ejercicio: "Down stretch + long stretch",
        Opciones: [
          {
            RESORTE: "VE+AM",
            TIPO: "OPCION 1 EJERCICIO",
            EO: "Movilidad gluteos a talones",
            V: "Abrir equipo en tabla",
            ACCESORIO: "pelota chica entre rodillas",
          },
        ],
      },
    ],
    PP_TS_1: [
      {
        Ejercicio: "Dorsal DCV (box largo)",
        Opciones: [
          {
            RESORTE: "AM",
            TIPO: "1 SOLO EJERCICIO",
            EO: "Tracción simple codos a las costilas",
            V: "insistencias x 3 / tracción a un solo brazo",
            ACCESORIO: "Anillo o pelota entre talones",
          },
        ],
      },
      {
        Ejercicio: "Press pecho Bandeja + Press Triceps",
        Opciones: [
          {
            RESORTE: "AZ",
            TIPO: "2 EJERCICIOS",
            EO: "Empuje de brazos palmas hacia arriba",
            V: "dibujar circulo al extender",
            ACCESORIO: "Ninguno",
          },
        ],
      },
      {
        Ejercicio: "Remos hacia poleas",
        Opciones: [
          {
            RESORTE: "VE O AM+VE",
            TIPO: "2 EJERCICIOS",
            EO: "Remo abierto",
            V: "dibujar circulo entre remo ab y cerrado",
            ACCESORIO: "Cintas",
          },
        ],
      },
      {
        Ejercicio: "Serie de brazos de costado",
        Opciones: [
          {
            RESORTE: "VE O AMARILLO",
            TIPO: "UNILATERAL",
            EO: "Sentados en box traccion con mano mas lejana",
            V: "sumar rotacion columna",
            ACCESORIO: "Cintas",
          },
        ],
      },
      {
        Ejercicio: "Biceps + triceps con cintas",
        Opciones: [
          {
            RESORTE: "VE o VE+AM",
            TIPO: "2 EJERCICIOS",
            EO: "Sentados en box a caballito curl de biceps",
            V: "1 curl biceps + 1 remo cerrado",
            ACCESORIO: "Cintas + BOX",
          },
        ],
      },
      {
        Ejercicio: "Pulling straps (box largo)",
        Opciones: [
          {
            RESORTE: "VE o VE+AM",
            TIPO: "OPCION 1 EJERCICIO",
            EO: "Pendulos con brazos extendidos",
            V: "elevar levemente el torso",
            ACCESORIO: "cintas",
          },
        ],
      },
      {
        Ejercicio: "Triceps a 1 brazo con cinta",
        Opciones: [
          {
            RESORTE: "Ve",
            TIPO: "UNILATERAL",
            EO: "Movilidad brazo con cinta tipo pendulo",
            V: "dejar codo fijo y flexionar (patada)",
            ACCESORIO: "cinta",
            POSICION: "(posicion cuadrupedia)",
          },
        ],
      },
      {
        Ejercicio: "Vuelos laterales con cintas",
        Opciones: [
          {
            RESORTE: "VE o VE+AM",
            TIPO: "2 EJERCICIOS",
            EO: "Vuelos laterales",
            V: "Con movilidad piernas/accesorio",
            ACCESORIO: "banda circular/flex",
          },
        ],
      },
    ],
    PP_TI_2: [
      {
        Ejercicio: "Estocada con cinta",
        Opciones: [
          {
            RESORTE: "AZ",
            TIPO: "UNILATERAL",
            EO: "Movilidad estocada",
            V: "Coordinacion de brazos",
            ACCESORIO: "Pesa 1/2 kg",
            POSICION: "al costado del equipo",
          },
        ],
      },
      {
        Ejercicio: "Side Split",
        Opciones: [
          {
            RESORTE: "AZ",
            TIPO: "UNILATERAL",
            EO: "Apertura de piernas",
            V: "Coordinación de brazos",
            ACCESORIO: "Pesas 1/2 kg",
          },
        ],
      },
      {
        Ejercicio: "Puente de gluteos",
        Opciones: [
          {
            RESORTE: "VE + AM O ROJO+AM",
            TIPO: "1 SOLO EJERCICIO",
            EO: "Movilidad caderas subir y bajar",
            V: "Coordinación de brazos",
            ACCESORIO: "Pesas 1/2 kg",
          },
        ],
      },
      {
        Ejercicio: "Cintas en los pies",
        Opciones: [
          {
            RESORTE: "VE + AM",
            TIPO: "1 SOLO EJERCICIO",
            EO: "extender piernas hacia adelante (pel entre tobillos)",
            V: "movilidad en circulos",
            ACCESORIO: "cintas en pies y pelota chica",
          },
        ],
      },
      {
        Ejercicio: "Kness off (foco en piernas)",
        Opciones: [
          {
            RESORTE: "VE o VE+AM",
            TIPO: "1 EJERCICIO",
            EO: "Despegar rodis y apoyar",
            V: "Abrir equipo con pp solo hasta la mitad (no plancha), volver y apoyar",
            ACCESORIO: "pelota chica entre tobillos",
            POSICION: "box corto",
          },
        ],
      },
    ],
    PP_ZM_2: [
      {
        Ejercicio: "Rowing the caderas",
        Opciones: [
          {
            RESORTE: "AM",
            TIPO: "1 SOLO EJERCICIO",
            EO: "Movilidad de columna + brazos dirección 1",
            V: "",
            ACCESORIO: "Cintas en las manos",
          },
        ],
      },
      {
        Ejercicio: "CIEN",
        Opciones: [
          {
            RESORTE: "AZ",
            TIPO: "1 SOLO EJERCICIO",
            EO: "Movilidad de piernas",
            V: "Coordinación brazos y elevación de tronco",
            ACCESORIO: "Cintas en las manos",
          },
        ],
      },
      {
        Ejercicio: "Oblicuos a 1 pierna",
        Opciones: [
          {
            RESORTE: "VE",
            TIPO: "1 UNILATERAL",
            EO: "Elev. tronco + pierna contraria de la barra haciendo un abdominal cruzado",
            V: "Coordinar con movimiento del equipo",
            ACCESORIO: "-",
          },
        ],
      },
      {
        Ejercicio: "Down stretch",
        Opciones: [
          {
            RESORTE: "VE o VE+AM",
            TIPO: "1 EJERCICIO",
            EO: "Movilidad gluteos a talones + tabla (manos en barra)",
            V: "En tabla abrir y cerrar equipo",
            ACCESORIO: "Pelota chica entre rodillas",
          },
        ],
      },
      {
        Ejercicio: "Round con cintas",
        Opciones: [
          {
            RESORTE: "VE+AM",
            TIPO: "1 SOLO EJERCICIO",
            EO: "Bajar y subir en round",
            V: "al bajar elevar una pierna alternadamente",
            ACCESORIO: "Cintas en las manos",
            POSICION: "(hacia poleas)",
          },
        ],
      },
      {
        Ejercicio: "Arbol (box corto) usar cinta de seguridad",
        Opciones: [
          {
            RESORTE: "-",
            TIPO: "UNILATERAL",
            EO: "Round/flat con despegue pierna libre de la barra",
            V: "pasar anillo x dentro y fuera de la pierna",
            ACCESORIO: "Flex ring",
          },
        ],
      },
      {
        Ejercicio: "Twist con empujes de la barra",
        Opciones: [
          {
            RESORTE: "VE o VE+AM",
            TIPO: "UNILATERAL",
            EO: "Round flat",
            V: "Al bajar rotar torso (elevar pierna contraria)",
            ACCESORIO: "Mancuernas",
          },
        ],
      },
    ],
    PP_TS_2: [
      {
        Ejercicio: "Press pecho + Aperturas",
        Opciones: [
          {
            RESORTE: "AZ",
            TIPO: "1 SOLO EJERCICIO",
            EO: "Extensión/Flexión de brazos codos altos",
            V: "Tres insistencias cortas en mitad de recorrido",
            ACCESORIO: "Ninguno",
          },
        ],
      },
      {
        Ejercicio: "Cintas en las manos 1",
        Opciones: [
          {
            RESORTE: "AZ o AZ+AM",
            TIPO: "1 SOLO EJERCICIO",
            EO: "Péndulos",
            V: "Coordinación de piernas",
            ACCESORIO: "Pelota entre rodillas",
          },
        ],
      },
      {
        Ejercicio: "Press hombros con cintas",
        Opciones: [
          {
            RESORTE: "VE O AM",
            TIPO: "2 SOLO EJERCICIOS",
            EO: "Press hombros sentados contra hombreras",
            V: "Movimiento circular con brazos",
            ACCESORIO: "Cintas",
          },
        ],
      },
      {
        Ejercicio: "Pushing the barr arrodillados",
        Opciones: [
          {
            RESORTE: "VE O AM",
            TIPO: "2 EJERCICIOS",
            EO: "empuje de barra codos hacia afuera",
            V: "asimetria 1 codo hacia abajo uno hacia afuera",
            ACCESORIO: "Cintas",
          },
        ],
      },
      {
        Ejercicio: "Remos dentro de la fosa (tomando hombreras)",
        Opciones: [
          {
            RESORTE: "VE",
            TIPO: "1 EJERCICIO",
            EO: "traccionar hombreras, posic semisentadilla",
            V: "1 remo + 1 movilidad tipo gato al traccionar redondear",
            ACCESORIO: "-",
          },
        ],
      },
      {
        Ejercicio: "Remos/ vuelos posteriores",
        Opciones: [
          {
            RESORTE: "VE O VE+AM",
            TIPO: "2 EJERCICIOS",
            EO: "Remos abiertos",
            V: "Remos en X alternados",
            ACCESORIO: "cintas",
          },
        ],
      },
      {
        Ejercicio: "Cintas en mano DCD",
        Opciones: [
          {
            RESORTE: "VE+AM O ROJO +AM",
            TIPO: "1 EJERCICIO",
            EO: "Pendulo bb extendidos",
            V: "sumar presion en el accesorio",
            ACCESORIO: "cintas+ flex en rodillas",
          },
        ],
      },
    ],
  },
};

// Función para seleccionar elemento aleatorio
function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Función principal de generación
function generarPlanificacion() {
  const plan = {
    PLANIFICACION: "PLANI_ALEATORIA_GENERADA",
    TIPO_CLASE: "PILATES REFORMER",
    Bloques_Clase: {
      Setup_Inicial: {
        "CONEXION_INICIAL+MOVILIDAD_ARTICULAR": randomElement(
          DATABASE.BLOQUES_FIJOS.SETUP_INICIAL_OPCIONES
        ),
      },
      ENTRADA_EN_CALOR_Minutos_0_a_10: [],
      Parte_Principal_Minutos_10_a_40: {
        Primera_Ronda: [],
        Segunda_Ronda_Minuto_30: [],
      },
      Cierre_Final: {
        STRETCHING_OBSERVACIONES: randomElement(
          DATABASE.BLOQUES_FIJOS.CIERRE_OPCIONES_SUGERIDAS
        ),
      },
    },
  };

  // Entrada en Calor
  const ecSlots = ["EC_ZM", "EC_TI", "EC_TS"];
  const ecCategories = ["ZM", "TI", "TS"];

  ecSlots.forEach((slot, idx) => {
    const ejercicio = randomElement(DATABASE.SLOTS_DINAMICOS[slot]);
    const opcion = randomElement(ejercicio.Opciones);

    plan.Bloques_Clase.ENTRADA_EN_CALOR_Minutos_0_a_10.push({
      Categoria: ecCategories[idx],
      Ejercicio: ejercicio.Ejercicio,
      RESORTE: opcion.RESORTE || "",
      ACCESORIO: opcion.ACCESORIO || "",
      EO: opcion.EO || "",
      V: opcion.V || "",
    });
  });

  // Primera Ronda PP
  const pp1Slots = ["PP_TI_1", "PP_ZM_1", "PP_TS_1"];
  const ppCategories = ["TI", "ZM", "TS"];

  pp1Slots.forEach((slot, idx) => {
    const ejercicio = randomElement(DATABASE.SLOTS_DINAMICOS[slot]);
    const opcion = randomElement(ejercicio.Opciones);

    plan.Bloques_Clase.Parte_Principal_Minutos_10_a_40.Primera_Ronda.push({
      Categoria: ppCategories[idx],
      Ejercicio: ejercicio.Ejercicio,
      TIPO: opcion.TIPO || "",
      RESORTE: opcion.RESORTE || "",
      ACCESORIO: opcion.ACCESORIO || "",
      EO: opcion.EO || "",
      V: opcion.V || "",
    });
  });

  // Segunda Ronda PP
  const pp2Slots = ["PP_TI_2", "PP_ZM_2", "PP_TS_2"];

  pp2Slots.forEach((slot, idx) => {
    const ejercicio = randomElement(DATABASE.SLOTS_DINAMICOS[slot]);
    const opcion = randomElement(ejercicio.Opciones);

    plan.Bloques_Clase.Parte_Principal_Minutos_10_a_40.Segunda_Ronda_Minuto_30.push(
      {
        Categoria: ppCategories[idx],
        Ejercicio: ejercicio.Ejercicio,
        TIPO: opcion.TIPO || "",
        RESORTE: opcion.RESORTE || "",
        ACCESORIO: opcion.ACCESORIO || "",
        EO: opcion.EO || "",
        V: opcion.V || "",
      }
    );
  });

  return plan;
}

// Función para renderizar la tabla
function renderizarTabla(plan) {
  const tbody = document.querySelector("#dataTable tbody");
  tbody.innerHTML = "";

  // Setup Inicial
  const setupRow = tbody.insertRow();
  setupRow.className = "section-setup";
  setupRow.innerHTML = `
    <td colspan="2" class="section-title">SETUP INICIAL</td>
  `;

  const setupContentRow = tbody.insertRow();
  setupContentRow.className = "section-setup";
  setupContentRow.innerHTML = `
    <td class="label">Conexión Inicial + Movilidad Articular</td>
    <td>${plan.Bloques_Clase.Setup_Inicial["CONEXION_INICIAL+MOVILIDAD_ARTICULAR"]}</td>
  `;

  // Entrada en Calor
  const ecHeaderRow = tbody.insertRow();
  ecHeaderRow.className = "section-ec";
  ecHeaderRow.innerHTML = `
    <td colspan="2" class="section-title">ENTRADA EN CALOR (0-10 min)</td>
  `;

  plan.Bloques_Clase.ENTRADA_EN_CALOR_Minutos_0_a_10.forEach((ej, i) => {
    const row = tbody.insertRow();
    row.className = "section-ec";
    row.innerHTML = `
      <td class="label">${ej.Categoria} - ${ej.Ejercicio}</td>
      <td>
        <strong>Resorte:</strong> ${ej.RESORTE}<br>
        ${ej.ACCESORIO ? `<strong>Accesorio:</strong> ${ej.ACCESORIO}<br>` : ""}
        <strong>EO:</strong> ${ej.EO}<br>
        <strong>V:</strong> ${ej.V}
      </td>
    `;
  });

  // Primera Ronda
  const pp1HeaderRow = tbody.insertRow();
  pp1HeaderRow.className = "section-pp1";
  pp1HeaderRow.innerHTML = `
    <td colspan="2" class="section-title">PARTE PRINCIPAL - Primera Ronda (10-30 min)</td>
  `;

  plan.Bloques_Clase.Parte_Principal_Minutos_10_a_40.Primera_Ronda.forEach(
    (ej) => {
      const row = tbody.insertRow();
      row.className = "section-pp1";
      row.innerHTML = `
      <td class="label">${ej.Categoria} - ${ej.Ejercicio}</td>
      <td>
        ${ej.TIPO ? `<strong>Tipo:</strong> ${ej.TIPO}<br>` : ""}
        <strong>Resorte:</strong> ${ej.RESORTE}<br>
        ${ej.ACCESORIO ? `<strong>Accesorio:</strong> ${ej.ACCESORIO}<br>` : ""}
        <strong>EO:</strong> ${ej.EO}<br>
        <strong>V:</strong> ${ej.V}
      </td>
    `;
    }
  );

  // Segunda Ronda
  const pp2HeaderRow = tbody.insertRow();
  pp2HeaderRow.className = "section-pp2";
  pp2HeaderRow.innerHTML = `
    <td colspan="2" class="section-title">PARTE PRINCIPAL - Segunda Ronda (30-40 min)</td>
  `;

  plan.Bloques_Clase.Parte_Principal_Minutos_10_a_40.Segunda_Ronda_Minuto_30.forEach(
    (ej) => {
      const row = tbody.insertRow();
      row.className = "section-pp2";
      row.innerHTML = `
      <td class="label">${ej.Categoria} - ${ej.Ejercicio}</td>
      <td>
        ${ej.TIPO ? `<strong>Tipo:</strong> ${ej.TIPO}<br>` : ""}
        <strong>Resorte:</strong> ${ej.RESORTE}<br>
        ${ej.ACCESORIO ? `<strong>Accesorio:</strong> ${ej.ACCESORIO}<br>` : ""}
        <strong>EO:</strong> ${ej.EO}<br>
        <strong>V:</strong> ${ej.V}
      </td>
    `;
    }
  );

  // Cierre Final
  const cierreHeaderRow = tbody.insertRow();
  cierreHeaderRow.className = "section-cierre";
  cierreHeaderRow.innerHTML = `
    <td colspan="2" class="section-title">CIERRE FINAL</td>
  `;

  const cierreContentRow = tbody.insertRow();
  cierreContentRow.className = "section-cierre";
  cierreContentRow.innerHTML = `
    <td class="label">Stretching y Observaciones</td>
    <td>${plan.Bloques_Clase.Cierre_Final.STRETCHING_OBSERVACIONES}</td>
  `;
}

// Función para guardar planificación en localStorage
function guardarPlanificacion(plan) {
  try {
    localStorage.setItem("planificacionPilates", JSON.stringify(plan));
    console.log("Planificación guardada en localStorage");
  } catch (e) {
    console.error("Error al guardar en localStorage:", e);
  }
}

// Función para cargar planificación desde localStorage
function cargarPlanificacion() {
  try {
    const planGuardada = localStorage.getItem("planificacionPilates");
    if (planGuardada) {
      console.log("Planificación cargada desde localStorage");
      return JSON.parse(planGuardada);
    }
  } catch (e) {
    console.error("Error al cargar desde localStorage:", e);
  }
  return null;
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
  const actionButton = document.getElementById("actionButton");

  actionButton.addEventListener("click", function () {
    actionButton.textContent = "Generando...";
    actionButton.disabled = true;

    setTimeout(() => {
      const nuevaPlan = generarPlanificacion();
      guardarPlanificacion(nuevaPlan);
      renderizarTabla(nuevaPlan);
      actionButton.textContent = "Generar Nueva Planificación";
      actionButton.disabled = false;
    }, 300);
  });

  // Intentar cargar planificación guardada o generar una nueva
  const planGuardada = cargarPlanificacion();

  if (planGuardada) {
    renderizarTabla(planGuardada);
    console.log("Mostrando planificación previamente guardada");
  } else {
    const planInicial = generarPlanificacion();
    guardarPlanificacion(planInicial);
    renderizarTabla(planInicial);
    console.log("Generando y guardando nueva planificación inicial");
  }

  console.log("Generador de planificaciones cargado correctamente");
});
