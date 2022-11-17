import "./list.css"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import SearchItem from "../../components/searchItem/SearchItem"
import Footer from '../../components/footer/Footer'
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom"
import { useState } from "react"
import DatePicker from "react-datepicker";
import { setHours, setMinutes} from "date-fns";


const List = () => {

  const location = useLocation();
  const [title, setTitle] = useState(location.state.title);
  const [startDate, setStartDate] = useState(location.state.startDate);
  const [options, setOptions] = useState(location.state.options);

  const { data, loading, error, reFetch } = useFetch(`/movies?title=${title}`);

  const handleClick = () => {
    reFetch();
  }

  return (
    <div>
      <Navbar />
      <Header type="list"/>
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Title</label>
              <input type="text" placeholder={title}/>
            </div>
            <div className="lsItem">
              <label>Date & Time</label>
              <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              showTimeSelect
              includeTimes={[
                setHours(setMinutes(new Date(), 0), 9),
                setHours(setMinutes(new Date(), 0), 10),
                setHours(setMinutes(new Date(), 0), 11),
                setHours(setMinutes(new Date(), 0), 12),
                setHours(setMinutes(new Date(), 0), 13),
                setHours(setMinutes(new Date(), 0), 14),
                setHours(setMinutes(new Date(), 0), 15),
                setHours(setMinutes(new Date(), 0), 16),
                setHours(setMinutes(new Date(), 0), 17),
                setHours(setMinutes(new Date(), 0), 18),
                setHours(setMinutes(new Date(), 0), 19),
                setHours(setMinutes(new Date(), 0), 20),
                setHours(setMinutes(new Date(), 0), 21),
                setHours(setMinutes(new Date(), 0), 22),
                setHours(setMinutes(new Date(), 0), 23),
              ]}
              dateFormat="MMMM d, yyyy h:mm aa"
              className="date"
            />
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult(s)</span>
                  <input type="number" min={1} className="lsOptionInput" placeholder={options.adults}/>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Child(ren)</span>
                  <input type="number" min={0} className="lsOptionInput" placeholder={options.children}/>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Rating</span>
                  <select className="lsOptionSelect">
                    <option value="All">All</option>
                    <option value="G">G</option>
                    <option value="PG">PG</option>
                    <option value="PG13">PG13</option>
                    <option value="R">R</option>
                    <option value="NC17">NC17</option>
                  </select>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Genre</span>
                  <select className="lsOptionSelect">
                    <option value="all">All</option>
                    <option value="Action">Action</option>
                    <option value="Drama">Drama</option>
                    <option value="Romance">Romance</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Family">Family</option>
                    <option value="Scifi">Scifi</option>
                    <option value="Horror">Horror</option>
                  </select>
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Theater Type</span>
                  <select className="lsOptionSelect">
                    <option value="all">All</option>
                    <option value="standard">Standard</option>
                    <option value="imax">Imax</option>
                  </select>
                </div>
              </div>
            </div>
            </div>
            <button onClick={handleClick}>SEARCH</button>
          </div>
          <div className="listResult">
            {loading ? "Loading results..." : <>
            {data.map(item=>(
              <SearchItem item={item} key={item._id}/>
            ))}
            </>}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default List