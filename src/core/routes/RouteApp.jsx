import { Route, Routes } from 'react-router-dom'
import LayoutAdmin from '../../shared/layout/LayoutAdmin'
import AboutMe from '../../modules/admin/dashboard/about/AboutMe'
import LayoutLanding from '../../shared/layout/LayoutLanding'
import HomePage from '../../modules/admin/dashboard/home/HomePage'
import LandingPage from '../../modules/landing/pages/LandingPage'
import PolicyPage from '../../modules/landing/pages/PolicyPage'
import TermPage from '../../modules/landing/pages/TermPage'
import ProductDetailsPage from '../../modules/landing/pages/ProductDetailsPage'

const RouteApp = () => {
  return (
    <Routes>
      {/* <Route path="/landing" element={<LandingPage />} />
      <Route path="/hero" element={<Hero />} />
      <Route path="/login" element={<LoginPage />} /> */}

 
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
          {/* <Route index element={<HomePage/>}/> */}
          <Route path='home' element={<HomePage />}/>
          <Route path='about' element={<AboutMe/>}/>
          <Route path='contact' element={<h1>Contact</h1>}/>
        </Route>

        <Route element={<LayoutLanding/>}>

          <Route path='/' element={<LandingPage/>}/>
          <Route path='/product/:id/detail' element={<ProductDetailsPage/>}/>
          {/* <Route path='/product/:id' element={<ProductDetailsPage/>}/> */}
          <Route path='/policy' element={<PolicyPage/>}/>
          <Route path='/term' element={<TermPage/>}/>
        </Route>
        
        
  

    </Routes>
  );
};

export default RouteApp;
