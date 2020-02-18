import React from "react"
import Layout from "../components/layout/Layout"
import styled from "styled-components"
import StyledSearch from "../components/assets/StyledSearch"
import Image from 'react-bootstrap/Image'
import HotelsImage from "../components/img/hotelpage_1.png"
import Star from "../components/img/star.png"
import HotelsEnquiry from "../components/layout/modal/HotelsEnquiry"

const StyledContainer = styled.div`
  display: flex;
  width: 1024px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 20px;
  flex-direction: column;
  @media (max-width: 992px) {
      width: 100%;
  }
`
const StyledHotelContainer = styled.div`
  display: flex;
  width: 100%;
  height: 269px;
  background-color: #4C91B7;
  @media (max-width: 992px) {
    width: 100%;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
const StyledImg = styled(Image)`
  height: auto;
  width: 225px;
  margin: 20px;
  @media (max-width: 992px) {
    margin: 10px;
  }
  @media (max-width: 767px) {
    width: 180px;
  }
`
const StyledHotelInfoContainer = styled.div`
  width: 100%;
  margin-top: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  position:relative;
  @media (max-width: 992px) {
    width: 90%;
    margin: 10px;
  }
`
const StyledHotelHeader = styled.h1`
  text-align: center;
  color: white;
  font-family: "Open sans", serif;
  margin-top: -10px;
  margin-bottom: 0px;
  font-size: 36px;
  @media (max-width: 767px) {
    font-size: 26px;
  }
`
const StyledHotelLocation = styled.h3`
  text-align: center;
  color: white;
  font-family: "Open sans", serif;
  font-size: 20px;
  @media (max-width: 767px) {
    font-size: 16px;
  }
`
const StyledHotelParagraph = styled.p`
  color: white;
  font-family: "Open sans", serif;
  font-size: 16px;
  @media (max-width: 992px) {
    margin-bottom: 40px;
  }
  @media (max-width: 767px) {
    font-size: 14px;
  }
`
const StyledHotelRating = styled.p`
  color: white;
  font-family: "Open sans", serif;
  font-size: 16px;
  position:absolute;
  bottom: 0;
  left: 0;
  margin: 0;
`
const StyledHotelStarContainer = styled.div`
  margin: 0;
  padding: 0;
  position:absolute;
  top: 0;
  right: 0;
  @media (max-width: 767px) {
    position:relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;
  }
`
const StyledImgStars = styled(Image)`
  height: 22px;
  width: auto;
  margin: 0px;
  @media (max-width: 767px) {
    height: 16px;
  }
`

export default () => (
  <>
    <Layout>
      <StyledSearch/>
      <StyledContainer>
        <StyledHotelContainer>
          <StyledImg src={HotelsImage} alt='Image of a hotel' fluid/>
          <StyledHotelInfoContainer>
            <StyledHotelHeader>
              HOTEL HEADER
            </StyledHotelHeader>
            <StyledHotelLocation>
              Location Info
            </StyledHotelLocation>
            <StyledHotelStarContainer>
              <StyledImgStars src={Star} alt='Image of a hotel' fluid/>
              <StyledImgStars src={Star} alt='Image of a hotel' fluid/>
              <StyledImgStars src={Star} alt='Image of a hotel' fluid/>
              <StyledImgStars src={Star} alt='Image of a hotel' fluid/>
              <StyledImgStars src={Star} alt='Image of a hotel' fluid/>
            </StyledHotelStarContainer>
            <StyledHotelParagraph>
              DESCRIPTION TEXT: Aliquam convallis erat et arcu condimentum, vitae porttitor arcu ullamcorper. Ut dictum blandit finibus. Maecenas mi arcu, tempus sed odio ut, facilisis posuere eros. Maecenas tristique aliquam orci, eu interdum magna venenatis ut. Nulla quis enim nec odio ornare gravida. Etiam eu pretium neque, a venenatis neque. Suspendisse sodales dui vitae semper iaculis.
            </StyledHotelParagraph>
            <StyledHotelRating>
              Guest Rating
            </StyledHotelRating>
            <HotelsEnquiry>
            </HotelsEnquiry>

          </StyledHotelInfoContainer>
        </StyledHotelContainer>
      </StyledContainer>
    </Layout>
  </>
)
