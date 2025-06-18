import React, { useState, useEffect } from 'react';
import { Layout, Menu, Drawer, Grid } from 'antd';
import { 
  AppstoreOutlined,
  FileTextOutlined,
  HomeOutlined,
  MenuOutlined,
  ReadOutlined,
  SafetyCertificateOutlined,
  LogoutOutlined,
  RightOutlined,
  LeftOutlined
} from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import logo from '../../../../assets/logoPolleria.png';
// import './SidebarAdmin.css'; // Archivo CSS para estilos personalizados

const { Sider } = Layout;
const { useBreakpoint } = Grid;

const SidebarAdmin = ( {categories} ) => {
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  // Manejar clic en elementos del menú
  const handleMenuClick = (e) => {
    if (e.key === 'logout') {
      navigate("/login");
      return;
    }
    navigate(e.key);
    if (isMobile) {
      setCollapsed(false);
    }
  };


  // Configuración de elementos del menú
  const menuItems = [
    { key: '/panel/home', icon: <HomeOutlined />, label: 'Inicio' },
    {
      key: 'sub-menu',
      icon: <MenuOutlined />,
      label: 'Menú',
      children: categories.map((category) => ({
        key: `/panel/menu/${category.name}`,
        label: category.name,
        icon: <img
          src={category.image_url || 'https://via.placeholder.com/20'} 
          alt={category.name} 
          className="w-5 h-5 rounded-full"
        />

      }))
      
    },
    { key: '/panel/categorie', icon: <AppstoreOutlined />, label: 'Categorias' },
    { key: '/panel/logo', icon: <SafetyCertificateOutlined />, label: 'Logo' },
    { key: '/panel/polity', icon: <ReadOutlined />, label: 'Políticas' },
    { key: '/panel/termin', icon: <FileTextOutlined />, label: 'Términos' },
    { 
      key: 'logout', 
      icon: <LogoutOutlined className="rotate-logout" />, 
      label: 'Cerrar Sesión' 
    }
  ];



  // Vista para móviles
  if (isMobile) {
    return (
      <Drawer
        title={
          <div className="flex justify-center">
            <img 
              src={logo} 
              alt="logo" 
              className="sidebar-logo"
            />
          </div>
        }
        placement="left"
        onClose={() => setCollapsed(false)}
        open={collapsed}
        className="admin-drawer"
      >
        <Menu
          mode="inline"
          defaultOpenKeys={[location.pathname]}
          onClick={handleMenuClick}
          items={menuItems}
          className="admin-mobile-menu"
        />
      </Drawer>
    );
  }

  // Vista para escritorio
  return (
    <div className="relative">
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute -right-3 top-16 bg-white cursor-pointer p-1.5 rounded-full shadow-lg border-2 border-gray-200 hover:scale-105 transition-transform z-10"
      >
        {collapsed ? (
          <RightOutlined style={{ color: '#4b5563', fontSize: '14px' }} />
        ) : (
          <LeftOutlined style={{ color:  '#4b5563', fontSize: '14px' }} />
        )}
      </button>
      <Sider
        collapsed={collapsed}
        width={250}
        theme="light"
          className="h-screen shadow-lg flex flex-col sticky top-0"
      >
        <div className="p-4 py-8 flex-shrink-0 flex justify-center">
          <a href="/">
            <img src={logo} className="rounded-full" alt="logo" width="80px" />
          </a>
        </div>
        
        <Menu
          mode="inline"
          defaultOpenKeys={[location.pathname]}
          onClick={handleMenuClick}
          items={menuItems}
          className="admin-desktop-menu"
        />
      </Sider>
    </div>
  );
};

export default SidebarAdmin;