import { Link, useLocation } from "react-router-dom"


const Items = ({icon,text,openSidebar,path}) => {

    const {pathname} = useLocation();
  return (
    <Link to={`/panel/${path}`}>
        <p className={`flex justify-between gap-1 cursor-pointer ${pathname === `/panel/${path}` && 'text-red-600 font-bold' }`}>
            <span>{icon} {openSidebar && text}</span>
            <span className='text-gray-500'>⮞</span>
        </p>
    </Link>
  )
}

export default Items