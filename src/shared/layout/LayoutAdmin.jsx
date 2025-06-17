import { Outlet } from 'react-router-dom'
import HeaderAdmin from '../../modules/admin/dashboard/Main/HeaderAdmin'
import SidebarAdmin from '../../modules/admin/dashboard/Main/SidebarAdmin'
import { useTheme } from '../../core/store/Theme/ThemeContext'
import { useEffect, useState } from 'react'
import { getCategories } from '../services/CategoryService'

const LayoutAdmin= () => {

  const [categoriesData, setcategoriesData] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      setcategoriesData(categories);
    }    
  
    fetchCategories();
  }, [])
  

  return (
    <div className={`flex bg-[#f4eed9] text-black h-[100dvh]`}>
        <SidebarAdmin categories={categoriesData}/>
        
        <div className='w-full bg-[#ffefef]'>
            <HeaderAdmin/>
            <div className={`px-10 py-7 my-3 mx-7 bg-white text-black overflow-auto h-[85dvh] rounded-2xl`}>
                  <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default LayoutAdmin