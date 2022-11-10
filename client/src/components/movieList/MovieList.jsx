import "./movieList.css"

function MovieList() {
  return (
    <div className="mList">
        <div className="mListItem">
            <img src="https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/230086/SavageSalvation27x40pstrlores.jpg" alt="Action genre" className="mListImg" />
            <div className="mListTitles">
                <h1>Action</h1>
                <h2>5 movies</h2>
            </div>
        </div>
        <div className="mListItem">
            <img src="https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/230081/Whale_Print_Payoff_1-Sheet_7.jpg" alt="Drama genre" className="mListImg" />
            <div className="mListTitles">
                <h1>Drama</h1>
                <h2>4 movies</h2>
            </div>
        </div>
        <div className="mListItem">
            <img src="https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/230109/EN-US_CWY_Main_Vertical_27x40_RGB_PRE.jpg" alt="Romance genre" className="mListImg" />
            <div className="mListTitles">
                <h1>Romance</h1>
                <h2>3 movies</h2>
            </div>
        </div>
        <div className="mListItem">
            <img src="https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/229237/VNT_Tsr1Sheet1_RBG3SM.jpg" alt="Comedy genre" className="mListImg" />
            <div className="mListTitles">
                <h1>Comedy</h1>
                <h2>2 movies</h2>
            </div>
        </div>
        <div className="mListItem">
            <img src="https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/227301/PIB_Adv1Sheet3_GoodEvil_RGB_1.jpg" alt="Family genre" className="mListImg" />
            <div className="mListTitles">
                <h1>Family</h1>
                <h2>4 movies</h2>
            </div>
        </div>
        <div className="mListItem">
            <img src="https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/148856/CORAL_1SHT_DIGITAL_PAYOFF_sRGB_V4.jpg" alt="Sci-fi genre" className="mListImg" />
            <div className="mListTitles">
                <h1>Sci-Fi</h1>
                <h2>1 movie</h2>
            </div>
        </div>
        <div className="mListItem">
            <img src="https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/230189/BhediyaMainPoster.jpg" alt="Horror genre" className="mListImg" />
            <div className="mListTitles">
                <h1>Horror</h1>
                <h2>1 movie</h2>
            </div>
        </div>
    </div>
  )
}

export default MovieList