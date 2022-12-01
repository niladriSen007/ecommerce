
import styled from 'styled-components'
import Advertisement from '../../components/Advertisement/Advertisement'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import cart1 from "../../assets/images/CART1.webp"
import cart2 from "../../assets/images/cart2.webp"
import Branding from '../../components/Branding/Branding'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { addProduct, decreaseQuantity, increaseQuantity } from '../../store/cartSlice';
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';
import { userRequest } from '../../requestMethods';

const P_KEY = process.env.STRIPE_PUBLIC_KEY

const Container = styled.div`
  
`;


const Wrapper = styled.div`
  display:flex;
  padding:24px 76px;
  flex-direction:column;
  gap:24px;

`;

const Title = styled.h1`
  font-weight: 600;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  @media screen and (max-width:468px)
  {
    flex-direction:column;
    padding:12px;
    gap:24px;
  }
`;

const TopButton = styled.button`
  padding: 10px;
  border-radius:4px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "red"};
  background-color: ${(props) =>
    props.type === "filled" ? "red" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
  @media screen and (max-width:468px)
  {
    padding:${props=>props.type!=="filled"?"8px": "12px 24px"}
  }
`;

const TopTexts = styled.div`
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
  @media screen and (max-width:468px)
  {
    margin: 0px 6px;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width:468px)
  {
    flex-direction:column;
    gap:64px;
    align-items:center;
  }
`;

const Info = styled.div`
  flex: 2;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin:24px 0px;
  @media screen and (max-width:468px)
  {
    flex-direction:column;
    margin:24px 0px 48px;
  }
`;

const ProductDetail = styled.div`
  flex: 1;
  display: flex;
  justify-content:space-between;
  gap:24px;
  @media screen and (max-width:468px)
  {
    flex-direction:column;
    gap:24px;
    margin:16px;
  }
`;

const Image = styled.img`
  width: 250px;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width:468px)
  {
    flex-direction:column;
    gap:16px;
  }
`;

const ProductName = styled.span`
font-weight:600;
span
{
    color:#111;
    font-weight:800;
}
`;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  border:2px solid #111;
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;

`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;

`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 70vh;
  @media screen and (max-width:468px)
  {
    height: 65vh;

  }
`;

const SummaryTitle = styled.h1`
  font-weight: 600;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  border:none;
  border-radius:4px;
  padding: 10px;
  background-color: red;
  color: white;
  font-weight: 600;
  cursor:pointer;
`;

const Cart = () => {


  const dispatch = useDispatch()
  const product = useSelector(state=>state.cart)

  const [save,setSave] = useState(false)

  const handleSave112 =(e) =>{
    setSave(e.target.checked);
    
  }
  // console.log(save)

  const handleClickIncrease = (p) =>{
    console.log(p)
    dispatch(increaseQuantity(p.prod._id))
    // console.log(P_KEY)
  }

  const handleClickDecrease = (p) =>{
    console.log(p)
    dispatch(decreaseQuantity(p))
  }

  const [stripeToken,setStripeToken] = useState(null);
  const onToken = (token) =>{
    setStripeToken(token)
  }

  // console.log(stripeToken)


  const navigateTo = useNavigate()

  useEffect(()=>{
    const payOutProcess = async()=>{
        try
        {
            const res = await userRequest.post("/checkout/payment",{
              tokenId:stripeToken.id,
              amount:product.checkoutPrice - 150,
              
            })
            navigateTo("/success",{data:res.data})
        }
        catch(e)
        {
          console.log(e)
        }
    }
    stripeToken &&  payOutProcess()
    
  },[product.checkoutPrice,stripeToken,navigateTo])
  

  return (
    <Container>
      <Navbar />
      <Advertisement />
      <Wrapper>
        <Title>YOUR CART</Title>
        <Top>
          <TopButton><Link to="/productList/all" style={{color:"#111",textDecoration:"none"}}>CONTINUE SHOPPING</Link></TopButton>
          <TopTexts>
            <TopText>Shopping Bag({product.totalQuantity})</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {

                product.products.map(prod=>(
                  <Product key={prod._id}>
              <ProductDetail>
                <Image src={prod.prod.img} alt="hoodie"/>
                <Details>
                  <ProductName>
                    <b>Product:</b> <span>{prod.prod.title}</span>
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {prod.prod._id}
                  </ProductId>
                  <ProductColor color={prod.color} />
                  <ProductSize>
                    <b>Size:</b> {prod.size}
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                `<RemoveIcon style={{cursor:"pointer"}} onClick={()=>handleClickDecrease(prod)}/>
                  <ProductAmount>{prod.amount}</ProductAmount>
                  <AddIcon style={{cursor:"pointer"}} onClick={()=>handleClickIncrease(prod)}/>
                </ProductAmountContainer>
                <ProductPrice>₹ {prod.prod.newPrice}</ProductPrice>
              </PriceDetail>
            </Product>
                ))

            }
            <Hr />
          
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Cart Total</SummaryItemText>
              <SummaryItemPrice>₹ {product.totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Charges</SummaryItemText>
              <SummaryItemPrice>₹ {product.totalPrice > 1500 ? 0 :250}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>GST Charges</SummaryItemText>
              <SummaryItemPrice>18%</SummaryItemPrice>
            </SummaryItem>
            {/* <SummaryItem>
              <SummaryItemText>Shipping Price</SummaryItemText>
              <SummaryItemPrice>₹</SummaryItemPrice>
            </SummaryItem> */}
            <SummaryItem>
              <SummaryItemText style={{backgroundColor:"#f59f00",color:"#fff",width:"100%",padding:"16px"}}><input type="checkbox" onChange={(e)=>handleSave112(e)}/> Save additional <span style={{fontWeight:"700"}}>₹ 112</span> on this order</SummaryItemText>
              {/* <SummaryItemPrice>₹ -200</SummaryItemPrice> */}
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice><span style={{color:"#999",textDecoration:"line-through",opacity:"0.5",marginRight:"12px"}}>₹ {product.checkoutPrice}</span> ₹ {save   ?  product.products.length  > 0 ? product.checkoutPrice - 112 - 150 : 0  :product.products.length> 0 ? product.checkoutPrice - 150 : 0}</SummaryItemPrice>
            </SummaryItem>
            <StripeCheckout 
            name="Niladri's store" 
            image="https://www.reviewsxp.com/image/The-souled-store.png" 
            billingAddress
            shippingAddress
            description={`Your total is ${product.checkoutPrice-150}  rs`}
            amount={(product.checkoutPrice-150)*100}
            token={onToken}
            stripeKey={"pk_test_51M8h5RSGicCfqS5sQUZQC0eEBqA3296qhoicBS6zJZA9ArYa2kSPvmcGIyfK1HMbar13YsDbVvptE05LcoRHJ1vf00zJJ1D1jP"}
            >
                <Button>CHECKOUT NOW </Button>
            </StripeCheckout>
          </Summary>
        </Bottom>
      </Wrapper>
      <Branding />
      <Footer />
    </Container>
  );
};

export default Cart