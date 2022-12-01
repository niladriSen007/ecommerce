import React from 'react'
import {categories} from "../../dummyData"
import styled from 'styled-components'
import CategoryItem from '../CategoryItem/CategoryItem'

const Categories = () => {
  return (
    <Container>
        {
            categories.map(category=>(
                <CategoryItem category={category} key={category.id}/>
            ))
        }
    </Container>
  )
}
const Container = styled.div`
display: flex;
padding: 20px;
justify-content: space-between;
@media screen and (max-width:468px)
{
  flex-direction:column;
  margin: 64px 16px;
}
`

export default Categories