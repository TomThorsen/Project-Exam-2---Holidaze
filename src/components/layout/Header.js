import React from "react"
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar,Nav } from 'react-bootstrap';
import styled from "styled-components"
import Logo from "../img/logo_white.png"
import StyledButton from "../assets/StyledButton"
import { Link } from "gatsby"

const StyledNav = styled(Nav)`
  margin: 0;
  padding: 0;
      @media (max-width: 992px) {
      align-items: center;
  }
`
const StyledContainer = styled.div`
  display: flex;
  width: 1024px !important;
  justify-content: space-between;
    @media (max-width: 992px) {
      flex-direction: column !important;
      width: 100% !important;
  }
`
const StyledDiv = styled.div`
 
`
const StyledButtonDiv = styled.div`
    margin-bottom: 15px;
    @media (max-width: 992px) {
    display:flex;
     flex: none !important;
      flex-direction: column !important;
      align-items: center;
      margin-bottom: 20px;
  }
`
const StyledNavbar = styled(Navbar)`
  background-color: #039CCC !important;
  padding-bottom: 0px !important;
  justify-content: center !important;
  margin: 0;
  padding: 0;
      @media (max-width: 992px) {
      flex-direction: column !important;
  }
`
const StyledLink = styled(Link)`
  color: white !important;
  font-size: 30px;
  font-family: "Open sans", serif;
  margin: 0;
  padding: 0 !important;
  padding-right: 50px !important;
    &:hover {
    color: #FEC406 !important;
    text-decoration: none !important;
  }
  @media (max-width: 992px) {
    padding-right: 0px !important;
    padding-top: 20px;
  }
`
const StyledImg = styled.img`
  height: 30px;
  width: auto;
  margin-bottom: 5px;
  margin-left: 2px;
  margin-top: 10px;
  @media (max-width: 992px) {
   margin-left: 20px;
  }
    @media (max-width: 310px) {
  height: 20px;
  }
`
const StyledToogle = styled(Navbar.Toggle)`
    float: right;
    margin: 13px;
    border: none;
`
const StyledCollapse = styled(Navbar.Collapse)`
    width: 1024px;
    display: flex;
    justify-content: space-between;
    @media (max-width: 992px) {
      width: 100%;
      justify-content: center !important;
      flex-direction: column !important;
    }
`

export default () => (
  <StyledNavbar expand="lg">
    <StyledContainer>
      <StyledDiv>
        <StyledNavbar.Brand href="#home"><StyledImg src={Logo} alt='website logo' /></StyledNavbar.Brand>
        <StyledToogle aria-controls="basic-navbar-nav" />
        <StyledCollapse id="basic-navbar-nav">
            <StyledNav>
              <StyledLink to="/">HOME</StyledLink>
              <StyledLink to="/hotels/">HOTELS</StyledLink>
              <StyledLink to="/contact/">CONTACT</StyledLink>
              <StyledLink to="/about/">ABOUT</StyledLink>
            </StyledNav>
          <StyledButtonDiv>
            <StyledButton text="REGISTER" page="/about/"/>
            <StyledButton text="LOG IN" page="/hotels/"/>
          </StyledButtonDiv>
        </StyledCollapse>
      </StyledDiv>
    </StyledContainer>
  </StyledNavbar>

)