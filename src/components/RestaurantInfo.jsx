import { useParams } from "react-router-dom";
import Shimmering from "./Shimmering";
import { HiChevronDown, HiStar } from "react-icons/hi";
import MenuItems from "./MenuItems";
import useRestInfo from "../utils/useRestInfo";
import { useState } from "react";
import Categories from "./Categories";

const RestaurantInfo = () => {
  const { restId } = useParams();
  const [openCategory, setOpenCategory] = useState(null);

  const restInfo = useRestInfo(restId);
  if (restInfo === null) return <Shimmering />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRatingString,
    totalRatingsString,
  } = restInfo?.cards[0]?.card?.card?.info;

  const { deliveryTime } = restInfo?.cards[0]?.card?.card?.info?.sla;
  const cards = restInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  const handleMenuCard = (title) => {
    setOpenCategory((prevTitle) => (prevTitle === title ? null : title));
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
        {cards?.slice(1)?.map((menu, index) => {
          const categories = menu?.card?.card?.categories;
          const menuCardTitle = menu.card.card.title;
          const itemCards = menu.card.card.itemCards;
          if (itemCards) {
            return (
              <div key={index} className="w-[800px] ">
                <div className="flex justify-between p-4 ">
                  <p className="text-lg font-semibold">
                    {itemCards &&
                      `${menu.card.card.title} (${menu.card.card.itemCards.length})`}
                  </p>
                  {itemCards && (
                    <button
                      className=" ml-2"
                      onClick={() => {
                        handleMenuCard(menuCardTitle);
                      }}
                    >
                      <HiChevronDown />
                    </button>
                  )}
                </div>
                {openCategory === menuCardTitle && (
                  <div className="p-6">
                    {itemCards && <MenuItems items={itemCards} />}
                  </div>
                )}
              </div>
            );
          } else if (categories) {
            return (
              <>
                <Categories
                  categories={categories}
                  openCategory={openCategory}
                  handleMenuCard={handleMenuCard}
                />
              </>
            );
          }
        })}
      </div>
    </div>
  );
};

export default RestaurantInfo;
