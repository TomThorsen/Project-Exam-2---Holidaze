import React, { useState } from "react"
import Layout from "../components/layout/Layout"
import styled from "styled-components"
import AdminMenu from "../components/layout/AdminMenu"
import { Col, Container, Form, FormGroup, Input, Label, Modal, ModalFooter, Row, Table } from "reactstrap"

const StyledDiv = styled.div`
  font-family: "Open sans", serif;
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
  padding-bottom: 0px;
  padding-top: 0px;
`
const StyledTable = styled(Table)`
  color:white;
  text-align: center;
  margin-bottom: 0;
`
const StyledTH = styled.th`
  padding-bottom: 0px !important;
  padding-top: 5px !important;
`
const StyledTD = styled.td`
  padding-bottom: 5px !important;
  padding-top: 5px !important;
`
const StyledContainer = styled.div`
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
  background-color: white;
  align-items: center;
  justify-content: center;
  padding: 0;
`
const StyledModalBodyDiv = styled(Container)`
  background-color: #039CCC;
  margin-bottom: 1px;
  padding-top: 5px;
  padding-bottom: 5px;
`

const StyledModalFooter = styled(ModalFooter)`
  background-color: #039CCC;
  border-style: none;
`
const StyledCloseButton = styled.button`
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
  display: inline-block;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #36B2A6;
    text-decoration: none !important;
    color: white;
    box-shadow: 0px 0px black;
  }
  @media (max-width: 992px) {
    margin-left: 0px !important;
  }
`
const StyledRow = styled.tr`
  cursor: pointer;
  &:hover {
    color: #FEC406;
  }
`
const StyledSubHeader = styled.h3`
  font-family: "Open sans", serif;
  margin-top: 10px;
  color: white;
  font-size: 24px;
  text-align: center;
  padding-bottom: 10px;
`
const StyledModalText = styled.p`
  font-family: "Open sans", serif;
  margin: 0px;
  color: white;
  font-size: 20px;
`
const StyledModalTextDetails = styled(StyledModalText)`
  text-align: center;
`
const AdminEnquiryModal = (props) => {
  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <Layout>
        <AdminMenu/>
        <StyledDiv>
          <StyledTable bordered>
            <thead>
            <tr>
              <StyledTH>Date Received</StyledTH>
              <StyledTH>First Name</StyledTH>
              <StyledTH>Last Name</StyledTH>
              <StyledTH>E-Mail</StyledTH>
              <StyledTH>Phone</StyledTH>
              <StyledTH>Message</StyledTH>
            </tr>
            </thead>
            <tbody>
            <StyledRow onClick={toggle}>
              <StyledTD>13/13/20</StyledTD>
              <StyledTD>Tom</StyledTD>
              <StyledTD>Thorsen</StyledTD>
              <StyledTD>asdasd@sese.se</StyledTD>
              <StyledTD>97979797</StyledTD>
              <StyledTD>Lorem upset osj eisjløals ho...</StyledTD>
            </StyledRow>
            <StyledRow onClick={toggle}>
              <StyledTD>13/13/20</StyledTD>
              <StyledTD>Tom</StyledTD>
              <StyledTD>Thorsen</StyledTD>
              <StyledTD>asdasd@sese.se</StyledTD>
              <StyledTD>97979797</StyledTD>
              <StyledTD>Lorem upset osj eisjløals ho...</StyledTD>
            </StyledRow>
            <StyledRow onClick={toggle}>
              <StyledTD>13/13/20</StyledTD>
              <StyledTD>Tom</StyledTD>
              <StyledTD>Thorsen</StyledTD>
              <StyledTD>asdasd@sese.se</StyledTD>
              <StyledTD>97979797</StyledTD>
              <StyledTD>Lorem upset osj eisjløals ho...</StyledTD>
            </StyledRow>
            </tbody>
          </StyledTable>
        </StyledDiv>
      </Layout>
      <StyledContainer>
        <StyledModal isOpen={modal} size="lg" toggle={toggle} className={className}>
          <StyledModalBody>
            <StyledModalBodyDiv>
              <Row>
                <Col xs="12" sm="12">
                  <StyledModalHeader>John Doe</StyledModalHeader>
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="12">
                  <StyledSubHeader>DATE RECEIVED: 12/03/99</StyledSubHeader>
                </Col>
              </Row>
            </StyledModalBodyDiv>
            <StyledModalBodyDiv>
              <Row>
                <Col xs="12" sm="6">
                  <StyledModalTextDetails>EMAIL: john@doe.com</StyledModalTextDetails>
                </Col>
                <Col xs="12" sm="6">
                  <StyledModalTextDetails>PHONE NR: 97979797</StyledModalTextDetails>
                </Col>
              </Row>
            </StyledModalBodyDiv>
            <StyledModalBodyDiv>
              <Row>
                <Col xs="12" sm="12">
                  <StyledSubHeader>Message:</StyledSubHeader>
                </Col>
              </Row>
              <Row>
                <Col xs="12" sm="12">
                  <StyledModalText>Nulla rhoncus, libero a tincidunt luctus, sapien felis venenatis mi, id pulvinar purus sem at nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed lacinia egestas risus at dignissim. </StyledModalText>
                </Col>
              </Row>
            </StyledModalBodyDiv>
          </StyledModalBody>
          <StyledModalFooter>
            <StyledCloseButton onClick={toggle}>CLOSE</StyledCloseButton>
          </StyledModalFooter>
        </StyledModal>
      </StyledContainer>
    </>
  );
}

export default AdminEnquiryModal;