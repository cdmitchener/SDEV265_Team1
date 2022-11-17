import "./featured.css";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { faImages } from "@fortawesome/free-solid-svg-icons";

const Featured = () => {

  const { data, loading, error } = useFetch("/movies?featured=true&limit=6");

//   const images=[
//     "https://upload.wikimedia.org/wikipedia/en/a/a9/Black_Adam_%28film%29_poster.jpg",
//     "https://www.newdvdreleasedates.com/images/movies/dc-league-of-super-pets-2022.jpg",
//     "https://upload.wikimedia.org/wikipedia/en/e/e8/Ticket_to_Paradise_poster.jpg",
//     "https://upload.wikimedia.org/wikipedia/en/d/df/Call_Jane_poster.jpg",
//     "https://upload.wikimedia.org/wikipedia/en/d/d5/Halloween_ends_poster.jpg",
//     "https://upload.wikimedia.org/wikipedia/en/3/39/Lyle%2C_Lyle%2C_Crocodile_%28film%29.jpg"
// ];

  return (
    <div className="featured">
      {loading ? (
        "Loading, please wait..."
        ) : (
        <>
          {data.map((item) => (
            <Link to={`/movies/${item._id}`} style={{color:"inherit", textDecoration:"none"}}>
              <div className="featuredItem" key={item._id}>
                <img
                  src={item.images[0]}
                  alt="Featured movie poster"
                  className="featuredImg"
                />
                <div className="featuredTitles">
                  <h2>{item.title}</h2>
                  <p>{item.length} | {item.rating}</p>
                </div>
              </div>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default Featured;