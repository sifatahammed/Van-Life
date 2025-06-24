import {Link} from "react-router-dom"

export default function Nav(){
    return(
        <header>
            <Link className="site-logo" to ='/'>#VanLife</Link>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>        
      </header>

    )
}