import ItemList from "./ItemList";

export default function RestaurantCategory({ category, showItems, setShowItemIndex }) {
  const { title, itemCards } = category;
  const upSVG = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path
          fillRule="evenodd"
          d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
          clipRule="evenodd"
        />
      </svg>
    );
  };

  const downSVG = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        className="w-4 h-4"
      >
        <path
          fillRule="evenodd"
          d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
          clipRule="evenodd"
        />
      </svg>
    );
  };
  return (
    <>
      <div className="border-b border-slate-200 cursor-pointer px-2">
        <button
          onClick={() => setShowItemIndex()}
          className="cursor-pointer w-full flex justify-between items-center py-5 text-slate-800"
        >
          <span className="font-bold">
            {title + "(" + itemCards?.length + ")"}
          </span>
          <span
            className="text-slate-800 transition-transform duration-300"
          >
            {showItems ? downSVG():upSVG()}
          </span>
        </button>
        <div
          className="overflow-hidden transition-all duration-300 ease-in-out"
        >
          {showItems && itemCards.map((item) => (
            <ItemList key={item?.card?.info?.id} item={item?.card?.info} />
          ))}
        </div>
      </div>
    </>
  );
};
