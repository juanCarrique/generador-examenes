import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { PreguntasProvider } from './context/preguntas'
import { ExcelProvider } from './context/excel.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PreguntasProvider>
      <ExcelProvider>
        <App />
      </ExcelProvider>
    </PreguntasProvider>
  </React.StrictMode>,
)
