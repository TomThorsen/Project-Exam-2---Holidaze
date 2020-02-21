import React from "react"
import styled from "styled-components"
import { Row, Col } from "reactstrap"
import { Link } from "gatsby"

const StyledDiv = styled.div`
  display: flex;
  width: 1024px;
  justify-content: center;
  background-color: #4C91B7;
  align-items: center;
  margin: 0 auto;
  padding: 0;
  margin-bottom: 20px;
  flex-direction: column;
  @media (max-width: 992px) {
      width: 100%;
  }
  padding-bottom: 5px;
  padding-top: 10px;
    @media (max-width: 992px) {
      width: 100% !important;
      padding-top: 84px;
  }
`
const StyledHeader = styled.h1`
  font-family: "Open sans", serif;
  color: white;
  font-size: 30px;
  margin-top: 0px;
  @media (max-width: 622px) {
    font-size: 28px;
  }
`
const StyledLink = styled(Link)`
  font-family: "Open sans", serif;
  color: white;
  font-size: 23px;
  margin-top: 0px;
  @media (max-width: 622px) {
    font-size: 18px;
  }
  &:hover {
    color: #FEC406 !important;
    text-decoration: none !important;
  }
`
const StyledRow = styled(Row)`
  width: 100%;
  justify-content: space-between;
  text-align: center;
`

export default () => (
  <>
      <StyledDiv>
          <Row>
            <Col xs="12" sm="12">
                <StyledHeader>Admin Menu</StyledHeader>
            </Col>
          </Row>
          <StyledRow>
            <Col xs="12" sm="4">
              <StyledLink to="/admin_enquiries/" activeStyle={{ color: "#FEC406" }}>Customer Enquiries</StyledLink>
            </Col>
            <Col xs="12" sm="4">
              <StyledLink to="/admin_messages/" activeStyle={{ color: "#FEC406" }}>Contact Messages</StyledLink>
            </Col>
            <Col xs="12" sm="4">
              <StyledLink to="/admin_create/" activeStyle={{ color: "#FEC406" }}>Create Establishment</StyledLink>
            </Col>
          </StyledRow>
      </StyledDiv>
  </>
)
