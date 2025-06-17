import {AppstoreOutlined, FileTextOutlined, HomeOutlined, LeftOutlined, LogoutOutlined, MenuOutlined, MoonOutlined, ReadOutlined, SafetyCertificateOutlined, SunOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'
import { useState } from 'react'
import logho from '../../../../assets/logoPolleria.png'
import Li from '../../../../shared/components/listas/Li';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../../../../core/store/Theme/ThemeContext';
import '../../../../shared/styles/sidebar.css'
import Details from '../../../../shared/components/listas/Details';
import Items from '../../../../shared/components/listas/Items';
import AnimationIn from '../../../../shared/animations/AnimationIn'

const SidebarAdmin = () => {

  const [openSidebar,setOpenSidebar] = useState(true);
  const navigate = useNavigate();
  const {isDark,toogleTheme} = useTheme();
  const handleLogOut = ()=> navigate("/login");

  return (

      <aside  className={`relative  ${isDark ? "bg-[#f12828] text-white":" bg-white"} ${openSidebar ? 'w-[15%]' :' w-[6%]'}` }>
          <LeftOutlined className={`absolute top-[13%] -right-[15px]  p-[8px] rounded-full ${!openSidebar && 'rotate-[180deg]'}   ${isDark ? "bg-[#e2acb8] text-white" : " bg-white text-black"} `} onClick={()=>setOpenSidebar(!openSidebar)}/> 
          
          <div className='flex flex-col justify-between h-[100vh] py-3 px-7'>

          <AnimationIn direction='bottom'>
            <div className='flex justify-center'>
              <img src={logho} alt="logo" className='rounded-full w-[50%] min-w-[40px]'/>
            </div>
          </AnimationIn>

            <div className='flex flex-col gap-8'>
              <Items icon={<HomeOutlined/>} openSidebar={openSidebar} text='Inicio' path="home" />

              <Details icon={<MenuOutlined/>} openSidebar={openSidebar} text='Menú' path='menu'>
                <Li name="Pollos" isOpen={openSidebar} path='chicken'/>
                <Li name="Combos" isOpen={openSidebar} path='combos'/>
              </Details>

              <Items icon={<AppstoreOutlined/>} openSidebar={openSidebar} text='Categorias' path="categorie"/>
              <Items icon={<SafetyCertificateOutlined/>} openSidebar={openSidebar} text='Logo' path="logo"/>
              <Items icon={<ReadOutlined/>} openSidebar={openSidebar} text='Politicas' path="polity"/>
              <Items icon={<FileTextOutlined/>} openSidebar={openSidebar} text='Terminos' path="termin"/>
            </div>

            
            <div className={`flex justify-center ${openSidebar ? 'gap-5' : 'gap-2'}`}>

              {/* isDark ? 
              <SunOutlined  className='cursor-pointer text-yellow-600' onClick={()=>toogleTheme(!isDark)}/> : 
              <MoonOutlined className='cursor-pointer text-blue-600' onClick={()=>toogleTheme(!isDark)}/>  
              */}

              <Tooltip title="Cerrar Sesión"> 
                    <LogoutOutlined className='cursor-pointer rotate-[180deg] text-gray-900' onClick={handleLogOut}/>
              </Tooltip>
            </div>
      
          </div>
      </aside>

  )
}

export default SidebarAdmin