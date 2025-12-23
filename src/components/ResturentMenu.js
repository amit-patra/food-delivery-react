import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturentMenu from "../utils/useResturentMenu";
import ResturentCategory from "./ResturentCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  //*  Create custom hook (Single major responsibility)
  const resInfo = useResturentMenu(resId);

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;
  const cardGroupMap =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const ItemCategory = cardGroupMap.filter(
    (item) =>
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="menu">
      <div className="text-center mt-3">
        <h1 className="font-bold text-2xl">{name}</h1>
        <h3 className="font-bold mt-2">
          {cuisines.join(", ")} - {costForTwoMessage}
        </h3>
      </div>
      {ItemCategory.map((resCategory, index) => (
        // Control Component
        <ResturentCategory
          key={resCategory.card.card.title}
          category={resCategory}
          showItem={index == showIndex}
          setShowIndex={() => {
            index = index == showIndex? null: index;
            setShowIndex(index)
        }}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
