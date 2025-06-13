import React from 'react'
import { Divider, Layout, Menu, Grid, Drawer } from 'antd'
import Logo from '../../../assets/logoPolleria.png'
import {
  HomeOutlined,
  TagsOutlined,
  FileDoneOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { useApp } from '../../../core/store/App/AppProvider'

const { Sider } = Layout
const { useBreakpoint } = Grid

const SidebarLeftLanding = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const screens = useBreakpoint()
  const isMobile = !screens.md  // true si ancho < md (~768px)

  const { collapsed, toggleSidebar } = useApp()

  const handleMenuClick = (e) => {
    navigate(e.key)
    if (isMobile) {
      toggleSidebar() // cerrar Drawer tras seleccionar
    }
  }

  const menuItems = [
    { key: '/', icon: <HomeOutlined />, label: 'Menu' },
    { key: '/ofertas', icon: <TagsOutlined />, label: 'Ofertas' },
    { type: 'group', key: 'divider1', label: <Divider style={{ margin: '8px 0' }} /> },
    { key: '/policy', icon: <SafetyCertificateOutlined />, label: 'Políticas' },
    { key: '/term', icon: <FileDoneOutlined />, label: 'Términos' },
  ]

  if (isMobile) {
    return (
      <Drawer
        title={
          <div className="flex justify-center">
            <a href="/">
              <img src={Logo} className="rounded-full" alt="logo" width="80px" />
            </a>
          </div>
        }
        placement="left"
        onClose={toggleSidebar}     // pasar la referencia, no invocar aquí
        open={collapsed}
      >
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          onClick={handleMenuClick}
          items={menuItems}
        />
      </Drawer>
    )
  }


  return (
    <Sider
      collapsed={collapsed}
      width={200}
      theme="light"
      className="rounded-r-2xl shadow-xl"
      breakpoint="md"
      trigger={null}
    >
      <div className="p-4 py-8 flex-shrink-0 flex justify-center">
        <a href="/">
          <img src={Logo} className="rounded-full" alt="logo" width="80px" />
        </a>
      </div>
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        onClick={handleMenuClick}
        items={menuItems}
      />
    </Sider>
  )
}

export default SidebarLeftLanding
