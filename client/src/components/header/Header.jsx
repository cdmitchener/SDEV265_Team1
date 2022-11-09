import {faFilm, faHourglassHalf, faCookieBite, faMapLocationDot, faCalendarDays, faPerson} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import DatePicker from "react-datepicker";
import { useState } from "react";
import { setHours, setMinutes} from "date-fns";
import "./header.css"
import "react-datepicker/dist/react-datepicker.css";


const Header = ({type}) => {
  const [startDate, setStartDate] = useState(
    // default will be current date at noon
    setHours(setMinutes(new Date(), 0), 12)
  );
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adults: 1,
    children: 0,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev, [name]: operation === "inc" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
      
        <div className="headerList">
            <div className="headerListItem active">
            <FontAwesomeIcon icon={faFilm} />
            <span>Movies & Showtimes</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faHourglassHalf} />
            <span>Coming Soon</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faCookieBite} />
            <span>Concessions</span>
            </div>
            <div className="headerListItem">
            <span>Film Ratings</span>
            </div>
            <div className="headerListItem">
            <FontAwesomeIcon icon={faMapLocationDot} />
            <span>Directions</span>
            </div>
        </div>
        <h1 className="header-title">Discover what it means to watch movies like a SUPERHERO.</h1>
        <p className="header-desc">Become a member today with a free Gotham City Cinemas account</p>
        <button className="header-btn">Sign in / Register</button>
        { type !== "list" &&
          <>
          <div className="headerSearch">
          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faFilm} className="headerIcon"/>
            <input type="text" placeholder="What movie would you like to see?" className="headerSearchInput" />
          </div>
          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faCalendarDays} className="headerIcon"/>
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
          </div>
          <div className="headerSearchItem">
          <FontAwesomeIcon icon={faPerson} className="headerIcon"/>
          <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adults} adult(s) | ${options.children} child(ren)`}</span>
              {openOptions && <div className="options">
                <div className="optionItem">
                  <span className="optionText">Adults</span>
                  <div className="optionCounter">
                    <button
                    disabled={options.adults <= 1}
                    className="optionCounterButton" onClick={()=>handleOption("adults", "dec")}>-</button>
                    <span className="optionCounterNumber">{options.adults}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("adults", "inc")}>+</button>
                  </div>
                </div>
                <div className="optionItem">
                  <span className="optionText">Children</span>
                  <div className="optionCounter">
                    <button
                    disabled={options.children <= 0}
                    className="optionCounterButton" onClick={()=>handleOption("children", "dec")}>-</button>
                    <span className="optionCounterNumber">{options.children}</span>
                    <button className="optionCounterButton" onClick={()=>handleOption("children", "inc")}>+</button>
                </div>
                </div>
              </div>}
          </div>
          <div className="headerSearchItem">
            <button className="header-btn">Search</button>
          </div>
        </div></>}
      </div>
    </div>
  )
}

export default Header