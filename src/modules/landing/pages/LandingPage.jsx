// src/pages/LandingPage.jsx (o donde corresponda)
import React from 'react'
import Hero from '../components/hero/Hero'
import ProductCard from '../components/products/ProductCard'
import pollo from '../../../assets/pollo01.png'
import SearchBar from '../components/searchbar/SearchBar'
import CategorySlider from '../components/categories/CategorySlider'

const products = [
  {
    id: 1,
    name: '1/4 pollo con papas + ensalada',
    img_url: pollo,
    discount: 0,
    price: 35,
  },
  {
    id: 2,
    name: '1/4 pollo',
    img_url: pollo,
    discount: 0,
    price: 20,
  },
  {
    id: 3,
    name: 'Mostrito',
    img_url: pollo,
    discount: 0,
    price: 35,
  },
  {
    id: 4,
    name: 'Alita',
    img_url: pollo,
    discount: 0,
    price: 48,
  },
  {
    id: 5,
    name: '1/4 pollo con papas + ensalada',
    img_url: pollo,
    discount: 0,
    price: 35,
  },
]

const LandingPage = () => {
  return (
    <>
      <SearchBar />
      <Hero />
      <CategorySlider/>
      <section className="px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  )
}

export default LandingPage
