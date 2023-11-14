import Restocard from "./RestoCard";
import { useEffect, useState } from "react";
import Shimmmering from "./Shimmering";
import { HiXMark, IconName } from "react-icons/hi2";
import { REST_LIST_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export default Body = () => {
  const [resList, setResList] = useState([]);
  const [inputValue, setValue] = useState("");
  const [filteredRest, setFilters] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(REST_LIST_URL);
      const response = await data.json();
      setResList(
        response.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilters(
        response.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error);
      throw error;
    }
  };

  const filterRating = () => {
    const filteredRatings = filteredRest.filter(
      (restaurant) => restaurant.info.avgRatingString > 4.4
    );
    setFilters(filteredRatings);
  };

  const applySearch = () => {
    const filtRes = resList.filter((res) =>
      res.info.name.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilters(filtRes);
  };
  return resList?.length === 0 ? (
    <Shimmmering />
  ) : (
    <div className="body">
      <div className="filters">
        <div className="rating">
          <button className="topRated" onClick={() => filterRating()}>
            Rating 4.0+
            <HiXMark />
          </button>
        </div>
        <div className="search">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button
            onClick={() => {
              applySearch();
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="restocard">
        {filteredRest.map((restaurant) => (
          <Link
            style={{ textDecoration: "none" }}
            key={restaurant.info.id}
            to={`/restaurant/${restaurant.info.id}`}
          >
            <Restocard
              name={restaurant.info.name}
              averageRating={restaurant.info.avgRatingString}
              cuisine={restaurant.info.cuisines}
              priceForTwo={restaurant.info.costForTwo}
              deliveryTime={restaurant.info.sla.deliveryTime}
              image={restaurant.info.cloudinaryImageId}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
