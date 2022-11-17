import "./movie.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import useFetch from "../../hooks/useFetch"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faCircleXmark, faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons"
import { useLocation } from "react-router-dom"

export const Movie = () => {
  const location = useLocation()
  const id = location.split("/"[2]);
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  // const { data, loading, error } = useFetch(`/movies/${id}`)

  const images = [
    {
      src: "https://deadline.com/wp-content/uploads/2022/10/MCDBLAD_WB026.jpg?w=681&h=383&crop=1"
    },
    {
      src: "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/VcNxqXDg9jb0NUoSDrn64NggiEs=/1024x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/WOJO5BBGGZT65M5SSLO4AEDF24.jpg"
    },
    {
      src: "https://i.guim.co.uk/img/media/eb0944b356535e157746ca02dee6fb87c507946c/0_0_1920_769/master/1920.jpg?width=880&quality=85&dpr=1&s=none"
    },
    {
      src: "https://images.seattletimes.com/wp-content/uploads/2022/10/10182022_Adam_150102.jpg?d=2040x910"
    },
    {
      src: "https://images.seattletimes.com/wp-content/uploads/2022/10/10182022_Adam_150107.jpg?d=2040x947"
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if(direction==="l"){
      newSlideNumber = slideNumber === 0 ? 4 : slideNumber-1
    }else{
      newSlideNumber = slideNumber === 4 ? 0 : slideNumber+1
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="movieContainer">
        {open && <div className="slider">
          <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
          <FontAwesomeIcon icon={faCircleChevronLeft} className="arrow" onClick={()=>handleMove("l")}/>
          <div className="sliderWrapper">
            <img src={images[slideNumber].src} alt="" className="sliderImg" />
          </div>
          <FontAwesomeIcon icon={faCircleChevronRight} className="arrow" onClick={()=>handleMove("r")}/>
        </div>}
        <div className="movieWrapper">
          <button className="purchaseTix">Purchase Tickets</button>
          <h1 className="movieTitle">Black Adam</h1>
          <div className="runtime-rating">
            <FontAwesomeIcon icon={faClock} />
            <span>2 hrs 5 min&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;PG-13</span>
          </div>
          <div className="movieImages">
            {images.map((image,i) => (
              <div className="movieImgWrapper">
                <img onClick={()=>handleOpen(i)} src={image.src} alt="" className="movieImg" />
              </div>
            ))}
          </div>
          <div className="movieDetails">
            <div className="movieDetailsText">
              <h2 className="starring">Starring: Dwayne Johnson, Aldis Hodge, Pierce Brosnan</h2>
                <p className="movieDesc">
                  In ancient Kahndaq, Teth Adam was bestowed the almighty powers of the gods. After using these powers for vengeance, he was imprisoned, becoming Black Adam. Nearly 5,000 years have passed, and Black Adam has gone from man to myth to legend. Now free, his unique form of justice, born out of rage, is challenged by modern-day heroes who form the Justice Society: Hawkman, Dr. Fate, Atom Smasher and Cyclone.
                </p>
            </div>
            <div className="movieDetailsTickets">
              <button>Purchase Tickets</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Movie
