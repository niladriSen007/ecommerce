import styled from 'styled-components'
import Advertisement from '../../components/Advertisement/Advertisement'
import Branding from '../../components/Branding/Branding'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import ProductDetailsContainer from '../../components/ProductDetailsContainer/ProductDetailsContainer'

import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { publicRequest } from '../../requestMethods'
import { addProduct } from '../../store/cartSlice'
import { useDispatch } from 'react-redux'

const ProductsPage = () => {

  const params = useParams()
  const productId = params.id;
  // console.log(productId)

  const [product,setProduct] = useState({})

  const [isWishListed,setIsWishlisted] = useState(false)


  const dispatch = useDispatch()

  // const [quantity,setQuantity] = useState(0)


  // const [selectedColor,setSelectedColor] = useState("")
  // const [size,setSize] = useState("")

  const [orderedProductDetails,setOrderedProductDetails] = useState({
    color:"black",
    size:"L",
    quantity:1,
  })

  const handleOrderedProductDescription = (e) =>{
    let property = e.target.getAttribute("name");
    setOrderedProductDetails(prevOrderDetails=>{
      return {
        ...prevOrderDetails,
        [property === "color" ? property :e.target.name] : property === "color" ? e.target.getAttribute("color") : e.target.value,
      }
    })
  }



  useEffect(()=>{
    const getProduct = async()=>{
      const prod = await publicRequest.get(`/products/${productId}`)
      setProduct(prod.data)
      // console.log(prod.data)
    }
    getProduct()
  },[productId])



  // const handleQuantity = (e) =>{
  //  setQuantity(e.target.value);
  // }

  // const handleSize = (e) =>{
  //   setSize(e.target.value);
  //  }

  //  const handleColor = (e) =>{
  //   setSelectedColor(e.target.getAttribute("color"));
  //   // console.log(e.target.getAttribute("color"))
  //  }

  //  console.log(orderedProductDetails)

  const handleClick = (product) =>{
      dispatch(addProduct({product:product,quantity:orderedProductDetails.quantity,color:orderedProductDetails.color,size:orderedProductDetails.size}))
      console.log(product)
  }


  return (
    <Container>
        <Navbar />
        <Advertisement />
        <Wrapper>
            <ImageContainer>
                  <Image src={product.img} alt="product" />
            </ImageContainer>
            <InfoContainer>
              <NameContainer>
                  <Title>{product.title}</Title>
                  <SubTitle>{product.categories?.[0]}</SubTitle>
                  <Company>By <span>Marvel™</span></Company>
              </NameContainer>
              <div style={{height:"2px",width:"85%",borderBottom:"1px solid rgba(0,0,0,0.2"}}></div>
              <PriceContainer>
                <NewPrice>₹ {product.newPrice}</NewPrice>
                <OldPrice> ₹ {product.oldPrice}</OldPrice>
                <Discount>{product.off}% OFF</Discount>
              </PriceContainer>
              <FilterContainer>
                  <Filter>
                      <FilterTitle>Color</FilterTitle>
                      {/* <FilterColor color="black" />
                      <FilterColor color="red" />
                      <FilterColor color="gray" /> */}
                      {
                        product.color?.map(col=><FilterColor color={col} key={col} onClick={e=>handleOrderedProductDescription(e) } name="color"></FilterColor>)
                      }
                  </Filter>
                  <Filter>
                      <FilterTitle>Size</FilterTitle>
                      <FilterSize name="size" onChange={(e)=>handleOrderedProductDescription(e)}>
                          <FilterSizeOption>XS</FilterSizeOption>
                          <FilterSizeOption>S</FilterSizeOption>
                          <FilterSizeOption>M</FilterSizeOption>
                          <FilterSizeOption>L</FilterSizeOption>
                          <FilterSizeOption>XL</FilterSizeOption>
                      </FilterSize>
                  </Filter>
              </FilterContainer>
              <Size>Please select a size. <Link to="#">SELECT SIZE</Link></Size>
              <SizeContainer>
                {/* <Button >XS</Button>
                <Button>S</Button>
                <Button>M</Button>
                <Button>L</Button>
                <Button>XL</Button> */}

                {
                  product.size?.map(productSize=><Button  key={productSize}>{productSize}</Button>)
                }
              </SizeContainer>
              <Size>Size not available?  <Link to="#"> Notify Me</Link></Size>
              <Quantity>
                <span>Quantity</span>
                <Select onChange={(e)=>handleOrderedProductDescription(e)} name="quantity">
                    <Option selected>01</Option>
                    <Option >2</Option>
                    <Option >3</Option>
                    <Option >4</Option>
                    <Option >5</Option>
                    <Option >6</Option>
                    <Option >7</Option>
                    <Option >8</Option>
                    <Option >9</Option>
                    <Option >10</Option>
                </Select>
              </Quantity>
              <ButtonContainer>
                  <Button1 onClick={()=>handleClick(product)}>Add To Cart</Button1>
                  {isWishListed ?<Button2> <FavoriteOutlinedIcon style={{color:"red"}} onClick={()=>setIsWishlisted(false)}/> Added to Wishlist </Button2>:<Button2> <FavoriteBorderOutlinedIcon style={{color:"#111"}} onClick={()=>setIsWishlisted(true)}/>Add To Wishlist</Button2>}
              </ButtonContainer>
              <span style={{fontSize:"14px",color:"#888",display:"flex",alignItems:"center",gap:"4px",paddingRight:"16px "}}><HistoryOutlinedIcon /> This item is eligible for return under our easy 30 day return policy. No questions asked.</span>
              <ProductDetailsContainer title={"Product Details"}/>
              <ProductDetailsContainer title={"Product Description"}/>
              <ProductDetailsContainer title={"Artist Description"}/>
            </InfoContainer>
        </Wrapper>
        {/* <Branding /> */}
        <NewsLetter />
        <Footer />
    </Container>
  )
}



