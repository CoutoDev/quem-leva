import { FormEvent, useContext, useRef } from "react"
import { ItemsContext } from "../../contexts/ItemsContext"
import { StyledForm, StyledFormArticle } from "./styles"
import { v4 as uuid } from 'uuid';
export const AddToListForm = () => {
  const { dispatch, state } = useContext(ItemsContext)
  const whoRef = useRef<HTMLInputElement | null>(null)
  const whatRef = useRef<HTMLInputElement | null>(null)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const formData = [
      ...state.items,
      {
        id: uuid(),
        who: whoRef.current?.value,
        what: whatRef.current?.value
      }
    ]

    dispatch({ type: "ADD_ITEM", payload: formData})
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <h1>Adicione aqui quem vai levar e o que será levado</h1>
        <StyledFormArticle>
          <input type="text" name="who" id="who" ref={whoRef} placeholder="Quem vai levar" />
          <input type="text" name="what" id="what" ref={whatRef} placeholder="O que vai levar" />
          <button type="submit">Adicionar à lista</button>
        </StyledFormArticle>
      </StyledForm>
    </>
  )
}