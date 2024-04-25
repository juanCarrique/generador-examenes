import { IconBxTrashAlt } from "./Icons"

export function RemoveAnswerButton({ index, remover, respuestaIndex}) {
    return (
        <button className="removeButton" type="button" onClick={() => remover(index, respuestaIndex)}> < IconBxTrashAlt /> </button>
    )
}