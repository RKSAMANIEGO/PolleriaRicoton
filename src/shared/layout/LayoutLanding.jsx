import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Button, Input } from 'antd'
import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import SidebarLeftLanding from '../components/sidebar/SidebarLeftLandig'
import { useCart } from '../components/cart/MockCartContext'
import CartSidebar from '../components/cart/CartSidebar'

const { Search } = Input

const LayoutLanding = () => {
  const { setIsCartOpen } = useCart()

  const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="flex h-screen overflow-hidden">
            <SidebarLeftLanding
                collapsed={isMenuOpen}
            />

            <div className="flex-1 flex flex-col transition-all duration-300 mx-10">
                <div className="p-5 border-b space-y-5">
                    <h1 className="font-bold text-2xl">Bienvenido</h1>
                    <div className="flex gap-2">
                        <Button
                            type="default"
                            icon={<MenuOutlined />}
                            onClick={() => setIsMenuOpen(prev => !prev)}
                        />
                        <Search placeholder="Buscar..." />
                        <Button
                            type="default"
                            icon={<ShoppingCartOutlined />}
                            onClick={() => setIsCartOpen(prev => !prev)}
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-auto p-5">
                    <Outlet />
                </div>
            </div>

            <CartSidebar />
           
        </div>
    )
}

export default LayoutLanding
