import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Home from "./pages/Home"
import About from "./pages/About"
import Vans, { loader as vansloader} from "./pages/Vans.jsx"
import NotFound404 from "./pages/NotFound404.jsx"
import VanDetails, { loader as vanDetailLoader } from "./pages/Van-Detail.jsx"
import Login, {loader as loginloader, action as actionLogin} from "./pages/Login.jsx"
import Dashboard, { loader as dashboardLoader } from "./pages/host/Dashboard.jsx"
import Reviews from "./pages/host/reviews.jsx"
import Income from "./pages/host/income.jsx"
import VansList, {loader as HostVansList } from "./pages/host/VansList.jsx"
import Details from "./pages/host/Details.jsx"
import Price from "./pages/host/price.jsx"
import Photo from "./pages/host/Photo.jsx"
import "./assets/server.js"
import Layout from "./components/layout.jsx"
import {requireAuth} from "./components/Auth.jsx"
import Error from "./components/Error.jsx"
import HostLayout from "./components/hostlayout.jsx"
import HostVanLayout, {loader as HostVans } from "./components/HostVanLayout.jsx"

const router = createBrowserRouter(createRoutesFromElements(
        <Route element = {<Layout/>}>
          <Route path='/' element= {<Home />}/>          
          <Route path='about' element= {<About />}/>
          <Route path='login' element= {<Login />} 
                  loader = {loginloader} action ={actionLogin}/>
          <Route path='vans' element= {<Vans/>} errorElement= {<Error />} 
                  loader = {vansloader}/>   
          <Route path='vans/:id' element= {<VanDetails />} 
                  loader={vanDetailLoader}/>               
          <Route path='host' element={<HostLayout />} loader={async ({ request }) => requireAuth(request)}>
            <Route index element={<Dashboard />} errorElement={<Error />} 
                  loader={dashboardLoader}/>
            <Route path='reviews' element={<Reviews />} errorElement={<Error />} 
                  loader={async ({ request }) => requireAuth(request)}/>
            <Route path='income' element={<Income />} errorElement={<Error />} 
                  loader={async ({ request }) => requireAuth(request)}/>
            <Route path='vans' element={<VansList />} errorElement={<Error />} 
                  loader={ HostVansList} />
            <Route path='vans/:id' element={<HostVanLayout />} errorElement={<Error />} 
                    loader={HostVans}>
              <Route index element={<Details />}  errorElement={<Error />}
                  loader={async ({ request }) => requireAuth(request)}/>
              <Route path='price' element={<Price />} errorElement={<Error />} 
                    loader={async ({ request }) => requireAuth(request)}/>
              <Route path='photo' element={<Photo />} errorElement={<Error />} 
                    loader={async ({ request }) => requireAuth(request)}/>
            </Route>
          </Route>
          <Route path='*' element= {<NotFound404 />}/>  
        </Route>
))

function App(){
  return(
    <RouterProvider router={router} />
  )
}

createRoot(document.getElementById('root')).render(
    <App />
)
