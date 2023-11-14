import React from "react";

function MenuItems({ items }) {
  return (
    <div>
      {items?.map((item) => (
        <div key={item.card.info.id}>
          <div className="menuItems">
            {/* Add your content for each item here */}
            <div className="desc">
              {item?.card?.info?.name}
              <span>
                &#8377;
                {item?.card?.info?.defaultPrice
                  ? item.card.info.defaultPrice / 100
                  : item.card.info.price / 100}
              </span>
              <div className="textDesc">
                <h4>{item?.card?.info?.description}</h4>
              </div>
            </div>
            <div className="desc">
              <img
                className="foodImg"
                src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${item.card.info.imageId}`}
                alt="foodImage"
              />
            </div>
          </div>
          <div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MenuItems;
