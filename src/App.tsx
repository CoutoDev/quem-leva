import { GlobalStyle, Main } from "./AppStyle"
import { AddToListForm } from "./components/AddToListForm"

function App() {

  return (
    <>
      <GlobalStyle />
      <Main>
        <AddToListForm />

        <ul>
          <li>
            <span>Vitor</span>
            <span>Pão</span>
            <button>Editar</button>
            <button>Excluir</button>
          </li>
          <li>
            <span>Joyce</span>
            <span>Refrigerante</span>
            <button>Editar</button>
            <button>Excluir</button>
          </li>
          <li>
            <span>Vitor</span>
            <span>Suco</span>
            <button>Editar</button>
            <button>Excluir</button>
          </li>
        </ul>
      </Main>
    </>
  )
}

export default App
