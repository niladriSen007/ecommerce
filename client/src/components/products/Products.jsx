import React, { useEffect, useState } from 'react'
import { popularProducts } from '../../dummyData'
import styled from "styled-components"
import Product from '../product/Product'
import axios from "axios"
import { publicRequest } from '../../requestMethods'
const Products = ({category,filters,sort}) => {



  const [products,setProducts] = useState([])
  const [filteredProducts,setFilteredProducts] = useState(products)




  useEffect(()=>{
      const getProducts = async()=>{
        
      try
      {
        const resp = await publicRequest.get( category ? `/products?category=${category}` :  `/products`);
        // console.log(resp.data)
        setProducts(resp.data)
        setFilteredProducts(resp.data)
      }
      catch(e)
      {
        console.log("Hiiii")
          console.log(e)
      }
      
      }
      getProducts()
  },[category])


  useEffect(()=>{
    let beforeSorting=products;
   if(filters)
   { 
    let coloredFilteredProducts = products.filter(item=>item.color?.includes(filters.color));
    (filters.color) && setFilteredProducts(coloredFilteredProducts)
    let fp = coloredFilteredProducts;
   ( filters.size) && setFilteredProducts(fp.filter(item=>item.size?.includes(filters.size)))
   beforeSorting = filteredProducts
  }
  if(sort)
  {
    if(sort==="asc")
      {
        let newSortedArray = beforeSorting
        newSortedArray.sort((a,b)=> a.newPrice - b.newPrice)
        setFilteredProducts(newSortedArray)
      }
      else if(sort === "desc")
      {
        let newSortedArray = beforeSorting
        newSortedArray.sort((a,b)=> b.newPrice - a.newPrice)
        setFilteredProducts(newSortedArray)
      }
    //   else if(sort === "newest")
    // { 
    //    let newSortedArray = beforeSorting
    //   newSortedArray.sort((a,b)=> a.createdAt - b.createdAt)
    //   setFilteredProducts(newSortedArray)
    // }
  }
  },[filters,sort])


  
  return (
    <Container>
        {
            filteredProducts.map(product=>(
                <Product product={product} key={product.id} />
            ))
        }
    </Container>
  )
}

const Container = styled.div`
flex:1;
padding  64px;
display:grid;
grid-template-columns:repeat(4,1fr);
row-gap:32px;
place-items:center;
@media screen and (max-width:468px)
{
  grid-template-columns:1fr;
}
`
export default Products