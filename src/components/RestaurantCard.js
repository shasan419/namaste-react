import { CON_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, areaName } = resData;
  return (
    <div className="flex flex-col flex-wrap m-4 max-w-sm sm-w-full w-[310px] h-[440px] hover:scale-96 duration-300">
      <img
        className="w-auto h-[235px] border border-amber-600 rounded-lg shadow-sm"
        alt="res-logo"
        src={CON_URL + cloudinaryImageId}
      />
      <div className="p-4">
        <h1 className="font-extrabold  text-md text-amber-600 text-xl">{name}</h1>
        <div className="flex items-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" stroke-color="rgba(2, 6, 12, 0.92)" fill-color="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stopColor="#21973B"></stop><stop offset="1" stopColor="#128540"></stop></linearGradient></defs></svg>
           <p>{avgRating}</p>
          <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
          <h5 className="font-semibold">{sla?.slaString}</h5>
        </div>
        <h5 className="flex flex-wrap">{cuisines.join(", ")}</h5>
        <h5>{areaName}</h5>
        
      </div>
    </div>
  );
};

//Higher Order Functional Component
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    const {aggregatedDiscountInfoV3} = props?.resData;
    return (
      <div>
        <label className="absolute bg-green-600 text-white rounded-lg m-2 p-2 z-99">{aggregatedDiscountInfoV3?.header + " " + aggregatedDiscountInfoV3?.subHeader}</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;
