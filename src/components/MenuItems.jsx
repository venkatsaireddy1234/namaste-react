import React from "react";

function MenuItems({ items }) {
  return (
    <div className="">
      {items?.map((item) => (
        <div 
          key={item.card.info.id}
          className=" bg-white p-5 mt-2 rounded-lg shadow-md flex items-center justify-between"
        >
          <div className="flex flex-col gap-2 justify-between">
            <div className="">
              <h3 className="font-bold">{item?.card?.info?.name}</h3>
              <span className="font-bold">{`\u20B9${
                item?.card?.info?.defaultPrice
                  ? item.card.info.defaultPrice / 100
                  : item.card.info.price / 100
              }`}</span>
            </div>
            <div className=" text-gray-600">
              <h4 className="line-clamp-2">{item?.card?.info?.description}</h4>
            </div>
          </div>
          <div className="">
            <img
              className=" h-32 w-32 object-cover rounded-lg"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
              alt="foodImage"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuItems;
