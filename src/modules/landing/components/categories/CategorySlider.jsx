
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper/modules'

const categoriesData = [
  { id: 1, icon: '🗂️', name: 'Todo', products: 18 },
  { id: 2, icon: '🍗', name: 'Pollos', products: 18 },
  { id: 3, icon: '🍔', name: 'Combos', products: 18 },
  { id: 4, icon: '🥤', name: 'Bebidas', products: 18 },
  { id: 5, icon: '🍲', name: 'Sopas', products: 18 },
]

const CategorySlider = () => {
  const [selectedId, setSelectedId] = useState(null)

  return (
    <section className="mx-4 pb-5">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">Categorías</h3>

      <div className="block md:hidden">
        <Swiper
          spaceBetween={12}
          slidesPerView={2.2}
          breakpoints={{
            480: { slidesPerView: 3.2 },
            640: { slidesPerView: 4.2 },
          }}
          modules={[Navigation, Pagination]}
        >
          {categoriesData.map((item) => (
            <SwiperSlide key={item.id}>
              <button
                onClick={() => setSelectedId(item.id)}
                className={`
                  w-full rounded-xl p-4 shadow-sm border transition
                  ${selectedId === item.id
                    ? 'bg-red-600 text-white border-transparent'
                    : 'bg-white hover:scale-95 transform'}
                `}
              >
                <div className="text-2xl">{item.icon}</div>
                <div className="font-semibold mt-1">{item.name}</div>
                <div className="text-sm">
                  {item.products} productos
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Tableta y desktop: grilla */}
      <div className="hidden md:grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {categoriesData.map((item) => (
          <button
            key={item.id}
            onClick={() => setSelectedId(item.id)}
            className={`
              flex flex-col items-center justify-center rounded-xl p-4 cursor-pointer shadow-sm border focus:outline-none focus:ring-2 focus:ring-offset-1
              ${selectedId === item.id
                ? 'bg-red-600 text-white border-transparent'
                : 'bg-white hover:scale-95 transform transition'}
            `}
          >
            <div className="text-2xl">{item.icon}</div>
            <div className="font-semibold mt-2">{item.name}</div>
            <div className="text-sm mt-1">
              {item.products} productos
            </div>
          </button>
        ))}
      </div>
    </section>
  )
}

export default CategorySlider
