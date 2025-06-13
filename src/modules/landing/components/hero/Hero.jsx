import React, { useState } from 'react'
import logo from '../../../../assets/banner.png'
import { InstagramOutlined, FacebookOutlined, TikTokOutlined } from '@ant-design/icons'

const categoriesData = [
  { id: 1, icon: '🗂️', name: 'Todo', products: 18 },
  { id: 2, icon: '🍗', name: 'Pollos', products: 18 },
  { id: 3, icon: '🍔', name: 'Combos', products: 18 },
  { id: 4, icon: '🥤', name: 'Bebidas', products: 18 },
  { id: 5, icon: '🍲', name: 'Sopas', products: 18 },
]

const Hero = () => {
  const [selectedCategory, setSelectedCategory] = useState(null)

  return (
    <div className="bg-[#FFF1F2] px-4 md:px-8 lg:px-16 ">
      {/* Banner con imagen y footer */}
      <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8">
        {/* Imagen del banner */}
        <img
          src={logo}
          alt="Banner restaurante"
          className="w-full h-auto object-cover"
        />

        {/* Footer del banner */}
        <footer className="flex flex-col md:flex-row">
          {/* Parte blanca izquierda */}
          <div className="relative bg-white text-gray-800 flex flex-col md:flex-row md:items-center gap-3 md:gap-6 p-4 md:p-6 md:w-7/12">
            {/* Badge centrado y sobresaliendo */}
            <span className="absolute left-1/2 transform -translate-x-1/2 -top-6 bg-[#E63946] text-white px-4 py-1 rounded-t-lg font-semibold text-sm z-10">
              Nos ubicamos
            </span>
            {/* Contenido: iconos y texto */}
            <div className="flex flex-col gap-1">
              <p className="flex items-center gap-2 text-sm">
                <span className="text-[#E63946] text-lg">📍</span>
                Av. La Merced N°526 - Carhuaz
              </p>
              <p className="flex items-center gap-2 text-sm">
                <span className="text-[#E63946] text-lg">🕙</span>
                Atendemos de 5 pm a 10 pm
              </p>
            </div>
          </div>

          {/* Parte roja derecha: flex-1 para ocupar resto en md+ */}
          <div className="bg-[#E63946] text-white p-4 md:p-6 flex flex-row items-center justify-between gap-4 md:flex-1">
            {/* Iconos sociales */}
            <div className="flex gap-3">
              {[<InstagramOutlined />, <FacebookOutlined />, <TikTokOutlined />].map(
                (icon, idx) => (
                  <span
                    key={idx}
                    className="bg-white text-[#E63946] w-8 h-8 rounded-full flex items-center justify-center text-lg"
                  >
                    {icon}
                  </span>
                )
              )}
            </div>
            {/* Botón llamar */}
            <button className="bg-[#D62828] hover:bg-[#F77F00] text-white font-bold py-2 px-6 rounded-full transition">
              Llamar
            </button>
          </div>
        </footer>
      </div>

      {/* Sección de categorías */}
      {/* <section className="mb-5">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Categorías</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {categoriesData.map((item) => {
            const active = selectedCategory?.id === item.id
            return (
              <button
                key={item.id}
                onClick={() => setSelectedCategory(item)}
                className={
                  'flex flex-col items-center justify-center bg-white rounded-xl p-4 cursor-pointer shadow-sm border focus:outline-none focus:ring-2 focus:ring-offset-1 ' +
                  (active
                    ? 'bg-[#E63946] text-white border-transparent'
                    : 'border-gray-200 hover:scale-95 transform transition')
                }
              >
                <div className="text-2xl">{item.icon}</div>
                <div className="font-semibold mt-2">{item.name}</div>
                <div className="text-sm mt-1">
                  {item.products} productos
                </div>
              </button>
            )
          })}
        </div>
      </section> */}
    </div>
  )
}

export default Hero
