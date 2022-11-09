import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/a/a9/Black_Adam_%28film%29_poster.jpg"
          alt="Black Adam"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h2>Black Adam</h2>
          <p>2 HR 5 MIN | PG-13</p>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/e/e8/Ticket_to_Paradise_poster.jpg"
          alt="Ticket to Paradise"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h2>Ticket to Paradise</h2>
          <p>1 HR 44 MIN | PG-13</p>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/d/df/Call_Jane_poster.jpg"
          alt="Call Jane"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h2>Call Jane</h2>
          <p>2 HR 1 MIN | R</p>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/d/d5/Halloween_ends_poster.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h2>Halloween Ends</h2>
          <p>1 HR 51 MIN | R</p>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/7/7f/Smile_%282022_film%29.jpg"
          alt="Smile"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h2>Smile</h2>
          <p>1 HR 55 MIN | R</p>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/3/39/Lyle%2C_Lyle%2C_Crocodile_%28film%29.jpg"
          alt="Lyle, Lyle, Crocodile"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h2>Lyle, Lyle, Crocodile</h2>
          <p>1 HR 46 MIN | PG</p>
        </div>
      </div>
    </div>
  );
};

export default Featured;