import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="w-full md:w-6/12 lg:w-4/12 shadow-lg bg-gray-50 p-4 m-auto mx-auto my-4">
      <div className="flex flex-col md:flex-row justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-md mb-2 md:mb-0 w-full md:w-2/12 whitespace-nowrap">
          {data?.title}({data.itemCards.length})
        </span>
        <span className="md:self-end">🔽</span>
      </div>
      {showItems && <ItemList items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
