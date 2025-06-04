import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTheme } from '../../../core/store/Theme/ThemeContext';

const Li = ({name,isOpen,icon,path}) => {
  
  const {pathname} = useLocation(); 
  const {isDark}= useTheme();

  return (
    <Link to={`/panel/${path}`}>
      <li className={`flex gap-1 cursor-pointer transition-transform duration-500 hover:translate-x-3   ${pathname ===`/panel/${path}` && (isDark ? "box-shadow-yellow" :"text-red-700")} `}>
        {icon} 
        {isOpen && name} 
      </li>
    </Link> 
  )
}

export default Li