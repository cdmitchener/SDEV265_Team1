import "./searchItem.css"

const SearchItem = () => {
  return (
    <div className="searchItem">
        <img src="https://upload.wikimedia.org/wikipedia/en/e/e8/Ticket_to_Paradise_poster.jpg" alt="" className="siImg" />
        <div className="siDesc">
            <h1 className="siTitle">Movie</h1>
            <span className="rating">PG-13</span>
            <span className="genre">Action</span>
            <span className="theaterType">Standard</span>
        </div>
        <div className="siDetails">
            <div className="siSummary">
                Summary
            </div>
            <div className="siSummaryDetails">
                <span>Details</span>
                <button>Purchase Tickets</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem