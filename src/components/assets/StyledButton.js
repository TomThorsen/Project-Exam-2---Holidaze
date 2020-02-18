import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledButton = styled(Link)`
  font-family: "Open sans", serif;
  box-shadow: 1px 1px 2px black;
  background-color: ${props => props.inverted ? "#039CCC" : "#4C91B7"};
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
    background-color: ${props => props.inverted ? '#4C91B7' : '#039CCC'};
    text-decoration: none !important;
    color: white;
    box-shadow: 0px 0px black;
  }
  @media (max-width: 992px) {
    margin-left: 0px !important;
  }
`

function ButtonRender (props) {
  if (props.inverted) {
    return (
      <StyledButton inverted to={props.page}>
        {props.text}
      </StyledButton>
    )
  } else {
    return (
      <StyledButton to={props.page}>
        {props.text}
      </StyledButton>
    )
  }
}

export default ButtonRender
