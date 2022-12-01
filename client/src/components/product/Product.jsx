import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';
import { keyframes } from '@emotion/react';
const Product = ({product}) => {
    // console.log(product._id)
  return (
    <Container>
        {/* <Circle /> */}
       <ImageContainer>
       <Image src={product.img} alt="product"/>
        <Info>
            <Icon>
                    <Link to="/cart" style={{textDecoration:"none",color:"#111"}}><ShoppingCartOutlinedIcon /></Link>
            </Icon>
            <Icon>
                    <Link to={`/productsPage/${product._id}`} style={{textDecoration:"none",color:"#111"}}><SearchOutlinedIcon /></Link>
            </Icon>
            <Icon>
                    <Link to="/productList" style={{textDecoration:"none",color:"#111"}}><FavoriteBorderOutlinedIcon /></Link>
            </Icon>
        </Info>
       </ImageContainer>
        <PriceContainer>
                <ProductName><strong>{product.title}</strong></ProductName>
                <div style={{height:"2px",width:"190%",borderBottom:"1px solid rgba(0,0,0,0.2"}}></div>
                <ProductDesc>{product.category}</ProductDesc>
               <div style={{display:"flex",gap:"8px"}}>
                    <ProductNewPrice>₹  {product.newPrice}</ProductNewPrice>
                    <ProductOldPrice>₹  {product.oldPrice}</ProductOldPrice>               
                    <ProductDiscount>{product.off}% OFF</ProductDiscount>
               </div>
        </PriceContainer>
    </Container>
  )
}

const ProductName = styled.span`
color:#111;
font-weight:900;
font-size:16px;
`
const ProductDesc = styled.span`
color:#888;
font-size:14px;
font-weight:600;
;
`
const ProductNewPrice = styled.span`
color:#222;
font-weight:700;
font-size:15px;
`
const ProductOldPrice = styled.span`
text-decoration:line-through;
color:#999;
opacity:0.5;
`

const ProductDiscount = styled.span`
color:red;
font-size:14px;
`

const PriceContainer = styled.div`
display:flex;
align-items:flex-start;
justify-content:center;
flex-direction:column;
gap:4px;
padding:6px 6px 12px;

`


const Info = styled.div`
opacity:0;
transform:translateY(-100%);
width:100%;
height:100%;
position:absolute;
top:0;
left:0;
background-color:rgba(0,0,0,0.3);

z-index:3;
display:flex;
align-items:center;
justify-content:center;
// cursor:pointer;
transition:all .3s;

gap:24px;
    svg
    {
        font-size:32px;
        cursor:pointer;
    }

`
const ImageContainer = styled.div`
flex:1;
min-width:280px;
height:350px;
background-color:#fff0f6;
display:flex;

align-items:center;
justify-content:center;

position:relative;
overflow:hidden;
`

const Container = styled.div`
flex:1;
min-width:280px;
height:450px;
background-color:#fff;
display:flex;
gap:12px;
align-items:flex-start;
justify-content:center;
flex-direction:column;
position:relative;
overflow:hidden;
box-shadow: rgba(100, 100, 111, 0.2) 0px 1px 29px 0px;
border-bottom-left-radius:4px;
border-bottom-right-radius:4px;

&:hover ${Info}
{
    opacity:1;
    transform:translateY(0);
}

`
const Image = styled.img`
width:100%;
height:100%;
border-top-right-radius:4px;
border-top-left-radius:4px;
cursor:pointer;
`


// const grow = styled.keyframes`
//     from
//     {
//        transform:translateY(-10px)
//     }
//     to
//     {
//         transform:translateY(10px)
//     }
// `
const Icon = styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:#fff;
display:flex;
align-items:center;
justify-content:center;
transition:all .3s;
&:hover
{
    transform:scale(1.1);
}
`

export default Product