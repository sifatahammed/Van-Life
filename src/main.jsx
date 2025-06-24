import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import Home from "./pages/Home"
import About from "./pages/About"

function App(){
  return(
    <BrowserRouter>     
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/about' element= {<About />}/>
      </Routes>    
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
    <App />
)
