import "./movieList.css";
import useFetch from "../../hooks/useFetch";

const MovieList = () => {
    const { data, loading, error } = useFetch("/movies/countByGenre");

    const images=[
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/230086/SavageSalvation27x40pstrlores.jpg",
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/230081/Whale_Print_Payoff_1-Sheet_7.jpg",
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/230109/EN-US_CWY_Main_Vertical_27x40_RGB_PRE.jpg",
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/229237/VNT_Tsr1Sheet1_RBG3SM.jpg",
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/227301/PIB_Adv1Sheet3_GoodEvil_RGB_1.jpg",
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/148856/CORAL_1SHT_DIGITAL_PAYOFF_sRGB_V4.jpg",
        "https://images.fandango.com/ImageRenderer/200/0/redesign/static/img/default_poster.png/0/images/masterrepository/Fandango/230189/BhediyaMainPoster.jpg"
    ];
  return (
    <div className="mList">
        {loading ? (
            "Loading, please wait..."
            ) : (
            <>
                {data &&
                    images.map((img,i)=>(
                        <div className="mListItem" key={i}>
                            <img
                             src={img}
                             alt="Genre"
                             className="mListImg"
                            />
                            <div className="mListTitles">
                                <h1>{data[i]?.type}</h1>
                                <h2>{data[i]?.count} movies</h2>
                            </div>
                        </div>
                    ))}
            </>
        )}
    </div>
  );
};

export default MovieList