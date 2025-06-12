import React from 'react'
import { Divider, Layout, Menu } from 'antd'
import Logo from '../../../assets/logoPolleria.png' // Ajusta la ruta a tu logo real
import {
  HomeOutlined,
  TagsOutlined,
  FileDoneOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import { useApp } from '../../../core/store/App/AppProvider'

const { Sider } = Layout

const SidebarLeftLanding = ( ) => {

  const navigate = useNavigate();
  const location = useLocation();

  const { collapsed } = useApp();

  const handleMenuClick = (e) => {
    navigate(e.key);
  };

  return (
    <Sider collapsed={collapsed} width={200} theme="light" className="rounded-r-2xl shadow-xl">
      
      <div  className="p-4 py-8 flex-shrink-0 flex justify-center"> 
        <a href="">
          <img src={Logo} className='rounded-full' alt="logo" width="80px" />
        </a>
      </div>

      <Menu
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        onClick={handleMenuClick}
        items={[
        {
          key: '/',
          icon: <HomeOutlined />,
          label: 'Menu',
        },
        {
          key: '2',
          icon: <TagsOutlined />,
          label: 'Ofertas',
        },
        // Divider visual (no clickeable)
        {
          type: 'group',
          key: 'divider1',
          label: <Divider></Divider>,
        },
        {
          key: '/policy',
          icon: <SafetyCertificateOutlined />,
          label: 'Politicas',
        },
        {
          key: '/term',
          icon: <FileDoneOutlined />,
          label: 'Terminos',
        },
      ]}
      />

    </Sider>
  )
}

export default SidebarLeftLanding
