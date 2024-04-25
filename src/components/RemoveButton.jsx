import { IconBxTrashAlt } from "./Icons"

export function RemoveButton({ index, remover}) {
    return (
        <button className="removeButton" type="button" onClick={() => remover(index)}> < IconBxTrashAlt /> </button>
    )
}