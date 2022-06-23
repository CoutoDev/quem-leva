import { createContext, Dispatch, ReactNode, useReducer } from 'react';
import { items as fetchedItems } from '../services/itemsApi'
import { Items as ItemsType } from '../typings/items'

type ItemsState = typeof initialState;
type Action = {
    type: 'ADD_ITEM' | 'REMOVE_ITEM'
    payload: ItemsType
}

interface ChildrenElementProps {
    children: ReactNode
}

const initialState = {
    items: fetchedItems
}

const reducer = (state: ItemsState, action: Action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return {
            ...state,
            items: action.payload
        };
      case 'REMOVE_ITEM':
        return {
            items: action.payload
        }
      default:
        throw new Error();
    }
  }

export const ItemsContext = createContext<{
    state: ItemsState;
    dispatch: Dispatch<Action>;
}>({
    state: initialState,
    dispatch: () => {}
});


const ItemsProvider = ({ children }: ChildrenElementProps) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <ItemsContext.Provider value={{ state, dispatch }}>
            { children }
        </ItemsContext.Provider>
    )
}

export default ItemsProvider