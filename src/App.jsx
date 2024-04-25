import { useState } from 'react'
import './App.css'
import ExcelUploader from './components/ExcelUploader'
import ManualUploader from './components/ManualUploader'
import { usePreguntas } from './hooks/usePreguntas'
import { useExcel } from './hooks/useExcel'
import { preguntasAWord } from './services/preguntasAWord'
import { excelAWord } from './services/excelAWord'
import { useEffect } from 'react'


function App() {

  const [opcionElegida, setOpcionElegida] = useState('')
  const [cantExam, setCantExam] = useState(1)
  const [cantPregPorExam, setCantPregPorExam] = useState(1)
  const { preguntas, preguntasOk, setPreguntas } = usePreguntas()
  const { excel, setExcel } = useExcel()
  const [botonDesabilitado, setBotonDesabilitado] = useState(false)

  useEffect(() => {
    //TODO no puede haber menos preguntas q cantPregPorExam
    if (((preguntasOk()) && cantPregPorExam<=Object.keys(preguntas).length)|| excel !== null) {
      setBotonDesabilitado(false)
    } else {
      setBotonDesabilitado(true)
    }
  }, [cantPregPorExam, preguntas, preguntasOk, excel])

  useEffect(() => {
    if (opcionElegida === 'manual'){
      setExcel(null)
      setPreguntas([])
    } else {
      setPreguntas([])
    }
    setBotonDesabilitado(true)
  }, [opcionElegida])

  const handleClick = (event) => {
    if (event.target.classList.contains('selected')) {
      event.target.classList.remove('selected')
      setOpcionElegida('')
    } else {
      event.target.classList.add('selected')
      if (event.target.id === 'excel-button') {
        document.getElementById('manual-button').classList.remove('selected')
        setOpcionElegida('excel')
      } else {
        document.getElementById('excel-button').classList.remove('selected')
        setOpcionElegida('manual')
      }
    }
  }
 

  const handleChangeCantExam = (event) => {
    setCantExam(event.target.value)
  }
  const handleChangeCantPreg = (event) => {
    setCantPregPorExam(event.target.value)
  }
  
  const generarExamenes = () => {

    if (opcionElegida === 'manual') {
      if(preguntasOk()) {
        preguntasAWord(cantExam, cantPregPorExam, preguntas)
      }
    }
    else if (opcionElegida === 'excel') {
      excelAWord(cantExam, cantPregPorExam, excel)
    }
    
  }

  return (
    <>
      <div>
       <h1>Generador de exámenes</h1>
      </div>
      <div className='generadorForm' >
        <div className='cantidades' >
          <div id='opcionesIniciales'>
            <button id='excel-button' className='botonSeleccion' onClick={handleClick}>Subir Excel</button>
            <button id='manual-button' className='botonSeleccion' onClick={handleClick}>Escribir preguntas manualmente</button>
          </div>
          <label htmlFor="cant-exam">Cantidad de examenes:</label>
          <input className="numInput" type="number" id='cant-exam' value={cantExam} onChange={handleChangeCantExam} placeholder='500 ...' min={1}/>
          <label htmlFor="cant-preg-por-exam">Cantidad de preguntas por examen:</label>
          <input className="numInput" type="number" id='cant-preg-por-exam' value={cantPregPorExam} onChange={handleChangeCantPreg} placeholder='10 ...' min={1}/>
        </div>
        {opcionElegida !== '' && 
        <form id='examForm'>
          <div>
          {opcionElegida === 'excel' && <ExcelUploader />}
          {opcionElegida === 'manual' && <ManualUploader />}
          </div>
          <div className='submitContainer' >
            <button disabled={botonDesabilitado} id='submitButton' type='button' onClick={generarExamenes}>Generar examenes</button>
            {botonDesabilitado && opcionElegida === 'manual' && <p className='errorText'>Todas las preguntas y respuestas deben estar completas</p>}
            {botonDesabilitado && opcionElegida === 'excel' && <p className='errorText'>Debes seleccionar un archivo</p>}
          </div>
        </form>
        }
      </div>
      
    </>
  )
}

export default App
