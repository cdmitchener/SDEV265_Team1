import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header";
import Featured from "../../components/featured/Featured";
import MovieList from "../../components/movieList/MovieList";
import ComingSoon from "../../components/comingSoon/ComingSoon";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import "./home.css"

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="homeContainer">
        <Featured/>
        <h1 className="homeTitle">Browse by genre</h1>
        <MovieList/>
        <h1 className="comingSoon">Movies coming soon</h1>
        <ComingSoon/>
        <MailList/>
      </div>
      <div className="concessions">Something here</div>
      <div className="footer">
        <Footer/>
      </div>
    </div>
  )
}

export default Home