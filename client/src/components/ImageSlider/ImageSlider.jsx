import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../assets/images/slider1.webp"
import slider2 from "../../assets/images/slider2.webp"
import slider3 from "../../assets/images/slider3.webp"
import slider4 from "../../assets/images/slider4.webp"
import slider5 from "../../assets/images/slider5.webp"
import slider6 from "../../assets/images/slider6.webp"
import styled from "styled-components"

function ImageSlider() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
      };

  return (
    <Carousel {...settings}>
        <Wrap>
                <img src={slider1} alt="slider" />
        </Wrap>
        <Wrap>
                <img src={slider2} alt="slider" />
        </Wrap>
        <Wrap>
                <img src={slider3} alt="slider" />
        </Wrap>
        <Wrap>
                <img src={slider4} alt="slider" />
        </Wrap>
        <Wrap>
                <img src={slider5} alt="slider" />
        </Wrap>
        <Wrap>
                <img src={slider6} alt="slider" />
        </Wrap>
    </Carousel>
  )
}

const Carousel = styled(Slider)`
    // margin-top:10px;
    padding:0px 4px;

    ul li button
    {
        &:before
        {
            font-size:10px;
            color: rgb(150,150,171);
        }
    }

    li.slick-active button:before
    {
        color:#111;
    }

    .slick-list
    {
        overflow:hidden;
        // padding:0px 24px;
    }
    button
    {
        z-index:1;
    }
    @media screen and (max-width:468px)
    {
           width:100vw;
    }
`
const Wrap = styled.div`
cursor:pointer;
    img
    {
        border:2px solid #999;
        width:100%;
        height:28rem;
        object-fit:cover;
        border-radius:4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,rgb(0 0 0 / 73%) 0px 16px 10px -10px;

        &:hover
        {
            border : 2px solid rgba(249,249,249,.8);
        }
    }
@media screen and (max-width:468px)
{
      img
      {
          width:100%;
        object-fit:cover;
      }
}
`

export default ImageSlider