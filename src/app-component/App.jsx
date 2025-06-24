import Nav from "../components/nav.jsx"
import bgImg from "../assets/images/about-hero.png"

export function Home(){
  return(
    <>
        <Nav />
        <div className="home-container">
                                <h1>You got the travel plans, we got the travel vans.</h1>
                                <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                                <Link to="vans">Find your van</Link>
        </div>
    </>
)
}

export function About(){
    return(
        <>
			<Nav />
			<div className="about-page-container">
            <img src={bgImg} className="about-hero-image" />
            <div className="about-page-content">
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch. (Hitch costs extra 😉)</p>
                <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </div>
            <div className="about-page-cta">
                <h2>Your destination is waiting.<br />Your van is ready.</h2>
                <Link className="link-button" to="/vans">Explore our vans</Link>
            </div>
        	</div>
        </>
        
    )
}