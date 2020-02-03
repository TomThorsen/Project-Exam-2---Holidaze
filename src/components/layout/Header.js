import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar,Nav } from 'react-bootstrap';
import styled from "styled-components"
import Logo from "../img/logo_white.png"

const StyledNav = styled(Nav)`
    width: 100% !important;
    display: flex;
    text-align: center !important;
    justify-content: center;
    float: none;

`
const StyledDiv = styled.div`
    width: 100% !important;
    display: flex;
    justify-content: center !important;
    flex-direction: column;
`
const StyledNavbar = styled(Navbar)`
    background-color: #039CCC !important;
      padding-bottom: 0px !important;
`
const StyledLink = styled(Nav.Link)`
  color: white !important;
  font-size: 34px;

`
const StyledImg = styled.img`
height: 30px;
width: auto;
`


export default () => (
  <StyledNavbar bg="light" expand="lg">
    <StyledDiv>
      <StyledNavbar.Brand href="#home"><StyledImg src={Logo} alt='website logo' /></StyledNavbar.Brand>
      <StyledNavbar.Toggle aria-controls="basic-navbar-nav" />
      <StyledNavbar.Collapse id="basic-navbar-nav">
        <StyledNav className="mr-auto">
          <StyledLink href="#home">Home</StyledLink>
          <StyledLink href="#link">Link</StyledLink>
          <StyledLink href="#link">Link</StyledLink>
        </StyledNav>
      </StyledNavbar.Collapse>
    </StyledDiv>
  </StyledNavbar>
)