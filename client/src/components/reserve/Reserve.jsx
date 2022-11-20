import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import useFetch from "../../hooks/useFetch";
import "./reserve.css"

const Reserve = ({setOpen, movieId}) => {

    const [selectedSeats, setSelectedSeats] = useState([])

    const { data, loading, error } = useFetch(`/movies/theater/${movieId}`)

    const { startDate } = useContext(SearchContext)

    const getTimes = (startDate) => {
        const selectedTime = new Date(startDate);
        const time = new Date(selectedTime.getTime());
    };

    const allTimes =  getTimes(startDate);

    const isAvailableA = (seatNumberA) => {
        const isFound = seatNumberA.unavailableTimes.some((startDate) => allTimes.includes(new Date(startDate).getTime())
        );
        return !isFound;
    };

    const isAvailableB = (seatNumberB) => {
        const isFound = seatNumberB.unavailableTimes.some((startDate) => allTimes.includes(new Date(startDate).getTime())
        );
        return !isFound;
    };

    const handleCheck = (e) => {
        const checked = e.target.checked
        const value = e.target.value
        setSelectedSeats(
            checked ? [...selectedSeats, value] : selectedSeats.filter((item) => item !== value));
    };

    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            await Promise.all(
              selectedSeats.map((seatId) => {
                const res = axios.put(`/seats/availability/${seatId}`, {
                  dates: allTimes,
                });
                return res.data;
              })
            );
            setOpen(false);
            navigate("/");
          } catch (err) {}
    };

  return (
    <div className="reserve">
        <div className="rContainer">
            <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={()=>setOpen(false)}/>
            <span>Select theater type:</span>
            {data.map((item) => (
                <div className="rItem" key={item._id}>
                    <div className="rItemInfo">
                        <div className="rType">{item.type}</div>
                        <div className="rDesc">{item.desc}</div>
                        <div className="rMax">
                            Maximum Capacity: {item.maxPeople}
                        </div>
                        {/* {item.pricing.map((info) => (
                            <div className="theaterItem">
                                <div className="theaterItemInfo">
                                    <div className="matinee">Matinee: ${info.matinee}</div>
                                    <div className="evening">After 12PM: ${info.evening}</div>
                                    <div className="csMatinee">Child or Senior: ${info.cs_matinee}</div>
                                    <div className="csEvening">Child or Senior after 12PM: ${info.cs_evening}</div>
                                    <div className="specialMatinee">Military or Emergency Responder: ${info.special_matinee}</div>
                                    <div className="specialEvening">Military or Emergency Responder after 12PM: ${info.special_evening}</div>
                                </div>
                            </div>
                        ))} */}
                    </div>
                    <div className="seatContainer">
                        {item.seatNumbersA?.map((seatNumberA) => (
                            <div className="seat">
                                <label>{seatNumberA.number}</label>
                                <input type="checkbox" value={seatNumberA._id} onChange={handleCheck} disabled={!isAvailableA(seatNumberA)}/>
                            </div>
                        ))}
                        {item.seatNumbersB?.map((seatNumberB) => (
                            <div className="seat">
                                <label>{seatNumberB.number}</label>
                                <input type="checkbox" value={seatNumberB._id} onChange={handleCheck} disabled={!isAvailableB(seatNumberB)}/>
                            </div>
                        ))}
                        {item.seatNumbersC?.map((seatNumberC) => (
                            <div className="seat">
                                <label>{seatNumberC.number}</label>
                                <input type="checkbox" value={seatNumberC._id} onChange={handleCheck} disabled={!isAvailableB(seatNumberC)}/>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            <button onClick={handleClick} className="rButton">Reserve Now</button>
        </div>
    </div>
  );
};

export default Reserve;