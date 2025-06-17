import { Route, Routes , Outlet } from 'react-router-dom'
import LoginPage from '../../modules/admin/auth/LoginPage'
import LayoutAdmin from '../../shared/layout/LayoutAdmin'
import ChickenPage from '../../modules/admin/dashboard/Menu/ChickenPage'
import HomePage from '../../modules/admin/dashboard/home/HomePage'
import ComboPage from '../../modules/admin/dashboard/Menu/ComboPage'
import CategoriePage from '../../modules/admin/dashboard/Categories/CategoriePage'
import LogoPage from '../../modules/admin/dashboard/Logo/LogoPage'
import PoliticPage from '../../modules/admin/dashboard/Politic/PoliticPage'
import TermPage from '../../modules/admin/dashboard/Term/TermPage'


const RouteApp = () => {
  return (

    <Routes>
        <Route path='login' element={<LoginPage/>}/>

        <Route path='panel' element={<LayoutAdmin/>}>
          <Route index element={<HomePage/>}/>
          
          <Route path='home' element={<HomePage/>}/>

          <Route path='menu' element={<Outlet/>}>
              <Route index element={<ChickenPage/>}/>
              <Route path='chicken' element={<ChickenPage/>}/>
              <Route path='combos' element={<ComboPage/>}/>
          </Route>
          
          <Route path='categorie' element={<CategoriePage/>}/>
          <Route path='logo' element={<LogoPage/>}/>
          <Route path='polity' element={<PoliticPage/>}/>
          <Route path='termin' element={<TermPage/>}/>
        </Route>
  

    </Routes>
 
  )
}

export default RouteApp