import { Item } from "../Item"
import { useContext } from "react"
import { ItemsContext } from "../../contexts/ItemsContext"

export const ItemsList = () => {
    const { state, dispatch } = useContext(ItemsContext)

    const handleRemove = (id: string | number) => {
        const newItems = state.items.filter((item) => item.id !== id);
        dispatch({ type: "REMOVE_ITEM", payload: newItems })
    }

    return (
        <>
             <ul>
                {state.items.map(({who, what, id}) => (
                    <Item item={{who, what, id}} key={id} remove={handleRemove}/>
                ))}
            </ul>
        </>
    )
}