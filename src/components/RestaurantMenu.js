import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_URL } from "../utils/constants";

function RestaurantMenu() {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchResMenu();
  }, []);

  const fetchResMenu = async () => {
    const data = await fetch(MENU_URL);
    const json = await data.json();
    setMenu(json.data);
  };

  if (menu === null) return <Shimmer />;

  const { resId } = useParams();
  const { name, cuisines, costForTwoMessage } =
    menu?.cards?.[2]?.card?.card?.info;
  const { itemCards } =
    menu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card;
  return (
    <div className="menu">
      <h1>
        {name} - {resId}
      </h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {itemCards?.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} - Rs.{item?.card?.info?.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantMenu;
