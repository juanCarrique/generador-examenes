import { useContext } from 'react'
import { PreguntasContext } from '../context/preguntas'

export const usePreguntas = () => {
  const context = useContext(PreguntasContext)

  if (context === undefined) {
    throw new Error('useCart must be used within a excelContext')
  }

  return context
}
