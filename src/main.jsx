import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans.jsx"
import VanDetails from "./pages/Van-Detail.jsx"
import "./assets/server.js"


function App(){
  return(
    <BrowserRouter>     
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/about' element= {<About />}/>
        <Route path='/vans' element= {<Vans />}/>
        <Route path='/vans/:id' element= {<VanDetails />}/>
      </Routes>    
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
    <App />
)
