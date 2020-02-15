import React from "react"
import styled from "styled-components"
import Icon from "../img/icon_search.png"

const StyledSearchContainer = styled.div`
  display: flex;
  width: 1024px !important;
  justify-content: center;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  @media (max-width: 992px) {
      width: 100% !important;
      padding-top: 84px;
  }

`
const StyledSearch = styled.input`
  width: 700px;
  height: 55px;
  text-align: center;
  font-family: "Open sans", serif;
  font-size: 28px;
  border-color: #FEC406;
  border-style: solid;
  border-width: 3px;
  border-radius: 3px;
  background: url(${Icon}) no-repeat scroll 7px 7px;
  padding-left:30px;
  @media (max-width: 992px) {
    width: 100% !important;
    margin-left: 20px;
    margin-right: 20px;
  }
  @media (max-width: 622px) {
    font-size: 20px;
  }
`

export default () => (
  <StyledSearchContainer>
    <StyledSearch placeholder="Where are you going?"/>
  </StyledSearchContainer>
)