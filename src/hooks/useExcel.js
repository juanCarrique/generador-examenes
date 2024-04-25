import { useContext } from 'react'
import { ExcelContext } from '../context/excel'

export const useExcel = () => {
  const context = useContext(ExcelContext)

  if (context === undefined) {
    throw new Error('useCart must be used within a excelContext')
  }

  return context
}