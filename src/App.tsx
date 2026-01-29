import { useEffect, useState } from "react";
import "./App.css";
import dbData from "./data/db.json";
import { usePlanningRandomizer } from "./hooks/usePlanningRandomizer";
import { savePlanning, loadPlanning } from "../utils";
import { PlanRow } from "./components/PlanRow";

const db = dbData;

function App() {
  const {
    planning,
    setPlanning,
    generateNewPlanning,
    selectedSlot,
    toggleSelection,
    regenerateSelectedSlot,
  } = usePlanningRandomizer(db);
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const savedPlan = loadPlanning();
    if (savedPlan) {
      setPlanning(savedPlan);
    } else {
      generateNewPlanning(); // Initial generation
    }
  }, []);

  // Auto-save whenever planning changes
  useEffect(() => {
    if (planning) {
      savePlanning(planning);
    }
  }, [planning]);

  const handleMainAction = () => {
    if (selectedSlot) {
      regenerateSelectedSlot();
    } else {
      setIsGenerating(true);
      generateNewPlanning();
      setIsGenerating(false);
    }
  };

  if (!planning)
    return (
      <div className="container">
        <h1>Cargando...</h1>
      </div>
    );

  return (
    <div className="container">
      <h1>Planning Randomizer</h1>

      <div className="table-wrapper">
        <table id="dataTable">
          <tbody>
            {/* Setup Inicial */}
            <tr className="section-setup">
              <td colSpan={2} className="section-title">
                SETUP INICIAL
              </td>
            </tr>

            <PlanRow
              baseClass="section-setup"
              label="Conexión Inicial + Movilidad Articular"
              details={
                planning.Bloques_Clase.Setup_Inicial[
                  "CONEXION_INICIAL+MOVILIDAD_ARTICULAR"
                ]
              }
              isSelected={
                selectedSlot?.block === "SETUP" && selectedSlot?.index === 0
              }
              onLongPress={() => toggleSelection("SETUP", 0)}
            />

            {/* Entrada en Calor */}
            <tr className="section-ec">
              <td colSpan={2} className="section-title">
                ENTRADA EN CALOR (0-10 min)
              </td>
            </tr>

            {planning.Bloques_Clase.ENTRADA_EN_CALOR_Minutos_0_a_10.map(
              (ej, i) => (
                <PlanRow
                  key={`ec-${i}`}
                  baseClass="section-ec"
                  label={`${ej.Categoria} - ${ej.Ejercicio}`}
                  details={
                    <>
                      <strong>Resorte:</strong> {ej.RESORTE}
                      <br />
                      {ej.ACCESORIO && (
                        <>
                          <strong>Accesorio:</strong> {ej.ACCESORIO}
                          <br />
                        </>
                      )}
                      <strong>EO:</strong> {ej.EO}
                      <br />
                      <strong>V:</strong> {ej.V}
                    </>
                  }
                  isSelected={
                    selectedSlot?.block === "EC" && selectedSlot?.index === i
                  }
                  onLongPress={() => toggleSelection("EC", i)}
                />
              ),
            )}

            {/* Primera Ronda */}
            <tr className="section-pp1">
              <td colSpan={2} className="section-title">
                PARTE PRINCIPAL - Primera Ronda (10-30 min)
              </td>
            </tr>

            {planning.Bloques_Clase.Parte_Principal_Minutos_10_a_40.Primera_Ronda.map(
              (ej, i) => (
                <PlanRow
                  key={`pp1-${i}`}
                  baseClass="section-pp1"
                  label={`${ej.Categoria} - ${ej.Ejercicio}`}
                  details={
                    <>
                      {ej.TIPO && (
                        <>
                          <strong>Tipo:</strong> {ej.TIPO}
                          <br />
                        </>
                      )}
                      <strong>Resorte:</strong> {ej.RESORTE}
                      <br />
                      {ej.ACCESORIO && (
                        <>
                          <strong>Accesorio:</strong> {ej.ACCESORIO}
                          <br />
                        </>
                      )}
                      <strong>EO:</strong> {ej.EO}
                      <br />
                      <strong>V:</strong> {ej.V}
                    </>
                  }
                  isSelected={
                    selectedSlot?.block === "PP1" && selectedSlot?.index === i
                  }
                  onLongPress={() => toggleSelection("PP1", i)}
                />
              ),
            )}

            {/* Segunda Ronda */}
            <tr className="section-pp2">
              <td colSpan={2} className="section-title">
                PARTE PRINCIPAL - Segunda Ronda (30-40 min)
              </td>
            </tr>
            {planning.Bloques_Clase.Parte_Principal_Minutos_10_a_40.Segunda_Ronda_Minuto_30.map(
              (ej, i) => (
                <PlanRow
                  key={`pp2-${i}`}
                  baseClass="section-pp2"
                  label={`${ej.Categoria} - ${ej.Ejercicio}`}
                  details={
                    <>
                      {ej.TIPO && (
                        <>
                          <strong>Tipo:</strong> {ej.TIPO}
                          <br />
                        </>
                      )}
                      <strong>Resorte:</strong> {ej.RESORTE}
                      <br />
                      {ej.ACCESORIO && (
                        <>
                          <strong>Accesorio:</strong> {ej.ACCESORIO}
                          <br />
                        </>
                      )}
                      <strong>EO:</strong> {ej.EO}
                      <br />
                      <strong>V:</strong> {ej.V}
                    </>
                  }
                  isSelected={
                    selectedSlot?.block === "PP2" && selectedSlot?.index === i
                  }
                  onLongPress={() => toggleSelection("PP2", i)}
                />
              ),
            )}

            {/* Cierre Final */}
            <tr className="section-cierre">
              <td colSpan={2} className="section-title">
                CIERRE FINAL
              </td>
            </tr>
            <PlanRow
              baseClass="section-cierre"
              label="Stretching y Observaciones"
              details={
                planning.Bloques_Clase.Cierre_Final.STRETCHING_OBSERVACIONES
              }
              isSelected={
                selectedSlot?.block === "CIERRE" && selectedSlot?.index === 0
              }
              onLongPress={() => toggleSelection("CIERRE", 0)}
            />
          </tbody>
        </table>
      </div>

      <button
        id="actionButton"
        className={`action-btn ${selectedSlot ? "variant-mode" : ""}`}
        onClick={handleMainAction}
        disabled={isGenerating}
      >
        {isGenerating
          ? "Procesando..."
          : selectedSlot
            ? "Generar Variante"
            : "Generar Nueva Planificación"}
      </button>
    </div>
  );
}

export default App;
