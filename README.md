# Generador de exámenes
_Para generar todos los exámenes que necesites a partir de una base de preguntas en un archivo Excel o escribiéndolas a mano._

### A Raíz del siguiente tweet:
<a href="https://twitter.com/Tia_MaGui/status/1781833877612318753" target="_blank">
  <img src="https://github.com/juanCarrique/generador-examenes/assets/102698445/de117a3b-dc06-494a-a347-f01554889191" alt="tweet" width="500"/>
</a>

### ¡Subi un archivo Excel!
![image](https://github.com/juanCarrique/generador-examenes/assets/102698445/89d2e938-d209-46fc-8054-b6457c8f2a3d)
> 🚨 Los archivos excel deben poseer el siguiente formato:  
> * Cada pregunta debe estar ubicada en una celda de la columna A, comenzando desde la celda A1 y continuando en las siguientes celdas de la columna A (A2, A3, ...).
> * Las respuestas a cada pregunta deben estar ubicadas en las columnas subsecuentes (B, C, ...).

#### Ejemplo del formato que debe poseer el archivo Excel:

| Pregunta                                   | Opción A            | Opción B                | Opción C          |
|--------------------------------------------|---------------------|-------------------------|-------------------|
| ¿Cuál es la capital de Francia?            | París               | Madrid                  | Berlín            |
| ¿Quién escribió "Don Quijote de la Mancha"?| Miguel de Cervantes | Gabriel García Márquez | William Shakespeare |

> **Nota:** Es importante asegurarse de que las preguntas y respuestas estén correctamente alineadas en el archivo Excel para que el programa pueda procesar los datos de manera adecuada.
### ¡O escribilas a mano!
![image](https://github.com/juanCarrique/generador-examenes/assets/102698445/ccb49ee9-1f98-45d9-9038-625b989afe30)

### ¿Cómo funciona?
Una vez que hayas elegido la cantidad de exámenes que se quieren generen, la cantidad de preguntas que se quiere en cada examen y se haya cargado la base de preguntas y respuestas (tanto en un archivo Excel, como a mano), se apreta el botón **_Generar exámenes** y se generan la cantidad de exámenes pedidos, variando las preguntas de cada examen (en caso de haber más preguntas en la base que preguntas que se pidieron para cada examen) y variando el orden de las respuestas de cada pregunta.

>**Importante:** no se pueden pedir más preguntas por examen que la cantidad de preguntas que haya en la base.

---
### Notas
* Por ahora el orden de las respuestas se mezcla una sola vez, por lo cual, si la misma pregunta aparece en dos exámenes distintos, el orden de sus respuestas, serán iguales.
* _Claramente_ se podría mejorar la parte estética de la aplicación.


[image]:https://github.com/juanCarrique/generador-examenes/assets/102698445/de117a3b-dc06-494a-a347-f01554889191
