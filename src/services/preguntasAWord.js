
import { saveAs } from "file-saver"
import { Document, Packer, Paragraph, SectionType } from "docx"

export function preguntasAWord(cantExam, cantPregPorExam, preguntas){
    

    let examenes = []
    for (let i = 0; i < cantExam; i++) {
        let examen = []
        for (let j = 0; j < cantPregPorExam; j++) {
            let pregunta = preguntas[Math.floor(Math.random() * preguntas.length)]
            if (examen.includes(pregunta)){
                j--
            } else {
                let nuevaPregunta = pregunta
                nuevaPregunta.respuestas = shuffle(nuevaPregunta.respuestas)
                examen.push(nuevaPregunta)
            }
        }
        examenes = [...examenes, { preguntas: examen }]
    } 

    const doc = new Document({
        sections: []
    })

    var child = []

    examenes.forEach((examen)=> {

        examen.preguntas.forEach((pregunta, index)=>{
            child.push(new Paragraph({
                text: (index+1) + ") " + pregunta.pregunta,
                heading: 1,
            }))

            pregunta.respuestas.forEach((respuesta, index)=>{
                child.push(new Paragraph({
                    text: "    " + String.fromCharCode(97 + index) + ") " + respuesta,
                    heading: 2,
                }))
            })
        
        })

        doc.addSection({
            properties: { SectionType: SectionType.NEXT_PAGE },
            children: child,
        })

        child = []
    })
    
    
    Packer.toBlob(doc).then(blob => {
        saveAs(blob, "examenes.docx")
    })

}

const shuffle = (array) => { 
    let newArray = array
    for (let i = newArray.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; 
    } 
    return newArray; 
}

  