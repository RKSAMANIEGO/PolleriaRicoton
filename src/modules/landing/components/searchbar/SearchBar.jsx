import { MenuOutlined, SearchOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { useApp } from '../../../../core/store/App/AppProvider'
import { useCart } from '../../../../shared/components/cart/CartContext'

const { Search } = Input

const SearchBar = () => {
  const { toggleSidebar } = useApp()
  const { toggleCart, getCartCount } = useCart()

  return (
    <div className="space-y-5 p-5 md:px-10 lg:px-14">
      <div className="flex items-center justify-between md:hidden">
        <button
          className="border w-10 h-10 rounded-lg bg-white hover:bg-slate-50 flex items-center justify-center"
          onClick={toggleSidebar}
        >
          <MenuOutlined />
        </button>
        <h1 className="font-bold text-xl text-center flex-1">Bienvenido</h1>
        <button
          className="relative border w-10 h-10 rounded-lg bg-white hover:bg-slate-50 flex items-center justify-center"
          onClick={toggleCart}
        >
          <ShoppingCartOutlined />
          {getCartCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#0e9b3d] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {getCartCount()}
            </span>
          )}
        </button>
      </div>
      {/* MÓVIL: buscador en segunda fila */}
      <div className="md:hidden h-12">
        <Input
            prefix={<SearchOutlined className="text-gray-500" />}
            placeholder="Buscar..."
            className="h-full rounded-lg"
        />
      </div>

      {/* DESKTOP: mantiene layout actual */}
      <div className="hidden md:block">
        <h1 className="font-bold text-2xl">Bienvenido</h1>
        <div className="flex gap-2 h-10 mt-2">
        <button
          className="border w-10 rounded-lg bg-white hover:bg-slate-50 flex items-center justify-center"
          onClick={toggleSidebar}
        >
          <MenuOutlined />
        </button>

        <div className="flex-1 h-full">
          <Input
            prefix={<SearchOutlined className="text-gray-500" />}
            placeholder="Buscar..."
            className="h-full rounded-lg"
          />
        </div>

        <button
          className="relative border w-10 rounded-lg bg-white hover:bg-slate-50 flex items-center justify-center"
          onClick={toggleCart}
        >
          <ShoppingCartOutlined />
          {getCartCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#0e9b3d] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {getCartCount()}
            </span>
          )}
        </button>
      </div>
    </div>
    </div>
  )
}

export default SearchBar
