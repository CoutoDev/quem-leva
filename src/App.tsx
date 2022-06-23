import { GlobalStyle, Main } from "./AppStyle"
import { AddToListForm } from "./components/AddToListForm"
import { ItemsList } from "./components/ItemsList"
import ItemsProvider from "./contexts/ItemsContext"

function App() {

  return (
    <>
      <GlobalStyle />
      <Main>
        <ItemsProvider>
          <AddToListForm />

          <ItemsList />
        </ItemsProvider>
      </Main>
    </>
  )
}

export default App
