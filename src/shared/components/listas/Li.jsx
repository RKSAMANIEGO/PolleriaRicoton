import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../../core/store/Theme/ThemeContext';
import { FaUtensils } from 'react-icons/fa';

const Li = ({name,isOpen,icon=<FaUtensils/>,path}) => {
  
  const {pathname} = useLocation(); 
  const {isDark}= useTheme();

  console.log(pathname);
  return (
    <Link to={`/panel/menu/${path}`}>
      <li className={`flex items-center gap-1 text-[13px] cursor-pointer transition-transform duration-500 hover:translate-x-1   ${pathname === `/panel/menu/${path}` && (isDark ? "box-shadow-yellow" :"text-red-700")} `}>
        {icon} 
        {isOpen && name} 
      </li>
    </Link> 
  )
}

export default Li