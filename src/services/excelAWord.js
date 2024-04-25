import readXlsxFile from 'read-excel-file'
import { preguntasAWord } from './preguntasAWord'

export function excelAWord(cantExam, cantPregPorExam, excel){

    var preguntas = []

    readXlsxFile(excel).then((rows) => {
        rows.forEach((row, pregIndex) => {
            row.forEach((cell, cellIdex) => {
                if (cellIdex === 0){
                    preguntas = [...preguntas, { pregunta: cell, respuestas: [] }]
                } else {
                    if (cell !== null && cell !== undefined && cell !== ""){
                        preguntas[pregIndex].respuestas.push(cell)
                    }
                }
            })
        })
        preguntasAWord(cantExam, cantPregPorExam, preguntas)
    })

}