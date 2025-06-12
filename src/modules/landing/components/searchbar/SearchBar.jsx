import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Search from 'antd/es/transfer/search'
import { useApp } from '../../../../core/store/App/AppProvider'
import { useCart } from '../../../../shared/components/cart/CartContext'

const SearchBar = () => {

  const { toggleSidebar } = useApp();
  const { toggleCart } = useCart();

  return (
    <div className="space-y-5 pb-5">
        <h1 className="font-bold text-2xl">Bienvenido</h1>
        <div className="flex gap-2 h-10">
            <button
                className='border w-10 rounded-lg bg-white hover:bg-slate-50'
                onClick={() => toggleSidebar()}
            >
              < MenuOutlined/>
            </button>
            <Search placeholder="Buscar..." />
            <button
                className='border w-10 rounded-lg bg-white hover:bg-slate-50'
                onClick={() => toggleCart()}
            >
                <ShoppingCartOutlined/>
            </button>
        </div>
    </div>
  )
}

export default SearchBar