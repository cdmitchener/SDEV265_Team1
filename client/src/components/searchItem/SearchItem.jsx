import "./searchItem.css"

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
        <img src={item.images[0]} alt="" className="siImg" />
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
                <button>Purchase Tickets</button>
            </div>
        </div>
    </div>
  )
}

export default SearchItem