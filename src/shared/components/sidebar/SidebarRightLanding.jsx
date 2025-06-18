import React from 'react'
import { Layout, Menu } from 'antd'
import {
  HomeOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  SettingOutlined,
} from '@ant-design/icons'

const { Sider } = Layout

const SidebarRightLanding = ({ collapsed, setCollapsed }) => {
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      // onCollapse recibe el nuevo estado collapsed: boolean
      onCollapse={(newCollapsed) => setCollapsed(newCollapsed)}
      collapsedWidth={0}
      width={200}
      style={{ background: '#fff' }}
    >
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        style={{ height: '100%', borderRight: 0 }}
      >
        <Menu.Item key="1" icon={<HomeOutlined />}>
          Inicio
        </Menu.Item>
        <Menu.Item key="2" icon={<UserOutlined />}>
          Perfil
        </Menu.Item>
        <Menu.Item key="3" icon={<ShoppingCartOutlined />}>
          Carrito
        </Menu.Item>
        <Menu.SubMenu key="sub1" icon={<SettingOutlined />} title="Ajustes">
          <Menu.Item key="4">Opción A</Menu.Item>
          <Menu.Item key="5">Opción B</Menu.Item>
        </Menu.SubMenu>
      </Menu>
    </Sider>
  )
}

export default SidebarRightLanding
