
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RetaurantCategory";
import { useState } from "react";
const RestaurantMenu =()=>{
    const {resId}=useParams();
    const resInfo = useRestaurantMenu(resId);
    console.log(resInfo);
    console.log(resInfo?.cards[0]?.card?.card?.info?.name);
    const[showIndex,setShowIndex]=useState(null);

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.['@type'] ===
        'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    );
    

    return (
        <div className="text-center">
          <h1 className="font-bold px-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl">{resInfo?.cards[0]?.card?.card?.info?.name}</h1>
          <p className="px-4 text-sm md:text-base lg:text-lg xl:text-xl">{resInfo?.cards[0]?.card?.card?.info?.cuisines.join(',')}</p>
          {categories && categories.map((category,index) => (
            <RestaurantCategory key={category?.card?.card?.id} data={category?.card?.card} 
            showItems={ index===showIndex &&true} setShowIndex={()=>setShowIndex(index)}/>
          ))}
        </div>
      );

}
export default RestaurantMenu; 