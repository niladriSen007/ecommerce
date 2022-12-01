import React from 'react'
import Advertisement from '../../components/Advertisement/Advertisement'
import Branding from '../../components/Branding/Branding'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import Products from '../../components/products/Products'

const AllProducts = () => {
  return (
    <div>
        <Navbar />
        <Advertisement />
        <Products />
        <NewsLetter />
        <Branding />
        <Footer />
    </div>
  )
}

export default AllProducts