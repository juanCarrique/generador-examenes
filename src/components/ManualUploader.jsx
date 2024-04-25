import { usePreguntas } from "../hooks/usePreguntas"
import { RemoveAnswerButton } from "./RemoveAnswerButton"
import { RemoveButton } from "./RemoveButton"

const ManualUploader = () => {

    const { preguntas, agregarPregunta, agregarRespuesta, handleRespuestaChange, handlePreguntaChange, removerPregunta, removerRespuesta } = usePreguntas()


    return (
        <>
            <h3>Preguntas y respuestas:</h3>
            {preguntas.map((pregunta, index) => (
                <div className="preguntasManual" key={index}>
                  <div className="pregRespContainer" >
                    <input
                    type="text"
                    value={pregunta.pregunta}
                    onChange={(e) => handlePreguntaChange(e, index)}
                    placeholder="Escribe tu pregunta"
                    />
                    < RemoveButton index={index} remover={removerPregunta} />
                  </div>
               
                {pregunta.respuestas.map((respuesta, respuestaIndex) => (
                    <div className="pregRespContainer" key={respuestaIndex}>
                      <input
                      key={respuestaIndex}
                      type="text"
                      value={respuesta}
                      onChange={(e) => handleRespuestaChange(e, index, respuestaIndex)}
                      placeholder="Escribe tu respuesta"
                      />
                      <RemoveAnswerButton index={index} respuestaIndex={respuestaIndex} remover={removerRespuesta} />
                    </div>
                ))}
                <button type="button" onClick={() => agregarRespuesta(index)}>Agregar Respuesta</button>
                <hr></hr>
              </div>
            ))}
            <button type="button" onClick={agregarPregunta}>Agregar Pregunta</button>
        </>
      )
}

export default ManualUploader;