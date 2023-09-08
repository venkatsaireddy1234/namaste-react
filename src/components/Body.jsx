import Restocard from "./Restocard"  
import { restaurantData } from "../utils/mockData"
import { useState } from "react";
export default Body = () => {    
const [resList, setResList] = useState(restaurantData);
const filterRating = () =>{
  const filteredRatings = resList.filter(resList => resList.ratings >4);
  setResList(filteredRatings);
}
    return (
        <div className="body">
            <div className="search">
              <button className="topRated" onClick={()=>filterRating()}>Rating 4.0+</button>
            </div>
            <div className="restocard">

            <Restocard resList = {resList}/>
            
            </div>
        </div> 
    )
}