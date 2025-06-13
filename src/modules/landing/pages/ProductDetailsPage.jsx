import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom'
import { ArrowLeftOutlined } from '@ant-design/icons'
import pollo from '../../../assets/pollo01.png'
import SearchBar from '../components/searchbar/SearchBar'

const ProductDetailsPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const location = useLocation()
  const [product, setProduct] = useState(null)
  const [recommendations, setRecommendations] = useState([])

  useEffect(() => {
    if (location.state && location.state.product) {
      // Si vino el objeto por state, lo usamos directamente
      setProduct(location.state.product)
    } else {
      // Sino, hacer fetch o cargar según el id:
      // Ejemplo: fetch(`/api/products/${id}`).then(...)
      // Por ahora simulamos:
      setProduct({
        id,
        title: 'Ejemplo de Producto',
        description:
          'Descripción larga del producto. Aquí puedes mostrar detalles relevantes, características, ingredientes, etc.',
        imageUrl: pollo,
        price: '$12.99',
      })
    }

    // Simular recomendaciones: podrías basarte en categoría, tags, etc.
    const mocks = Array.from({ length: 4 }, (_, i) => ({
      id: `${id}-rec-${i}`,
      title: `Recomendación ${i + 1}`,
      imageUrl: pollo,
      price: `$${(10 + i * 2).toFixed(2)}`,
    }))
    setRecommendations(mocks)
  }, [id, location.state])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Cargando...</p>
      </div>
    )
  }

  return (
    <main className="container mx-auto p-5  md:px-10 lg:px-14">
      {/* SearchBar */}
      <SearchBar />

      {/* Botón Regresar */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 mb-6"
      >
        <ArrowLeftOutlined />
        <span className="text-sm">Regresar</span>
      </button>

      {/* Contenido principal */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Detalle (izquierda) */}
        <section className="md:w-3/5 bg-white p-6 rounded-lg shadow">
          <div className="bg-gray-100 p-4 rounded-lg mb-6 flex justify-center">
            <img
              src={product.imageUrl || product.img_url}
              alt={product.title || product.name}
              className="max-w-full h-auto"
              style={{ maxHeight: '350px' }}
            />
          </div>
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold">
              {product.title || product.name}
            </h1>
            {(product.price || product.price) && (
              <p className="text-xl text-red-600 font-medium">
                {product.price}
              </p>
            )}
            <p className="text-gray-700 text-base leading-relaxed">
              {product.description || product.desc || 'Sin descripción.'}
            </p>
            <button
              className="mt-4 bg-red-600 hover:bg-red-700 text-white rounded-lg px-4 py-2 transition"
              onClick={() => {
                // Podrías reutilizar tu contexto de carrito:
                // addToCart(product)
              }}
            >
              Agregar al Carrito
            </button>
          </div>
        </section>

        {/* Recomendaciones (derecha) */}
        <aside className="md:w-2/5">
          <h2 className="text-xl font-semibold mb-4">Recomendaciones</h2>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            {recommendations.slice(0, 4).map((rec) => (
              <div
                key={rec.id}
                className="bg-white rounded-lg shadow p-4 flex flex-col cursor-pointer"
                onClick={() =>
                  navigate(`/product/${rec.id}/detail`, { state: { product: rec } })
                }
              >
                <div className="bg-gray-100 p-3 rounded mb-3 flex justify-center">
                  <img
                    src={rec.imageUrl}
                    alt={rec.title}
                    className="max-w-full h-auto"
                    style={{ maxHeight: '120px' }}
                  />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-gray-800">
                      {rec.title}
                    </h3>
                    {rec.price && (
                      <p className="text-sm text-red-600 font-medium">
                        {rec.price}
                      </p>
                    )}
                  </div>
                  <button
                    className="mt-3 bg-red-600 hover:bg-red-700 text-white text-xs rounded-lg px-2 py-1 transition"
                    onClick={(e) => {
                      e.stopPropagation()
                      // addToCart(rec)
                    }}
                  >
                    Agregar
                  </button>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </main>
  )
}

export default ProductDetailsPage
