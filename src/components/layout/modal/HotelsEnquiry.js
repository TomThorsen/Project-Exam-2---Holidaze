import React, { useState } from 'react';
import { Modal, ModalFooter, Container, Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from "styled-components"

const StyledContainer = styled.div`

`
const StyledButton = styled.button`
  font-family: "Open sans", serif;
  box-shadow: 1px 1px 2px black;
  background-color: #039CCC;
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
  cursor: pointer;
  &:hover {
    background-color: #4C91B7;
    text-decoration: none !important;
    color: white;
    box-shadow: 0px 0px black;
  }
  @media (max-width: 992px) {
    margin-left: 0px !important;
  }
`
const StyledSubmitButton = styled(StyledButton)`
  font-size: 20px;
  background-color: #64B362;
  &:hover {
    background-color: #36B2A6;
  }
`
const StyledCancelButton = styled(StyledButton)`
  font-size: 20px;
  background-color: #4C91B7;
  &:hover {
    background-color: #D5174E;
  }
`
const StyledOpenModalButton = styled(StyledButton)`
  position:absolute;
  bottom: 0px;
  right: 0px;
`
const StyledModal = styled(Modal)`
  box-shadow: 3px 3px 3px black;

`
const StyledModalHeader = styled.h1`
  background-color: #039CCC;
  border-style: none;
  font-family: "Open sans", serif;
  color: white;
  font-size: 33px;
  margin: 0;
  padding-top: 20px;
  text-align: center;

`
const StyledModalBody = styled(Container)`
  background-color: #039CCC;
`
const StyledModalFooter = styled(ModalFooter)`
  background-color: #039CCC;
  border-style: none;
`
const StyledLabel = styled(Label)`
  color: white;
  font-family: "Open sans", serif;
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
const StyledTextInput = styled(StyledInput)`
  min-height: 160px;
`
const StyledForm = styled(Form)`
margin-top: 30px;
`
const StyledFormGroup = styled(FormGroup)`
margin:0;
margin-bottom: 5px;
`

const HotelsModal = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <StyledContainer>
      <StyledOpenModalButton onClick={toggle}>Send Enquiry</StyledOpenModalButton>
      <StyledModal isOpen={modal} size="lg" toggle={toggle} className={className}>
        <StyledModalHeader text="center" toggle={toggle}>SEND BOOKING ENQUIRY</StyledModalHeader>
        <StyledModalBody>
          <StyledForm>
              <Row>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="fromDate">FROM DATE</StyledLabel>
                    <StyledInput type="date" name="fromDate" id="fromDate" placeholder="FROM DATE" />
                  </StyledFormGroup>
                </Col>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="toDate">TO DATE</StyledLabel>
                    <StyledInput type="date" name="toDate" id="toDate" placeholder="password placeholder" />
                  </StyledFormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="firstName"></StyledLabel>
                    <StyledInput type="text" name="firstName" id="firstName" placeholder="FIRST NAME" />
                  </StyledFormGroup>
                </Col>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="lastName"></StyledLabel>
                    <StyledInput type="text" name="lastName" id="lastName" placeholder="LAST NAME" />
                  </StyledFormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="emailAddress"></StyledLabel>
                    <StyledInput type="email" name="emailAddress" id="emailAddress" placeholder="EMAIL" />
                  </StyledFormGroup>
                </Col>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="phoneNumber"></StyledLabel>
                    <StyledInput type="number" name="phoneNumber" id="phoneNumber" placeholder="PHONE NUMBER" />
                  </StyledFormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="homeAddress"></StyledLabel>
                    <StyledInput type="text" name="homeAddress" id="homeAddress" placeholder="ADDRESS" />
                  </StyledFormGroup>
                </Col>
                <Col xs="12" sm="6">
                  <StyledFormGroup>
                    <StyledLabel for="postNumber"></StyledLabel>
                    <StyledInput type="number" name="postNumber" id="postNumber" placeholder="POST NUMBER" />
                  </StyledFormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="12">
                  <StyledFormGroup>
                    <StyledLabel for="textMessage"></StyledLabel>
                    <StyledTextInput type="textarea" name="textMessage" id="textMessage" placeholder="Write your message here..." />
                  </StyledFormGroup>
                </Col>
              </Row>
          </StyledForm>
        </StyledModalBody>
        <StyledModalFooter>
          <StyledSubmitButton onClick={toggle}>SUBMIT</StyledSubmitButton>{' '}
          <StyledCancelButton onClick={toggle}>CANCEL</StyledCancelButton>
        </StyledModalFooter>
      </StyledModal>
    </StyledContainer>
  );
}

export default HotelsModal;