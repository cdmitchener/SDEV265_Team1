import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
        <div className="fLists">
            <ul className="fList">
                <li className="fListItem">Movies & Showtimes</li>
                <li className="fListItem">Coming Soon</li>
                <li className="fListItem">Concessions</li>
                <li className="fListItem">Film Ratings</li>
                <li className="fListItem">Directions</li>
            </ul>
            <ul className="fList">
                <li className="fListItem">Contact Us</li>
                <li className="fListItem">Terms & Conditions</li>
            </ul>
        </div>
        <div className="fText">Copyright © 2022 Gotham City Cinemas.</div>
    </div>
  )
}

export default Footer