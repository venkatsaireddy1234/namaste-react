import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmmering from "./Shimmering";
import { HiChevronDown, HiStar } from "react-icons/hi2";

const RestaurantInfo = () => {
  const [restInfo, setRestInfo] = useState(null);
  const { restId } = useParams();

  useEffect(() => {
    fetchRestInfo();
  }, []);

  const fetchRestInfo = async () => {
    const REST_INFO_URL = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${restId}`;

    const data = await fetch(REST_INFO_URL);
    const json = await data.json();
    console.log(json);
    setRestInfo(json.data);
  };
  if (restInfo === null) return <Shimmmering />;
  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
  } = restInfo?.cards[0]?.card?.card?.info;
  const { deliveryTime } = restInfo?.cards[0]?.card?.card?.info?.sla;
  const { cards } = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  const objectsExceptFirst = cards.slice(1);

  return (
    <div className="restInfo ">
      <div className="restHead">
        <div>
          <h2 className="name">{name}</h2>
          <p className="text-ellipsis">{cuisines.join(" ,")}</p>
        </div>
        <div className="ratingBox">
          <div className="rating" id="design">
            <span>
              {" "}
              <HiStar />
            </span>
            <span>
              <h3 className="avgrating">{avgRatingString}</h3>
            </span>
          </div>
          <h4 className="text-ellipsis">{totalRatingsString}</h4>
        </div>
      </div>
      <div id="line"></div>
      <div className="menu">
        {objectsExceptFirst.map((menu) => {
          if (menu.card.card.title != undefined) {
            return (
              <div className="dropdown">
                <div key={menu} className="name" id="name">
                  {menu.card.card.title}
                </div>
                <div> <button onClick={()=>{}}><HiChevronDown /> </button></div>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export default RestaurantInfo;
