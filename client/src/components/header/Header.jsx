import {faFilm, faHourglassHalf, faCookieBite, faMapLocationDot} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./header.css"

function Header() {
  return (
    <div className="header">
      <div className="headerContainer">
      
        <div className="headerList">
            <div className="headerListItem">
            <FontAwesomeIcon icon={faFilm} />
            <span>Movies & Showtimes</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faHourglassHalf} />
            <span>Coming Soon</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faCookieBite} />
            <span>Concessions</span>
            </div>
            <div className="headerListItem">
            <span>Film Ratings</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faMapLocationDot} />
            <span>Directions</span>
            </div>
        </div>
      </div>
      <div className="text-box">
        <h1>Discover what it means
        to watch movies like a SUPERHERO.</h1>
      </div>
    </div>
  )
}

export default Header