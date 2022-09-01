import { useRef, useState, memo } from "react"
import { ItemType } from '../../typings/items'
type Props = {
    item: ItemType
    remove: (id: string | number) => void
}

const Item = ({ item, remove }: Props) => {
    const { who, what, id } = item
    const [isEditing, setIsEditing] = useState(false) 
    const [updatedWho, setUpdatedWho] = useState(who) 
    const [updatedWhat, setUpdatedWhat] = useState(what) 
    const whoRef = useRef<HTMLInputElement | null>(null)
    const whatRef = useRef<HTMLInputElement | null>(null)

    return (
        <li>
            {
                isEditing
                ? (
                    <form onSubmit={(event) => event.preventDefault()}>
                        <input type="text" name="who" id="who" ref={whoRef} placeholder={who} />
                        <input type="text" name="what" id="what" ref={whatRef} placeholder={what} />
                        <button onClick={() => {
                            setUpdatedWho(whoRef.current?.value ? whoRef.current?.value : who)
                            setUpdatedWhat(whatRef.current?.value ? whatRef.current?.value : what)
                            setIsEditing(false)
                        }}>Salvar</button>
                        <button onClick={() => setIsEditing(false)}>Cancelar</button>
                    </form>
                )
                : (
                    <div data-testid={`item-id-${id}`}>
                        <span>{updatedWho}</span>
                        <span>{updatedWhat}</span>
                        <button onClick={() => setIsEditing(true)}>Editar</button>
                        <button onClick={() => remove(id)}>Excluir</button>
                    </div>
                )
            }
        </li>
    )
}

export default memo(Item)