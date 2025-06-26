import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans.jsx"
import NotFound404 from "./pages/NotFound404.jsx"
import VanDetails from "./pages/Van-Detail.jsx"
import Dashboard from "./pages/host/Dashboard.jsx"
import Reviews from "./pages/host/reviews.jsx"
import Income from "./pages/host/income.jsx"
import VansList from "./pages/host/VansList.jsx"
import Details from "./pages/host/Details.jsx"
import Price from "./pages/host/price.jsx"
import Photo from "./pages/host/Photo.jsx"
import "./assets/server.js"
import Layout from "./components/layout.jsx"
import vansloader from "./components/vansloader.jsx"
import HostLayout from "./components/hostlayout.jsx"
import HostVanLayout from "./components/HostVanLayout.jsx"

const router = createBrowserRouter(createRoutesFromElements(
  <Route element = {<Layout/>}>
          <Route path='/' element= {<Home />}/>
          <Route path='/host' element= {<HostLayout />}>
            <Route path='' element= {<Dashboard />} />           
            <Route path='reviews' element= {<Reviews />}/>
            <Route path='income' element= {<Income />}/>
            <Route path='vans' element= {<VansList />}/>
            <Route path='vans/:id' element= {<HostVanLayout />}>
              <Route index element= {<Details />}/>
              <Route path='price' element= {<Price />}/>
              <Route path='photo' element= {<Photo />}/>     
            </Route>
          </Route>
          <Route path='about' element= {<About />}/>
          <Route path='vans' element= {<Vans/>} loader = {vansloader}/>   
          <Route path='vans/:id' element= {<VanDetails />}/>    
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
