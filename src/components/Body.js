import ResturentCard, { WithPromoted } from "./ResturentCard";
// import { resList } from "../utils/mockdata";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { BASE_URL } from "../utils/constants/";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

// Not using Key (Not Acceptable) <<<< Index As Key <<<<<<<<< Uniq Id (Best Practice)
const Body = () => {
  let [resturentList, setResturentList] = useState([]);
  let [filterResturent, setFilterResturent] = useState([]);
  let [searchText, setSearchText] = useState("");

   const  {loggedInUser, setUserName} = useContext(UserContext);

  const onlineStatus = useOnlineStatus();
  const ResturentCardPromoted = WithPromoted(ResturentCard);

  // When ever state variable update ,  react triggers a reconcilitation  cycle (re-renders the component)

  useEffect(() => {
    fetchData();
    return () => {
      console.log("Leaving from this page");
    };
  }, []);

  const fetchData = async () => {
    //const url =  "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.886059700000011&lng=77.6284459&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
    const url = BASE_URL + "listRestaurants";
    const data = await fetch(url);
    const resList = await data.json();
    const cards = resList.data?.data || [];
    resturentList =
      cards?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
      [];
    // Add promoted value for resturentList
    resturentList = resturentList?.map((item, index) => {
      index == 0 || index == 2
        ? (item.info.promoted = true)
        : (item.info.promoted = false);
      return item;
    });
    //
    // console.log(resturentList);

    setResturentList(resturentList);
    setFilterResturent(resturentList);
  };

  if (onlineStatus === false)
    return <h2>You are offline! Please check your Internet Connection !!!</h2>;

  return resturentList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="p-4 m-4">
          <input
            type="text"
            className="searc-box outline-solid border-black p-1"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-400 m-4 rounded-sm"
            onClick={() => {
              // Filter the resturent card and update ui
              // searchText
              // console.log(searchText);

              const filterResturent = resturentList.filter((item) =>
                (item?.info?.name)
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setFilterResturent(filterResturent);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter-btn pt-13">
          <button
            className="mr-2 bg-amber-300 p-2 rounded-sm"
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
            className="mr-2 bg-amber-300 p-2 rounded-sm"
            onClick={() => {
              setFilterResturent(resturentList);
            }}
          >
            Reset Filter
          </button>
        </div>
        <div className="mt-13">
          <label>User Name: </label>
          <input
            type="text"
            className="searc-box outline-solid border-black p-1"
            value={loggedInUser}
            onChange={(e)=>setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {filterResturent.map((resturent) => (
          <Link key={resturent.info.id} to={"/resturents/" + resturent.info.id}>
            {resturent.info.promoted ? (
              <ResturentCardPromoted resData={resturent} />
            ) : (
              <ResturentCard resData={resturent} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
