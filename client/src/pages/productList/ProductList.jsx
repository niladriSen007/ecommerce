
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Advertisement from '../../components/Advertisement/Advertisement'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import Products from '../../components/products/Products'
const ProductList = () => {

    const params = useParams()
    const category = params.category;
    // console.log(category)

    const [filters,setFilters] = useState({})
    const [sort,setSort] = useState("newest")
    

    const handleChange=(e)=>{
        // e.preventDefault();
        setFilters({
            ...filters,
            [e.target.name]:e.target.value,
        })
    }
    // console.log(filter)

    const handleSort = (e) =>{
        setSort(e.target.value)
    }
    // console.log(sort)

  return (
    <Container>
        <Navbar />
        <Advertisement />
        <Title>{category}</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products : </FilterText>
                <Select name="color" onChange={(e)=>handleChange(e)}>
                    <Option  disabled>Color</Option>
                    <Option value="red" >Red</Option>
                    <Option value="blue" >Blue</Option>
                    <Option value="pink" >Pink</Option>
                    <Option value="yellow" >Yellow</Option>
                    <Option value="black" >Black</Option>
                    <Option value="white" >White</Option>
                </Select>
                <Select name="size" onChange={(e)=>handleChange(e)}>
                    <Option disabled  >Size</Option>
                    <Option >XS</Option>
                    <Option >S</Option>
                    <Option >M</Option>
                    <Option >L</Option>
                    <Option >XL</Option>
                </Select>
                </Filter>
            <Filter>
                <FilterText>Sort Products : </FilterText>
                <Select name="sortCategory" onChange={(e)=>handleSort(e)} defaultValue="Newest">
                    <Option value="newest" >Newest</Option>
                    <Option value="asc" >Price - High To Low</Option>
                    <Option value="desc" >Price - Low To High</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products category={category} filters={filters} sort={sort}/>
        <NewsLetter />
        <Footer />
    </Container>
  )
}
const Container = styled.div`

`
const Title = styled.h1`
margin:20px;
text-transform:uppercase;
letter-spacing:1px;
`
const FilterContainer = styled.div`
display:flex;
justify-content:space-between;

`
const Filter = styled.div`
margin:20px 40px;
@media screen and (max-width:468px)
{
    margin:10px 40px;
    flex:1;
}
`

const FilterText = styled.span`
font-size:20px;
font-weight:700;
@media screen and (max-width:468px)
{
    font-size:16px;
    // margin-bottom:16px;
}
`

const Select = styled.select`
cursor:pointer;
padding:8px;
margin-left:8px;
@media screen and (max-width:468px)
{
    margin:10px 2px;
    padding:4px;
}
`
const Option = styled.option`

`
export default ProductList