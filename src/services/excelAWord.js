import readXlsxFile from 'read-excel-file'

export function excelAWord(cantExam, cantPregPorExam, excel){
    return new Promise((resolve, reject) => {
        var preguntas = []

        readXlsxFile(excel).then((rows) => {
            if (rows.length < cantPregPorExam) {
                resolve(false)
            } else {
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
                resolve(preguntas)
            }
        }).catch(error => {
            reject(error)
        })
    })
}
