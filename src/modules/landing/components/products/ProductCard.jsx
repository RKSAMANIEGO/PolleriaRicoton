// src/components/products/ProductCard.jsx
import React from 'react'
import { useCart } from '../../../../shared/components/cart/CartContext'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()
  const navigate = useNavigate()

  const handleProductClick = () => {
    navigate(`/product/${product.id}/detail/`, { state: { product } })
  }

  // Formatear precio en soles peruanos
  const formattedPrice = new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN',
    minimumFractionDigits: 2,
  }).format(product.price)

  const onKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleProductClick()
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleProductClick}
      onKeyDown={onKeyDown}
      className="flex flex-col h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 cursor-pointer overflow-hidden"
      aria-label={`Ver detalle de ${product.name}`}
    >
      {/* Imagen */}
      <div className="w-full h-40 sm:h-48 md:h-56 bg-gray-100">
        <img
          src={product.img_url}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Body: nombre y precio y botón */}
      <div className="flex-1 flex flex-col justify-between p-4">
        {/* Nombre y precio */}
        <div>
          <h2 className="font-semibold text-base sm:text-lg text-gray-800">
            {product.name}
          </h2>
          <p className="text-gray-500 mt-1">{formattedPrice}</p>
        </div>

        {/* Botón Agregar al carrito */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            addToCart(product)
          }}
          className="mt-4 bg-red-600 hover:bg-red-700 text-white text-sm font-medium py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-red-500 transition"
          aria-label={`Agregar ${product.name} al carrito`}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  )
}

export default ProductCard
