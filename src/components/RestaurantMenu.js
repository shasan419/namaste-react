import {useEffect, useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
// import { useDispatch } from "react-redux";
// import { clearCart } from "../utils/cartSlice";

function RestaurantMenu() {
  const { resId } = useParams();
  const [showItemIndex, setShowItemIndex] = useState(null);
  // const dispatch = useDispatch()

  // useEffect(() => {
  //   return () => {dispatch(clearCart())};
  // },[]);

  const menu = useRestaurantMenu(resId);

  if (menu === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    menu?.cards?.[2]?.card?.card?.info;

  const categories =
    menu?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (x) =>
        x?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-start max-w-6xl mx-auto">
      <h1 className="font-bold my-7 text-2xl text-amber-600 ml-2">{name}</h1>
      <p className="font-semibold text-lg text-black ml-2">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {categories?.map((category, index) => {
        return (
          <RestaurantCategory
            key={category?.card?.card?.categoryId}
            category={category?.card?.card}
            showItems={index === showItemIndex ? true : false}
            setShowItemIndex={() => index === showItemIndex ? setShowItemIndex(null): setShowItemIndex(index)}
          />
        );
      })}
    </div>
  );
}

export default RestaurantMenu;
