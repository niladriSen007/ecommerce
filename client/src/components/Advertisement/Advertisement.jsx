import React from 'react'
import styled from "styled-components"

const Advertisement = () => {
    let today = new Date();
    let hours = today.getHours();
    let minues = today.getMinutes();
    let seconds = today.getSeconds();


  return (
    <Container>
            <p>Sale Starts In <span> {hours<10?"0"+hours : hours}</span> H : <span>{minues}</span> M : <span>{seconds}</span> S</p>
    </Container>
  )
}
const Container = styled.div`
    width:100%;
    height:40px;
    padding:12px 12px;
    display:flex;
    align-items:center;
    justify-content:center;
    background-color:#f8f0fc;
    p
    {
        letter-spacing:.5px;
        span
    {
        color:red;
        font-size:18px;
        font-weight:600;
    }
    }
    @media screen and (max-width:468px)
    {
      width:100vw;

    }
`
export default Advertisement