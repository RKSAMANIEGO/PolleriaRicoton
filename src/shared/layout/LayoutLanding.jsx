import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Button, Input } from 'antd'
import { MenuOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import SidebarLeftLanding from '../components/sidebar/SidebarLeftLandig'
import CartSidebar from '../components/cart/CartSidebar'

const { Search } = Input

const LayoutLanding = () => {

    return (
        <div className="flex h-screen overflow-hidden relative">
            <SidebarLeftLanding/>

            <main className="flex-1 flex flex-col overflow-auto border p-10">
                <Outlet />
            </main>

            <CartSidebar />
        </div>
    )
}

export default LayoutLanding
