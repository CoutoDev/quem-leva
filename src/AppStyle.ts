import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-size: 1rem;
    margin: 0;
    padding: 0;
  }
`

export const Main = styled.section`
    align-items: start;
    background-color: #100828;
    color: #dddddd;
    display: grid;
    gap: 2rem;
    grid-template-rows: 0.1fr 1fr;
    height: 100vh;
    justify-content: center;
    padding: 20px 0;
`