import { useParams } from "react-router-dom";
import Shimmmering from "./Shimmering";
import { HiChevronDown, HiStar } from "react-icons/hi2";
import MenuItems from "./MenuItems";
import useRestInfo from "../utils/useRestInfo";
import { useState } from "react";

const RestaurantInfo = () => {
  const { restId } = useParams();
  // const [downBarStatus,setDownBarStatus] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);

  const restInfo = useRestInfo(restId);
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

  const handleMenuCard = (title) => {
    setOpenCategory(title === openCategory ? null : title);
  };
  return (
    <div className="flex mt-32 flex-col items-center">
      <div className="flex flex-col">
        <div className="name text-2xl font-bold">{name}</div>
        <p className="text-ellipsis">{cuisines.join(" ,")}</p>
        <div className="flex items-center">
          <div className="ratingBox flex items-center">
            <span className="text-yellow-500">
              <HiStar />
            </span>
            <h3 className="avgrating">{avgRatingString}</h3>
          </div>
          <h4 className="text-ellipsis">{totalRatingsString}</h4>
        </div>
      </div>
      <div className="">
        {objectsExceptFirst.map((menu, index) => {
          if (menu.card.card.title != undefined) {
            return (
              <div key={index} className="w-[800px] ">
                <div className="flex justify-between p-4 ">
                  <p className="text-lg font-semibold">
                    {menu.card.card.title} (
                    {menu.card.card.itemCards?.length
                      ? menu.card.card.itemCards?.length
                      : 0}
                    )
                  </p>
                  <button
                    className=" ml-2"
                    onClick={() => {
                      handleMenuCard(menu.card.card.title);
                    }}
                  >
                    <HiChevronDown />
                  </button>
                </div>
                {openCategory === menu.card.card.title && (
                  <div className="p-6">
                    <MenuItems items={menu.card.card.itemCards} />
                  </div>
                )}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export default RestaurantInfo;
