import "./movie.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import useFetch from "../../hooks/useFetch"
import Reserve from "../../components/reserve/Reserve"
import { useContext, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faCircleXmark, faCircleChevronLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons"
import { useLocation, useNavigate } from "react-router-dom"
import { SearchContext } from "../../context/SearchContext"
import { AuthContext } from "../../context/AuthContext"

export const Movie = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const { data, loading, error } = useFetch(`/movies/find/${id}`);
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const { startDate, options } = useContext(SearchContext);

  // const images = [
  //   {
  //     src: "https://deadline.com/wp-content/uploads/2022/10/MCDBLAD_WB026.jpg?w=681&h=383&crop=1"
  //   },
  //   {
  //     src: "https://bostonglobe-prod.cdn.arcpublishing.com/resizer/VcNxqXDg9jb0NUoSDrn64NggiEs=/1024x0/cloudfront-us-east-1.images.arcpublishing.com/bostonglobe/WOJO5BBGGZT65M5SSLO4AEDF24.jpg"
  //   },
  //   {
  //     src: "https://i.guim.co.uk/img/media/eb0944b356535e157746ca02dee6fb87c507946c/0_0_1920_769/master/1920.jpg?width=880&quality=85&dpr=1&s=none"
  //   },
  //   {
  //     src: "https://images.seattletimes.com/wp-content/uploads/2022/10/10182022_Adam_150102.jpg?d=2040x910"
  //   },
  //   {
  //     src: "https://images.seattletimes.com/wp-content/uploads/2022/10/10182022_Adam_150107.jpg?d=2040x947"
  //   },
  // ];

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

  const handleClick = () => {
    if(user){
      setOpenModal(true)
    }else{
      navigate("/login")
    }
  }

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      {loading ? (
        "Loading, please wait..."
      ) : (
        <div className="movieContainer">
          {open && (
            <div className="slider">
              <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
              <FontAwesomeIcon icon={faCircleChevronLeft} className="arrow" onClick={()=>handleMove("l")}/>
              <div className="sliderWrapper">
                <img src={data.images[slideNumber]} alt="" className="sliderImg" />
              </div>
              <FontAwesomeIcon icon={faCircleChevronRight} className="arrow" onClick={()=>handleMove("r")}/>
            </div>
          )}
          <div className="movieWrapper">
            <button className="purchaseTix">Purchase Tickets</button>
            <h1 className="movieTitle">{data.title}</h1>
            <div className="runtime-rating">
              <FontAwesomeIcon icon={faClock} />
              <span>{data.length}&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;{data.rating}</span>
            </div>
            <div className="movieImages">
              {data.images?.map((image,i) => (
                <div className="movieImgWrapper">
                  <img onClick={()=>handleOpen(i)} src={image} alt="" className="movieImg" />
                </div>
              ))}
            </div>
            <div className="movieDetails">
              <div className="movieDetailsText">
                <h2 className="starring">Starring: {data.starring}</h2>
                  <p className="movieDesc">
                    {data.summary}
                  </p>
              </div>
              <div className="movieDetailsTickets">
                For {options.adults} adult(s) and {options.children} child(ren)
                <button onClick={handleClick}>Purchase Tickets</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {openModal && <Reserve setOpen={setOpenModal} movieId={id}/>}
      <Footer />
    </div>
  )
}

export default Movie
