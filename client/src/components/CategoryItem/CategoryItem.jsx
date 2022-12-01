import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'


const CategoryItem = ({category}) => {
  return (
    <Container>
       <Link to={`/productList/${category.category}`}>
        <Image src={category.img} alt={category.title}/>
          <Info>
              {/* <Title>{category.title}</Title> */}
              <Link to={`/productList/${category.category}`} style={{textDecoration:"none"}}><Button>Shop Now</Button></Link>
          </Info>
       </Link>
    </Container>
  )
}

const Container = styled.div`
flex:1;
margin:6px;
position:relative;
`
const Title= styled.h1`
font-weight:900;
`
const Image = styled.img`
width:100%;
height:100%;
object-fit:contain;
// opacity:.9;
`
const Button = styled.button`
// position: relative;
width: 180px;
height: 60px;
margin: 20px;
line-height: 60px;
letter-spacing: 2px;
text-decoration: none;
text-transform: uppercase;
text-align: center;
cursor:pointer;
color: #111;
trasnition: .5s;
border: 1px solid #7a18ec;
border-radius:6px;
font-weight:700;
&:hover {
  border: 1px solid #7a18ec;
  color:#fff;
  background: #7a18ec url(https://i.postimg.cc/FzBWFtKM/pixel2.png);
  transition-delay: 0.8s;
  background-size: 180px;
  a
  {
    color:#fff;
  }
  animation: animate .8s steps(8) forwards;
}
@keyframes animate {
    0% {
      background-position-y: 0;
    }
    100% {
      background-position-y: -480px;
    }
}
@media screen and (max-width:468px)
{
  width:100px;
  font-size:12px;
  line-height: 5px;
  height:30px;
letter-spacing: .5px;
}
`
const Info = styled.div`
position:absolute;
top:70%;
left:50%;
transform:translateX(-50%);
@media screen and (max-width:468px)
{
  top:67%;
  left:50%;
  // bottom:30%;
}
`

export default CategoryItem