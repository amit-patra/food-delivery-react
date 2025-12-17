import ResturentCard from "./ResturentCard";
// import { resList } from "../utils/mockdata";
import { useState, useEffect } from "react";
import Shimmer from './Shimmer';

// Not using Key (Not Acceptable) <<<< Index As Key <<<<<<<<< Uniq Id (Best Practice)
const Body = () => {
  let [resturentList, setResturentList] = useState([]);
  let [filterResturent, setFilterResturent] = useState([]);
  let [searchText, setSearchText] = useState("");


  // When ever state variable update ,  react triggers a reconcilitation  cycle (re-renders the component)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
     "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.886059700000011&lng=77.6284459&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
   );
   const resList = await data.json();
  //  console.log(resList);
   
   const cards = resList.data?.cards || [];
   // find the card that contains the restaurants array and return that array
  //  const restaurantsCard = cards.find((c) =>
  //    c.card?.card?.gridElements?.infoWithStyle?.restaurants
  //  );

  // resturentList =
  //    restaurantsCard?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
  resturentList = cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
   setResturentList(resturentList);
   setFilterResturent(resturentList)
  };
  
  return resturentList.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
                <div className="search">
          <input type="text" className="searc-box" value={searchText} onChange={(e)=>{
            setSearchText(e.target.value)
          }}/>
          <button onClick={()=>{
            // Filter the resturent card and update ui
            // searchText
            console.log(searchText);
          
            const filterResturent = resturentList.filter((item) => (item?.info?.name).toLowerCase().includes(searchText.toLowerCase()));
            setFilterResturent(filterResturent);
          }}>Search</button>
      </div>
      <div className="filter-btn">
        <button
          onClick={() => {
            resturentList = resturentList.filter(
              (item) => item.info.avgRating > 4
            );
            setFilterResturent(resturentList);
          }}
        >
          Top Rated Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setFilterResturent(resturentList);
          }}
        >
          Reset Filter
        </button>
      </div>
      </div>

      <div className="res-cpntainer">
        {filterResturent.map((resturent) => (
          <ResturentCard key={resturent.info.id} resData={resturent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
