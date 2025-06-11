import React from 'react'
import { Divider, Layout, Menu } from 'antd'
import Logo from '../../../assets/logoPolleria.png' // Ajusta la ruta a tu logo real
import {
  HomeOutlined,
  TagsOutlined,
  FileDoneOutlined,
  SafetyCertificateOutlined,
} from '@ant-design/icons'

const { Sider } = Layout

const SidebarLeftLanding = ({ collapsed }) => {
  return (
    <Sider collapsed={collapsed} width={200} theme="light" className="rounded-r-2xl shadow-xl">
      
      <div  className="p-4 py-8 flex-shrink-0 flex justify-center"> 
        <a href="">
          <img src={Logo} className='rounded-full' alt="logo" width="80px" />
        </a>
      </div>

      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
        {
          key: '1',
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
          key: '4',
          icon: <SafetyCertificateOutlined />,
          label: 'Politicas',
        },
        {
          key: '5',
          icon: <FileDoneOutlined />,
          label: 'Terminos',
        },
      ]}
      />

    </Sider>
  )
}

export default SidebarLeftLanding
