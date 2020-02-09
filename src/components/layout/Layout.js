import React from "react"
import Header from "./Header"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme === "purple" ? "purple" : "white")};
  }
`


export default ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
)