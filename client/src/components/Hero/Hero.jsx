import React from 'react'
import styled from "styled-components"
import ImageSlider from '../ImageSlider/ImageSlider'
const Hero = () => {
  return (
    <Container>
            <ImageSlider />
    </Container>
  )
}

const Container = styled.div`
width:100%;
height:60vh;
`
export default Hero