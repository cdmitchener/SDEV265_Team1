import {Link} from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <Link to="/">
            <span className="logoImg"></span>
            </Link>
            {/* <span className="logo">Gotham City Cinemas</span> */}
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar