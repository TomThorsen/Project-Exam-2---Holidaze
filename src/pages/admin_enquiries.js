import React from "react"
import Layout from "../components/layout/Layout"
import styled from "styled-components"
import AdminMenu from "../components/layout/AdminMenu"
import { Table } from "reactstrap"


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

export default () => (
  <>
    <Layout>
      <AdminMenu/>
      <StyledDiv>
        <StyledTable>
          <thead>
          <tr>
            <StyledTH>Date Received</StyledTH>
            <StyledTH>Location</StyledTH>
            <StyledTH>From Date</StyledTH>
            <StyledTH>To Date</StyledTH>
            <StyledTH>First Name</StyledTH>
            <StyledTH>Last Name</StyledTH>
          </tr>
          </thead>
          <tbody>
          <tr>
            <StyledTD>13/13/20</StyledTD>
            <StyledTD>Bergen</StyledTD>
            <StyledTD>13/13/20</StyledTD>
            <StyledTD>13/13/20</StyledTD>
            <StyledTD>Tom</StyledTD>
            <StyledTD>Thorsen</StyledTD>
          </tr>
          <tr>
            <StyledTD>13/13/20</StyledTD>
            <StyledTD>Bergen</StyledTD>
            <StyledTD>13/13/20</StyledTD>
            <StyledTD>13/13/20</StyledTD>
            <StyledTD>Tom</StyledTD>
            <StyledTD>Thorsen</StyledTD>
          </tr>
          <tr>
            <StyledTD>13/13/20</StyledTD>
            <StyledTD>Bergen</StyledTD>
            <StyledTD>13/13/20</StyledTD>
            <StyledTD>13/13/20</StyledTD>
            <StyledTD>Tom</StyledTD>
            <StyledTD>Thorsen</StyledTD>
          </tr>
          </tbody>
        </StyledTable>
      </StyledDiv>
    </Layout>
  </>
)
