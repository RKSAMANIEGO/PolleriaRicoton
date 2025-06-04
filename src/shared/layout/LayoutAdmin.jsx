import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../../modules/admin/dashboard/Main/HeaderAdmin'
import SidebarAdmin from '../../modules/admin/dashboard/Main/SidebarAdmin'
import { useTheme } from '../../core/store/Theme/ThemeContext'

const LayoutAdmin= () => {

  const {isDark} = useTheme();

  return (
    <div className={`flex bg-[#e2e2e2] text-black h-[100dvh]`}>
        <SidebarAdmin/>
        
        <div className='w-full'>
            <HeaderAdmin/>
            <div className={`px-10 py-7 my-3 mx-7 ${isDark ? "bg-[#f12828] border-t-[1px] border-l-[1px] border-white text-white" :"bg-white text-black"} overflow-auto scrollbar-hide h-[85dvh] rounded-2xl`}>
                  <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default LayoutAdmin