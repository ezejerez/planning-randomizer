import { useEffect, useState } from "react";
import "./App.css";
import dbData from "./data/db.json";
import { usePlanningRandomizer } from "./hooks/usePlanningRandomizer";
import { savePlanning, loadPlanning } from "../utils";
import type { Database, Planificacion, PlanEjercicio } from "./types";

const db = dbData as unknown as Database;

function App() {
  const { planning, setPlanning, generateNewPlanning } =
    usePlanningRandomizer(db);

  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    const savedPlan = loadPlanning();
    if (savedPlan) {
      setPlanning(savedPlan as Planificacion);
    } else {
      handleGenerate();
    }
  }, []);

  const handleGenerate = () => {
    setIsGenerating(true);

    const newPlan = generateNewPlanning();

    savePlanning(newPlan);
    setIsGenerating(false);
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

            <tr className="section-setup">
              <td className="label">Conexión Inicial + Movilidad Articular</td>
              <td>
                {
                  planning.Bloques_Clase.Setup_Inicial[
                    "CONEXION_INICIAL+MOVILIDAD_ARTICULAR"
                  ]
                }
              </td>
            </tr>

            {/* Entrada en Calor */}
            <tr className="section-ec">
              <td colSpan={2} className="section-title">
                ENTRADA EN CALOR (0-10 min)
              </td>
            </tr>

            {planning.Bloques_Clase.ENTRADA_EN_CALOR_Minutos_0_a_10.map(
              (ej: PlanEjercicio, i: number) => (
                <tr key={`ec-${i}`} className="section-ec">
                  <td className="label">
                    {ej.Categoria} - {ej.Ejercicio}
                  </td>
                  <td>
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
                  </td>
                </tr>
              ),
            )}

            {/* Primera Ronda */}
            <tr className="section-pp1">
              <td colSpan={2} className="section-title">
                PARTE PRINCIPAL - Primera Ronda (10-30 min)
              </td>
            </tr>

            {planning.Bloques_Clase.Parte_Principal_Minutos_10_a_40.Primera_Ronda.map(
              (ej: PlanEjercicio, i: number) => (
                <tr key={`pp1-${i}`} className="section-pp1">
                  <td className="label">
                    {ej.Categoria} - {ej.Ejercicio}
                  </td>
                  <td>
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
                  </td>
                </tr>
              ),
            )}

            {/* Segunda Ronda */}
            <tr className="section-pp2">
              <td colSpan={2} className="section-title">
                PARTE PRINCIPAL - Segunda Ronda (30-40 min)
              </td>
            </tr>
            {planning.Bloques_Clase.Parte_Principal_Minutos_10_a_40.Segunda_Ronda_Minuto_30.map(
              (ej: PlanEjercicio, i: number) => (
                <tr key={`pp2-${i}`} className="section-pp2">
                  <td className="label">
                    {ej.Categoria} - {ej.Ejercicio}
                  </td>
                  <td>
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
                  </td>
                </tr>
              ),
            )}

            {/* Cierre Final */}
            <tr className="section-cierre">
              <td colSpan={2} className="section-title">
                CIERRE FINAL
              </td>
            </tr>
            <tr className="section-cierre">
              <td className="label">Stretching y Observaciones</td>
              <td>
                {planning.Bloques_Clase.Cierre_Final.STRETCHING_OBSERVACIONES}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <button
        id="actionButton"
        className="action-btn"
        onClick={handleGenerate}
        disabled={isGenerating}
      >
        {isGenerating ? "Generando..." : "Generar Nueva Planificación"}
      </button>
    </div>
  );
}

export default App;
