import React, { useState } from 'react'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import styled from 'styled-components';


const ProductDetailsContainer = ({title}) => {

    const [dropdown,setDropdown] = useState(false)
  return (
    <ProductDetailsContainerBox>      
              <Dropdown>
              <Company style={{fontWeight:"900",flex:"1"}}><strong>{title}</strong></Company>
              {dropdown ? 
              <KeyboardArrowUpOutlinedIcon   style={{color:"#111",flex:"1",cursor:"pointer",alignSelf:"flex-end"}} onClick={()=>setDropdown(false)}/>
                :
              <KeyboardArrowDownOutlinedIcon style={{color:"#111",flex:"1",cursor:"pointer"}} onClick={()=>setDropdown(true)}/>
              }
              </Dropdown>
                  {
                    dropdown && 
                    <div>
                          <ProductDetail>               
                    <ProductDetailTitle>
                    Material & Care:
                    </ProductDetailTitle>
                    <ProductDetailDesc>
                    60% Cotton 40% Polyester<br />
                      Machine Wash
                    </ProductDetailDesc>
                  </ProductDetail>

                  <ProductDetail>               
                    <ProductDetailTitle>
                    Country of Origin:
                    </ProductDetailTitle>
                    <ProductDetailDesc>
                    India (and proud)
                    </ProductDetailDesc>
                  </ProductDetail>
                    </div>
                  }
              </ProductDetailsContainerBox>
  )
}

const Company = styled.span`
color:#777;
font-size:14px;
letter-spacing:.6px;
span
{
  font-weight:600;
}
`

const ProductDetailDesc = styled.div`
  line-height:28px;
  color:#777;
`

const ProductDetailTitle = styled.span`
font-weight:900;
font-size:16px;
color:#444;
`

const ProductDetailsContainerBox = styled.div`

`

const Dropdown = styled.div`
width:100%;
display:flex;
margin: 4px ;
align-items:center;
justify-content:space-between;
@media screen and (max-width:468px)
{
  margin: 4px 48px;
}
`

const ProductDetail = styled.div`
display:flex;
flex-direction:column;
gap:12px;
margin:24px 0;
`

export default ProductDetailsContainer