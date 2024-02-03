import { Imglink } from "./config";

const RestaurantCard = ({ name, cuisines, cloudinaryImageId, avgRating }) => {
  return (
    <div className="m-4 p-4 w-full md:w-[190px] bg-green-200 rounded-lg hover:bg-gray-200">
      {/* Properly concatenate the image URL */}
      <img className="rounded-xl w-full" src={Imglink + '/' + cloudinaryImageId} alt="Restaurant image" />

      {/* Correct variable names */}
      <h4 className="font-bold py-4 text-pretty text-center">{name}</h4>
      <h3 className="text-center">{cuisines?.join(", ")}</h3>
      {/* Assuming you want to display the average rating */}
      <h3 className="text-center">{avgRating}⭐</h3>
    </div>
  );
};

export default RestaurantCard;
