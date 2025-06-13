
import { Outlet } from 'react-router-dom'
import SidebarLeftLanding from '../components/sidebar/SidebarLeftLandig'
import CartSidebar from '../components/cart/CartSidebar'

const LayoutLanding = () => {

    return (
        <div className="flex h-screen overflow-hidden relative">
            <SidebarLeftLanding/>

            <main className="flex-1 flex flex-col overflow-auto border">
                <Outlet />
            </main>

            <CartSidebar />
        </div>
    )
}

export default LayoutLanding
