import React from 'react'
import styled from 'styled-components'
const Branding = () => {
  return (
    <Container>
        <MiniContainer1><span>HOMEGROWN INDIAN BRAND</span></MiniContainer1>
        <MiniContainer2><span>Over <strong>4 Million</strong> Happy Customers</span></MiniContainer2>
    </Container>
  )
}
const Container = styled.div`
    width:100%;
    height:200px;
    font-size:52px;
    // font-weight:600;
    letter-spacing:.5px;
    padding:64px 0px ;
    @media screen and (max-width:468px)
{
  height:100px;
  font-size:16px;
  letter-spacing:.2px;
  margin:24px 0px;
}
`
const MiniContainer1 = styled.div`
background-color:red;
color:#fff;
text-align:center;
@media screen and (max-width:468px)
{
  word-spacing:3px;
  padding:8px 0px;
}
`
const MiniContainer2 = styled.div`
color:#111;
text-align:center;
strong
{
    font-size:64px;
    font-weight:900;
}
@media screen and (max-width:468px)
{
  word-spacing:5px;
  strong
  {
    font-size:20px;
    word-spacing:-2px;
  }
}
`
export default Branding