import { createContext, useState } from 'react'

export const PreguntasContext = createContext()

export const PreguntasProvider = ({ children }) => {

  const [preguntas, setPreguntas] = useState([])

  const agregarPregunta = () => {
    setPreguntas([...preguntas, { pregunta: '', respuestas: [''] }])
  }


  const agregarRespuesta = (index) => {
      const nuevasPreguntas = [...preguntas]
      nuevasPreguntas[index].respuestas.push('')
      setPreguntas(nuevasPreguntas)
  }

  const handlePreguntaChange = (e, index) => {
      const nuevasPreguntas = [...preguntas]
      nuevasPreguntas[index].pregunta = e.target.value
      if (e.target.value === '') {
        e.target.classList.add('formError')
      }
      else {
        e.target.classList.remove('formError')
       
      }
      setPreguntas(nuevasPreguntas)        
  }

  const handleRespuestaChange = (e, preguntaIndex, respuestaIndex) => {
      const nuevasPreguntas = [...preguntas]
      nuevasPreguntas[preguntaIndex].respuestas[respuestaIndex] = e.target.value
      if (e.target.value === '') {
        e.target.classList.add('formError')
      }
      else {
        e.target.classList.remove('formError')
      }
      {setPreguntas(nuevasPreguntas)}
  }

  const removerPregunta = (index) => {
      const nuevasPreguntas = [...preguntas]
      nuevasPreguntas.splice(index, 1)
      setPreguntas(nuevasPreguntas)
  }

  const removerRespuesta = (preguntaIndex, respuestaIndex) => {
      const nuevasPreguntas = [...preguntas]
      nuevasPreguntas[preguntaIndex].respuestas.splice(respuestaIndex, 1)
      setPreguntas(nuevasPreguntas)
  }

  const preguntasOk = () => {
    return preguntas.find((element) => element.pregunta === '') === undefined && preguntas.length > 0 && respuestasOk()
  }

  const respuestasOk = () => {
    let respuestas = true
    preguntas.forEach((element) => {
      if (element.respuestas.find((element) => element === '') !== undefined || element.respuestas.length === 0) {
        respuestas = false
      }
    })
    return respuestas
  }

  return (
    <PreguntasContext.Provider value={{ preguntas, setPreguntas, preguntasOk, agregarPregunta, agregarRespuesta, handlePreguntaChange, handleRespuestaChange, removerPregunta, removerRespuesta }}>
      {children}
    </PreguntasContext.Provider>
  )
}
