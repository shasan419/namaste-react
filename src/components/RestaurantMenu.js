import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";

function RestaurantMenu() {
    const [menu, setMenu] = useState(null);

    useEffect(() => {
        fetchResMenu();
    },[]);
    
    const fetchResMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0726295&lng=72.8844721&restaurantId=156134")
        const json = await data.json()
        setMenu(json.data)
    };

    if(menu === null) return <Shimmer/>;

    const { name, cuisines, costForTwoMessage } = menu?.cards?.[2]?.card?.card?.info;
    const { itemCards } = menu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;
    console.log(itemCards)
  return  (
    <div className="menu">
        <h1>{name}</h1>
        <p>{cuisines.join(", ")} - {costForTwoMessage}</p>
        <h2>Menu</h2>
        <ul>
            {itemCards?.map(item => <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs.{item?.card?.info?.price}</li>)}
        </ul>
    </div>
  )
}

export default RestaurantMenu