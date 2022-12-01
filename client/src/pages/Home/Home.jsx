
import Advertisement from '../../components/Advertisement/Advertisement'
import Branding from '../../components/Branding/Branding'
import Categories from '../../components/Categories/Categories'
import Footer from '../../components/Footer/Footer'
import Hero from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import Products from '../../components/products/Products'

const Home = () => {
  return (
    <>
    <Navbar />
    <Advertisement />
    <Hero />
    <Categories />
    <Products />
    <Branding />
    <NewsLetter />
    <Footer />
    </>
  )
}

export default Home