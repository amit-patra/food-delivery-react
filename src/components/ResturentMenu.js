import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturentMenu from "../utils/useResturentMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  //*  Create custom hook (Single major responsibility)
  const resInfo = useResturentMenu(resId);

  if (resInfo == null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>
        {cuisines.join(", ")} - {costForTwoMessage}
      </h3>
      <h3>Menu</h3>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -Rs. {item.card.info.price / 100}
          </li>
        ))}
        {/* <li>{itemCards[0].card.info.name} - RS. {itemCards[0].card.info.price/100}</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
