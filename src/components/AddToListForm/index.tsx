import { FormEvent } from "react"
import { StyledForm, StyledFormArticle } from "./styles"

export const AddToListForm = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <h1>Adicione aqui quem vai levar e o que será levado</h1>
        <StyledFormArticle>
          <input type="text" name="who" id="who" placeholder="Quem vai levar" />
          <input type="text" name="what" id="what" placeholder="O que vai levar" />
          <button>+</button>
        </StyledFormArticle>
        <button type="submit">Adicionar à lista</button>
      </StyledForm>
    </>
  )
}