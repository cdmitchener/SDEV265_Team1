import "./featured.css";
import useFetch from "../../hooks/useFetch";
import { faImages } from "@fortawesome/free-solid-svg-icons";

const Featured = () => {

  const { data, loading, error } = useFetch("/movies?featured=true&limit=6");

  console.log(data);

  const images=[
    "https://upload.wikimedia.org/wikipedia/en/a/a9/Black_Adam_%28film%29_poster.jpg",
    "https://upload.wikimedia.org/wikipedia/en/e/e8/Ticket_to_Paradise_poster.jpg",
    "https://upload.wikimedia.org/wikipedia/en/d/df/Call_Jane_poster.jpg",
    "https://upload.wikimedia.org/wikipedia/en/d/d5/Halloween_ends_poster.jpg",
    "https://upload.wikimedia.org/wikipedia/en/7/7f/Smile_%282022_film%29.jpg",
    "https://upload.wikimedia.org/wikipedia/en/3/39/Lyle%2C_Lyle%2C_Crocodile_%28film%29.jpg"
];

  return (
    <div className="featured">
      {loading ? (
        "Loading, please wait..."
        ) : (
        <>
          {data && images.map((img,i)=>(
          <div className="featuredItem" key={i}>
            <img
              src={img}
              alt="Black Adam"
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h2>{data[i]?.title}</h2>
              <p>{data[i]?.length} | {data[i]?.rating}</p>
            </div>
          </div>
          ))}
          </>)}
    </div>
  );
};

export default Featured;