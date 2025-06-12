import React from 'react'
import Hero from '../components/hero/Hero'
import ProductCard from '../components/products/ProductCard'
import pollo from '../../../assets/pollo01.png'
import SearchBar from '../components/searchbar/SearchBar'

const products = [
{
    id: 1,
    name: '1/4 pollo con papas + ensalada',
    img_url: pollo,
    discount: 0,
    price: 35
},
{
    id: 2,
    name: '1/4 pollo con papas + ensalada',
    img_url: pollo,
    discount: 0,
    price: 35
},
{
    id: 3,
    name: '1/4 pollo con papas + ensalada',
    img_url: pollo,
    discount: 0,
    price: 35
},
{
    id: 4,
    name: '1/4 pollo con papas + ensalada',
    img_url: pollo,
    discount: 0,
    price: 35
},
{
    id: 5,
    name: '1/4 pollo con papas + ensalada',
    img_url: pollo,
    discount: 0,
    price: 35
}
]


const LandingPage = () => {
  return (
    <>
        <SearchBar/>
        <Hero/>
        <section className="products mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((p, index) => (
                <ProductCard key={index} product={p} />
            ))}
        </section> 
    </>
  )
}

export default LandingPage