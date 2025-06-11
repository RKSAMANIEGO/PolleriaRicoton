import React from 'react'
import Hero from '../components/hero/Hero'
import ProductCard from '../components/products/ProductCard'
import pollo from '../../../assets/pollo01.png'

const products = [
{
    name: '1/4 pollo con papas + ensalada',
    img_url: pollo,
    price: 35
},
{
    name: '1/4 pollo con papas + ensalada',
    img_url: pollo,
    price: 35
},
{
    name: '1/4 pollo con papas + ensalada',
    img_url: pollo,
    price: 35
},
{
    name: '1/4 pollo con papas + ensalada',
    img_url: pollo,
    price: 35
},
{
    name: '1/4 pollo con papas + ensalada',
    img_url: pollo,
    price: 35
}
]


const LandingPage = () => {
  return (
    <>
        <Hero/>
        <section className="products mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            {products.map((p, index) => (
            <ProductCard key={index} product={p} />
            ))}
        </section> 
    </>
  )
}

export default LandingPage