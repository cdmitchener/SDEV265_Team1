import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import useFetch from "../../hooks/useFetch"
import "./reserve.css"

const Reserve = ({setOpen, movieId}) => {

    const { data, loading, error } = useFetch(`/movies/theater/${movieId}`)

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
                        {/* <div className="rPricing">{item.pricing}</div> */}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Reserve;