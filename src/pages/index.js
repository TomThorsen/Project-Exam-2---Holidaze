import React from "react"
import Layout from "../components/layout/Layout"
import styled from "styled-components"
import StyledSearch from "../components/assets/StyledSearch"
import { Container, Row, Col} from 'reactstrap'
import Image from 'react-bootstrap/Image'
import Banner from "../components/img/banner_1.png"
import Logo from "../components//img/logo_white.png"
import Hotel1 from "../components/img/hotel_1.png"
import Hotel2 from "../components/img/hotel_2.png"
import Hotel3 from "../components/img/hotel_3.png"
import HotelWide1 from "../components/img/hotel_wide_1.png"
import HotelWide2 from "../components/img/hotel_wide_2.png"


const StyledDiv = styled.div`
  display: flex;
  width: 1024px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;
  @media (max-width: 992px) {
      width: 100%;
  }
`
const StyledBanner = styled(Image)`
  width: 100%;
  height: auto;
`
const StyledTextContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  background-color: #039CCC;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 20px;
`
const StyledLogo = styled.img`
  width: 280px;
  height: auto;
  padding-top: 20px;
  @media (max-width: 767px) {
    width: 180px;
  }
`
const StyledParagraph = styled.p`
  font-family: "Open sans", serif;
  color: white;
  text-align: center;
  font-size: 18px;
  width: 780px;
  margin-top: 20px;
  margin-bottom: 20px;
  @media (max-width: 992px) {
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
  }
`
const StyledContainer = styled(Container)`
  margin: 0;
  padding: 0;
  width: 100% !important;
`
const StyledRow = styled(Row)`
  margin: 0;
  margin-bottom: 20px;
  padding: 0;
  @media (max-width: 767px) {
    margin-bottom: 0px;
}
`
const StyledColumn = styled(Col)`
  margin: 0;
  padding-left: 5px;
  padding-right: 5px;
  @media (max-width: 767px) {
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    margin-bottom: 10px;
  }
`
const StyledImg = styled(Image)`
  box-shadow: 1px 3px 3px black;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 0px black;
  filter: brightness(100%);
  }
  filter: brightness(90%);
`
const StyledImgText = styled.p`
  font-family: "Open sans", serif;
  position: absolute;
  top: 2px;
  left: 15px;
  font-size:26px;
  color: white;
  text-shadow: 1px 1px 1px black;
`
const StyledImageLink = styled.a`

`
const StyledImgContainer = styled.div`
  position: relative;
`
export default () => (
  <>
    <Layout>
      <StyledSearch/>
      <StyledDiv>
        <StyledBanner src={Banner} alt='Image of Bergen harbor' fluid/>
        <StyledTextContainer>
          <StyledLogo src={Logo} alt='website logo' />
          <StyledParagraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat sit amet lacus eget commodo. Cras est nibh, vehicula nec vehicula quis, rutrum eget enim.
          </StyledParagraph>
        </StyledTextContainer>
        <StyledContainer>
          <StyledRow>
            <StyledColumn md={4} xs={6}>
              <StyledImageLink href="#home">
                <StyledImgContainer>
                  <StyledImg src={Hotel1} alt='Image of a hotel' fluid/>
                  <StyledImgText>
                    HOTELNAME
                  </StyledImgText>
                </StyledImgContainer>
              </StyledImageLink>
            </StyledColumn>
            <StyledColumn md={4} xs={6}>
              <StyledImageLink href="#home">
                <StyledImgContainer>
                  <StyledImg src={Hotel2} alt='Image of a hotel' fluid/>
                  <StyledImgText>
                    HOTELNAME
                  </StyledImgText>
                </StyledImgContainer>
              </StyledImageLink>
            </StyledColumn>
            <StyledColumn md={4} xs={12}>
              <StyledImageLink href="#home">
                <StyledImgContainer>
                  <StyledImg src={Hotel3} alt='Image of a hotel' fluid/>
                  <StyledImgText>
                    HOTELNAME
                  </StyledImgText>
                </StyledImgContainer>
              </StyledImageLink>
            </StyledColumn>
          </StyledRow>
          <StyledRow>
            <StyledColumn md={6} xs={12}>
              <StyledImageLink href="#home">
                <StyledImgContainer>
                  <StyledImg src={HotelWide1} alt='Image of a hotel' fluid/>
                  <StyledImgText>
                    HOTELNAME
                  </StyledImgText>
                </StyledImgContainer>
              </StyledImageLink>
            </StyledColumn>
            <StyledColumn md={6} xs={12}>
              <StyledImageLink href="#home">
                <StyledImgContainer>
                  <StyledImg src={HotelWide2} alt='Image of a hotel' fluid/>
                  <StyledImgText>
                    HOTELNAME
                  </StyledImgText>
                </StyledImgContainer>
              </StyledImageLink>
            </StyledColumn>
          </StyledRow>
        </StyledContainer>
      </StyledDiv>
    </Layout>
  </>
)
