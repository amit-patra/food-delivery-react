import ResturentCard from "./ResturentCard";
import { resList } from "../utils/mockdata";
import {useState} from "react";

// Not using Key (Not Acceptable) <<<< Index As Key <<<<<<<<< Uniq Id (Best Practice)
const Body = () => {
  let restaurants= resList.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  let [resturentList, setResturentList] = useState(restaurants);
  return (
    <div className="body">
      <div className="search-btn">
        <button
          onClick={() => {
            resturentList = resturentList.filter(
              (item) => item.info.avgRating > 4
            );
            setResturentList(resturentList)
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-cpntainer">
        {resturentList.map((resturent, index) => (
          <ResturentCard key={resturent.info.id} resData={resturent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
