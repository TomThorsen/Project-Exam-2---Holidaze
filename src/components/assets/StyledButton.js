import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledButton = styled(Link)`
  font-family: "Open sans", serif;
  background-color: #4C91B7;
  border: solid;
  border-width: 2px;
  border-color: #FEC406;
  border-radius: 3px;
  color: white;
  padding: 0px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 15px;
  cursor: pointer;
      &:hover {
    background-color: #039CCC !important;
    text-decoration: none !important;
      color: white;
  }
      @media (max-width: 992px) {
        margin-left: 0px !important;
  }
`

export default (props) => (
  <StyledButton to={props.page}>
    {props.text}
  </StyledButton>
)