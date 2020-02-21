import React from "react"
import Layout from "../components/layout/Layout"
import styled from "styled-components"
import StyledSearch from "../components/assets/StyledSearch"
import { Row, Col, Input, Form, FormGroup } from "reactstrap"
import { Link } from "gatsby"

const StyledDiv = styled.div`
  display: flex;
  width: 1024px;
  justify-content: center;
  background-color: #4C91B7;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  @media (max-width: 992px) {
      width: 100%;
  }
  padding-bottom: 50px;
  padding-top: 50px;
`
const StyledHeader = styled.h1`
  font-family: "Open sans", serif;
  color: white;
  margin-top: 0px;
  @media (max-width: 622px) {
    font-size: 28px;
  }
`
const StyledInput = styled(Input)`
  font-family: "Open sans", serif;
  border-style: solid;
  border-color: #FEC406;
  border-width: 3px;
  color: #707070;
  margin-top: 10px;
  &::-webkit-input-placeholder {
    color: #707070;
  }
`
const StyledForm = styled(Form)`
  width: 410px;
    max-width: 410px;
  position: relative;
  padding-bottom: 20px;
    @media (max-width: 992px) {
      width: 100%;
      padding-left: 10px;
      padding-right: 10px;
  }
`
const StyledFormGroup = styled(FormGroup)`
  margin:0;
  margin-bottom: 0px;
`
const StyledButton = styled(Link)`
  font-family: "Open sans", serif;
  box-shadow: 1px 1px 2px black;
  background-color: #64B362;
  border: solid;
  border-width: 2px;
  border-color: #FEC406;
  border-radius: 3px;
  color: white;
  padding: 0px 15px;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #36B2A6;
    text-decoration: none;
    color: white;
    box-shadow: 0px 0px black;
  }
  @media (max-width: 992px) {
    margin-right: 10px;
  }
`
export default () => (
  <>
    <Layout>
      <StyledSearch/>
      <StyledDiv>
        <StyledHeader>LOG IN</StyledHeader>
        <StyledForm>
          <Row>
            <Col xs="12" sm="12">
              <StyledFormGroup>
                <StyledInput type="text" name="username" id="username" placeholder="USERNAME" />
              </StyledFormGroup>
            </Col>
            <Col xs="12" sm="12">
              <StyledFormGroup>
                <StyledInput type="password" name="password" id="password" placeholder="PASSWORD" />
              </StyledFormGroup>
            </Col>
          </Row>
        </StyledForm>
        <StyledButton to="/admin_enquiries/">LOG IN</StyledButton>
      </StyledDiv>
    </Layout>
  </>
)
