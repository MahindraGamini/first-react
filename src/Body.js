import RestaurantCard from "./Card";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

function filterData(searchText, restaurants) {
  const filteredData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filteredData;
}

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allrestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    try {
      const data = await fetch(
        "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D16.301117290215405%26lng%3D80.40632508695126%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      console.log(json);
      setAllRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
      );
      setFilteredRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
      );
    } catch (error) {
      console.error("Error fetching restaurant data:", error);
      // Handle error or set an error state
    }
  }

  return allrestaurants.length === 0 ? (
    <Shimmer></Shimmer>
  ) : (
    <>
      <div className="search-container m-4 p-4">
        <input
          type="text"
          className="search-input border border-solid border-black"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="m-4 px-4 py-1 bg-green-100 rounded-lg"
          onClick={() => {
            const trimmedSearchText = searchText.trim();
            if (trimmedSearchText === "") {
              setFilteredRestaurants(allrestaurants);
            } else {
              const data = filterData(trimmedSearchText, allrestaurants);
              setFilteredRestaurants(data);
            }
          }}
        >
          Search
        </button>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => (
          <Link to={'restaurant/' + restaurant.info.id} key={restaurant.info.id}>
            <RestaurantCard {...restaurant.info} />
          </Link>
        ))}
      </div>
    </>
  );
};

export default Body;
