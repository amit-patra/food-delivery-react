import { useState } from "react";
import ItemList from "./ItemList";
const ResturentCategory = ({ category, showItem, setShowIndex}) => {
//   const [isCollapse, setIsCollapse] = useState(false);
  const HandleClick = () => {
    // setIsCollapse(!isCollapse);
    // showItem = !showItem;
    setShowIndex();
  };
  return (
    <div className="w-1/2 mx-auto shadow-lg rounded-1xl m-2">
      <div
        className="w-full flex justify-between mt-1 bg-gray-100 p-2 cursor-pointer"
        onClick={HandleClick}
      >
        <h1 className="font-bold text-1xl">
          {category.card.card.title} ({category.card.card.itemCards.length})
        </h1>
        <span className="text-1xl">⬇️</span>
      </div>
      {showItem && (
        <div className="w-full p-2 mt-1">
          {category.card.card.itemCards.map((item) => (
            <ItemList key={item?.card?.info?.id} itemCards={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ResturentCategory;
