import Restocard, { withPromotedLabel } from "./RestoCard";
import { useEffect, useState } from "react";
import Shimmmering from "./Shimmering";
import { HiXMark, IconName } from "react-icons/hi2";
import { REST_LIST_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export default Body = () => {
  const [resList, setResList] = useState([]);
  const [inputValue, setValue] = useState("");
  const [filteredRest, setFilters] = useState([]);

  console.log(resList);
  const RestuarantCardWithLable = withPromotedLabel(Restocard);
  useEffect(() => {
    fetchData();
  }, []);

  const onlineStatus = useOnlineStatus();
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

  if (onlineStatus === false)
    return <h1>Please check Your Internet Connection</h1>;
  else {
    return resList?.length === 0 ? (
      <Shimmmering />
    ) : (
      <div className="mt-[150px]">
        <div className="flex items-center justify-center ">
          <div className="flex flex-row">
            <button
              className="px-4 py-2 text-gray-500 rounded hover:text-orange-400 rounded focus:outline-none"
              onClick={() => filterRating()}
            >
              Rating 4.0+
              <HiXMark className="ml-2" />
            </button>
          </div>

          <div className="flex justify-between m-2">
            <input
              className="p-2 border border-gray-300 rounded focus:outline-none"
              type="text"
              value={inputValue}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <button
              className="ml-2 px-4 py-2  text-gray-500 rounded hover:text-orange-400"
              onClick={() => {
                applySearch();
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className=" m-2 flex flex-wrap gap-2  justify-center w-full">
          {filteredRest?.map((restaurant) => (
            <Link
              style={{ textDecoration: "none" }}
              key={restaurant.info.id}
              to={`/restaurant/${restaurant.info.id}`}
              className=" gap-2"
            >
              {restaurant.info.isOpen ? (
                <RestuarantCardWithLable
                  name={restaurant.info.name}
                  averageRating={restaurant.info.avgRatingString}
                  cuisine={restaurant.info.cuisines}
                  priceForTwo={restaurant.info.costForTwo}
                  deliveryTime={restaurant.info.sla.deliveryTime}
                  image={restaurant.info.cloudinaryImageId}
                />
              ) : (
                <Restocard
                  name={restaurant.info.name}
                  averageRating={restaurant.info.avgRatingString}
                  cuisine={restaurant.info.cuisines}
                  priceForTwo={restaurant.info.costForTwo}
                  deliveryTime={restaurant.info.sla.deliveryTime}
                  image={restaurant.info.cloudinaryImageId}
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    );
  }
};