const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width:468px)
{
  width:45%;
}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  border:2px solid #111;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;




const Size = styled.h2`
  font-size:14px;
  margin:-2px 0px;
  color:#444;
  a
  {
    font-size:12px;
    color:#888;
    letter-spacing:.5px;
  }
`

const Container = styled.div`
  width:100vw;
  height:140vh;
@media screen and (max-width:468px)
{
  overflow-x:hidden;
  width:100vw;
  // padding:8px;
}
`


const Wrapper = styled.div`
display:flex;
margin: 8px 0px;
// align-items:center;
// justify-content:space-between;
gap:48px;
height:140vh;
@media screen and (max-width:468px)
{
  flex-direction:column;
  padding:0px 18px;
  height:230vh;
  margin:6px 0px;
  gap:10px;
}
`
const ImageContainer = styled.div`
height:90vh;
flex:1;
`
const InfoContainer = styled.div`
display:flex;
flex:1;
flex-direction:column;
gap:24px;
justify-content:flex-start;

`
const Image = styled.img`
width:100%;
height:100%;
object-fit:contain;
@media screen and (max-width:468px)
{
  width:95%;
}
`
const   NameContainer = styled.div`
display:flex;
flex-direction:column;
gap:8px;
@media screen and (max-width:468px)
{
  padding:8px;
}
`
const Title = styled.h1`
font-weight:700;
font-size:48px;
margin-bottom:-8px;
@media screen and (max-width:468px)
{
  font-size:36px;
}
`
const SubTitle = styled.span`
  font-weight:500;
  color:#999;
  font-size:14px;
  letter-spacing:.6px;
  text-transform:uppercase;
`
const Company = styled.span`

color:#777;
font-size:14px;
letter-spacing:.6px;
span
{
  font-weight:600;
}
`
const PriceContainer = styled.div`
  display:flex;
  gap:16px;

`
const NewPrice = styled.span`
  font-size:18px;
  font-weight:700;
  color:#111;
`
const OldPrice = styled.span`
font-size:18px;
// font-weight:700;
color:#999;
opacity:.6;
text-decoration:line-through;
`
const Discount = styled.span`
  color:red;
  font-weight:700;
  `
const SizeContainer = styled.div`
  display:flex;
  gap:12px;
 
`
const Button = styled.button`
  width:50px;
  height:30px;
  border-radius:200px;;
  border:2px solid #999;
  color:#777;
  font-weight:600;
  padding:8px;
  display:flex;
  align-items:center;
  justify-content:center;
  background-color:#fff;
  padding : 16px 32px;
  cursor:pointer;
  @media screen and (max-width:468px)
  {
    padding : 8px 16px;
  }
`
const ButtonContainer = styled.div`
display:flex;
@media screen and (max-width:468px)
{
  flex-direction:column;
 gap:16px;
 width:90vw;
}
`
const Button1 = styled.button`
  color:#fff;
  background-color:red;
  border:none;
  padding :6px 38px;
  font-weight:700;
  text-transform:uppercase;
  margin-right:14px;
  border-radius:2px;
  cursor:pointer;
  @media screen and (max-width:468px)
{

 width:100%;
 padding:12px 38px;
}
`
const Button2 = styled.button`
display:flex;
align-items:center;
justify-content:center;
padding :6px 28px;
text-transform:uppercase;
background-color:#fff;
border:2px solid #999;
border-radius:2px;
cursor:pointer;
`
const Quantity = styled.div`

`
const Select = styled.select`
  padding:6px;
  margin-left:12px;
`
const Option = styled.option``

export default ProductsPage