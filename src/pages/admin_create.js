import React from "react"
import Layout from "../components/layout/Layout"
import AdminMenu from "../components/layout/AdminMenu"
import styled from "styled-components"
import { Row, Col, Input, Form, FormGroup, Label } from "reactstrap"

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
  font-family: "Open sans", serif;
`
const StyledHeader = styled.h1`
  font-family: "Open sans", serif;
  color: white;
  margin-top: 20px;
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
  &::-webkit-input-placeholder {
    color: #707070;
  }
`

const StyledForm = styled(Form)`
  width: 710px;
  position: relative;
  margin-top: 20px;
  padding-bottom: 70px;
    @media (max-width: 992px) {
      width: 100%;
      padding-left: 10px;
      padding-right: 10px;
  }
`
const StyledLabel = styled(Label)`
  color: white;
`
const StyledFormGroup = styled(FormGroup)`

`
const StyledButton = styled.button`
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
  margin-bottom: 20px;
  position: absolute;
  right: 0;
  bottom: 0;
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
const StyledTextInput = styled(StyledInput)`
  min-height: 150px;
`
export default () => (
  <>
    <Layout>
      <AdminMenu/>
      <StyledDiv>
        <StyledHeader>CREATE NEW ESTABLISHMENT</StyledHeader>
        <StyledForm>
          <Row>
            <Col xs="12" sm="6">
              <StyledFormGroup>
                <StyledLabel for="hotelName">Hotel Name</StyledLabel>
                <StyledInput type="text" name="hotelName" id="hotelName" placeholder="HOTEL NAME" />
              </StyledFormGroup>
            </Col>
            <Col xs="12" sm="6">
              <StyledFormGroup>
                <StyledLabel for="hotelStars">Stars</StyledLabel>
                <StyledInput type="select" name="hotelStars" id="hotelStars">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </StyledInput>
              </StyledFormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="6">
              <StyledFormGroup>
                <StyledLabel for="hotelAddress">Address</StyledLabel>
                <StyledInput type="text" name="hotelAddress" id="hotelAddress" placeholder="ADDRESS" />
              </StyledFormGroup>
            </Col>
            <Col xs="12" sm="6">
              <StyledFormGroup>
                <StyledLabel for="hotelPostalNumber">Post Number</StyledLabel>
                <StyledInput type="number" name="hotelPostalNumber" id="hotelPostalNumber" placeholder="POST NUMBER" />
              </StyledFormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="6">
              <StyledFormGroup>
                <StyledLabel for="hotelImgUrl">Image URL</StyledLabel>
                <StyledInput type="text" name="hotelImgUrl" id="hotelImgUrl" placeholder="Image URL" />
              </StyledFormGroup>
            </Col>
            <Col xs="12" sm="6">
              <FormGroup>
                <StyledLabel for="hotelGuestRating">Guest Rating</StyledLabel>
                <StyledInput type="number" min="0" max="100" id="hotelGuestRating" name="hotelGuestRating" placeholder="0-100" />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="12" sm="12">
              <StyledFormGroup>
                <StyledLabel for="hotelDescription">Description</StyledLabel>
                <StyledTextInput type="textarea" name="hotelDescription" id="hotelDescription" placeholder="Write your description here..." />
              </StyledFormGroup>
            </Col>
          </Row>
          <StyledButton>CREATE</StyledButton>
        </StyledForm>
      </StyledDiv>
    </Layout>
  </>
)
