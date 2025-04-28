import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterListOfRestaurants, setFilterListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { loggedInUser, setUserName } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.673373592835524&lng=77.47453518211842&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      {
        headers: {
          "x-cors-api-key": "temp_c740e7ba3989030cb418f8802b9f6fc0",
        },
      }
    );
    const json = await data.json();
    let restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    setListOfRestaurants(restaurants);
    setFilterListOfRestaurants(restaurants);
  };

  const RestaurantCardWithPromotedLabel = withPromotedLabel(RestaurantCard);

  if (!listOfRestaurants) {
    return null;
  }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="m-4">
      <div className="flex items-center py-4 my-4">
        <div className="flex items-center px-4">
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="m-2 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={() => {
              if (searchText !== "") {
                const filteredList = listOfRestaurants.filter((x) =>
                  x.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilterListOfRestaurants(filteredList);
              } else {
                setFilterListOfRestaurants(listOfRestaurants);
              }
            }}
          >
            Search
          </button>
          <button
            className="m-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            onClick={() => {
              setSearchText("");
              setFilterListOfRestaurants(listOfRestaurants);
            }}
          >
            Reset
          </button>
        </div>
        <div>
          <button
            className="m-2 text-white bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (x) => x.info.avgRating >= 4.4
              );
              setFilterListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter User Name"
            value={loggedInUser}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="w-auto h-auto flex flex-wrap">
        {filterListOfRestaurants?.length === 0 ? (
          <div className="flex justify-center items-center w-full">
            <h1 className="text-center self-center">No restaurants to show!</h1>
          </div>
        ) : (
          filterListOfRestaurants.map((obj) => {
            return (
              <Link to={"/restaurants/" + obj.info.id} key={obj.info.id}>
                {obj.info.aggregatedDiscountInfoV3?.header ? (
                  <RestaurantCardWithPromotedLabel resData={obj.info} />
                ) : (
                  <RestaurantCard resData={obj.info} />
                )}
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Body;
