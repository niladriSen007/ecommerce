import React from 'react'
import styled from "styled-components"
import Logo from "../../assets/logo.png"
import { AiOutlineMenu } from "react-icons/ai";
import {BsXLg} from "react-icons/bs"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const cartCount = useSelector(state=>state.cart)
  return (
    <NavifgationBar>
        <Wrapper>
            <LogoContainer>
               <Link to="/"> <img src={Logo} alt="logo" /></Link>
            </LogoContainer>
            <MenuContainer>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/productList/all">Products</Link></li>
                    <li><Link to="#">Contacts</Link></li>
                    <li><Link to="#">About</Link></li>
            </MenuContainer>
            <SearchContainer>
                <SearchOutlinedIcon />
                <input type="search" name="search" id="search" placeholder='Search for products, brands and more'/>
            </SearchContainer>
            <CartContainer>
                    <div className="profile">
                            {/* <Person2OutlinedIcon /> */}
                            <span><Link to="/login" style={{textDecoration:"none",color:"#111"}}>Sign In</Link> </span>
                    </div>
                    <div className="wishlist">
                            {/* <FavoriteBorderOutlinedIcon /> */}
                            <span ><Link to="/register" style={{textDecoration:"none",color:"#111"}}>Register</Link></span>
                    </div>
                    <Bag className="bag">
                          
                            <Link to="/cart">
                            <ShoppingBagOutlinedIcon style={{color:"#111",textDecoration:"none"}}/>
                                <CartItemCount>{cartCount.totalQuantity}</CartItemCount>
                                </Link>
                            {/* <span>Bag</span> */}
                    </Bag>
            </CartContainer>
        </Wrapper>
    </NavifgationBar>
  )
}

const Bag = styled.div`
position:relative
`

const CartItemCount = styled.div`
position:absolute;
width:16px;
height:16px;
background-color:#111;
top:-2px;
right:-6px;
border-radius:50%;
color:#fff;
font-size:12px;
`

const NavifgationBar = styled.nav`
background: #FBD3E9;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #FFF6FD, #FBD3E9);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right,#FFF6FD, #FFFFFF); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
width:100%;
box-shadow: rgba(100, 100, 111, 0.2) 0px 1px 29px 0px;
@media screen and (max-width:468px)
{
    width:100vw;
   
}
`
const Wrapper = styled.div`
display:flex;
align-items:center;
padding:8px 24px;
justify-content:space-between;
img
{
    width:28%;
    height:12%;
}
@media screen and (max-width:468px)
    {
       text-align:center;
    }
`
const LogoContainer = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:flex-start;
@media screen and (max-width:468px)
    {
       
      img
      {
        width:80%;
        
      }
    }

`
const MenuContainer = styled.div`
flex:1;
display:flex;
gap:24px;
align-items:center;
justify-content:flex-start;
li
{
    list-style:none;
    a{
        text-transform:uppercase;
        text-decoration:none;
        color:#111;
        font-size:13px;
        font-weight:600;
        position:relative;
        &::after
            {
                content:"";
                height:2.5px;
                background:red;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                // opacity:0;
                transform:scaleX(0);
                transition: all 0.3s;
                // transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            }
        
        }
        &:hover
        {
            a::after
            {

                transform:scaleX(1);
            }
        }
        @media screen and (max-width:468px)
    {
        display:none;
    }
}
`
const SearchContainer = styled.div`
flex:1;
display:flex;
align-items:center;
gap:8px;
input
{
    width:100%;
    padding:6px 12px;
    background-color:#fff;
    border:1px solid #999;
    border-radius:4px;
    &:focus
    {
        outline:none;
    } 
}
@media screen and (max-width:468px)
    {
        display:none;
        svg
        {
            display:none;
        }
    }
`
const CartContainer = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
gap:24px;
div
{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    span
    {
        font-weight:600;
        font-size:14px;
        text-transform:uppercase;
        cursor:pointer;
    }
    svg
    {
        cursor:pointer;
    }
}
@media screen and (max-width:468px)
    {
        flex:2;
        gap:16px;
        div{
            span
            {
                font-size:13px;
            }
            svg
            {
                font-size:20px;
            }
        }
      
    }
`

export default Navbar