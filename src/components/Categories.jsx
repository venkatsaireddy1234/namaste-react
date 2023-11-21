import React from "react";
import MenuItems from "./MenuItems";
import { HiChevronDown } from "react-icons/hi";

const Categories = ({ categories, openCategory,handleMenuCard }) => {
  return (
    <div>
      {categories &&
        categories.map((category, index) => (
          <div key={index} className="w-[800px] ">
            <div className="flex justify-between p-4 ">
              <p className="text-lg font-semibold">
                {`${category.title} (${category.itemCards.length})`}
              </p>
              {category && (
                <button
                  className="ml-2"
                  onClick={() => {
                    handleMenuCard(category.title);
                  }}
                >
                  <HiChevronDown />
                </button>
              )}
            </div>
            {openCategory === category.title && (
              <div className="p-6">
                {category.itemCards && <MenuItems items={category.itemCards} />}
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default Categories;
