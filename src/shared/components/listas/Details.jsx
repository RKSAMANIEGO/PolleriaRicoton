import { Link, useLocation } from "react-router-dom"

const Details = ({openSidebar, text , icon ,children,path}) => {

  const {pathname} = useLocation();
  return (

        <details className="flex flex-col">    
              <summary className={`${pathname === `/panel/${path}` && 'text-red-600 font-bold'}`}>
                {icon} {openSidebar && <Link to={`/panel/${path}`}>{text}</Link>}
              </summary>
                <ul className='flex flex-col gap-5 pl-2 pt-5 max-h-56 overflow-auto scrollbar-hide'> 
                    {children}
                </ul>     
        </details>
  
  )
}

export default Details