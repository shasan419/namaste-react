import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filterListOfRestaurants, setFilterListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch('https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.673373592835524&lng=77.47453518211842&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING', {
      headers: {
      'x-cors-api-key': 'temp_c740e7ba3989030cb418f8802b9f6fc0'
      }
    })
    const json = await data.json();
    console.log(json);
    let restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    // if (!restaurants) {
    //   const cards = json?.data?.cards || [];
    //   for (const card of cards) {
    //     restaurants =
    //     card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    //     if (restaurants) break;

    //     restaurants = card?.card?.card?.restaurants;
    //     if (restaurants) break;

    //     restaurants = card?.card?.card?.restaurantsList;
    //     if (restaurants) break;
    //   }
    // }
    setListOfRestaurants(restaurants);
    setFilterListOfRestaurants(restaurants);
  };

  if (!listOfRestaurants) {
    return null;
  }

  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="top-options">
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Enter Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
              }
            }
          />
          <button
            className="search-btn"
            onClick={() => {
              if(searchText !== ""){
                const filteredList = listOfRestaurants.filter(
                  (x) => x.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setFilterListOfRestaurants(filteredList);
              }else{
                setFilterListOfRestaurants(listOfRestaurants);
              }
            }}
          >
            Search
          </button>
          <button
            className="reset-btn"
            onClick={() => {
              setSearchText("")
              setFilterListOfRestaurants(listOfRestaurants);
            }}
          >
            Reset
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((x) => x.info.avgRating >= 4.4);
            setFilterListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filterListOfRestaurants.map((obj) => {
          return <Link to={"/restaurants/"+obj.info.id} key={obj.info.id} >
          <RestaurantCard resData={obj.info}/>;
          </Link>
        })}
      </div>
    </div>
  );
};

export default Body;
