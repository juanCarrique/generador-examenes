import { createContext, useState } from 'react'

export const ExcelContext = createContext()

export const ExcelProvider = ({ children }) => {
  const [excel, setExcel] = useState(null)

  const handleFileChange = (event) => {
    setExcel(event.target.files[0])
  }

  return (
    <ExcelContext.Provider value={{ excel, setExcel, handleFileChange }}>
      {children}
    </ExcelContext.Provider>
  )
}