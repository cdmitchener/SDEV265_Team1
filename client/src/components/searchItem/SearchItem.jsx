import "./searchItem.css"
import { Link } from "react-router-dom"

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
        <img src={item.images[0]} alt="Movie poster" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">{item.title}</h1>
            <span className="rating">{item.rating}</span>
            <span className="genre">{item.genre}</span>
            <span className="theaterType">{item.theaters[0]}</span>
        </div>
        <div className="siDetails">
            <div className="siSummary">
                Summary
            </div>
            <div className="siSummaryDetails">
                <span>{item.summary}</span>
                <Link to={`/movies/${item._id}`} style={{color:"inherit", textDecoration:"none"}}>
                    <button>Visit Page</button>
                </Link>
                <button>Purchase Tickets</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem