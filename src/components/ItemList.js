import { useState } from "react";
import { CON_URL } from "../utils/constants";

export default function ItemList({ item }) {
  const [showCounter, setShowCounter] = useState(false);
  const [count, setCount] = useState(1);
  const { name, price, ratings, imageId, description, defaultPrice } = item;
  const priceInRupees = price ? price / 100 : defaultPrice / 100;
  return (
    <>
      <div className="px-2 flex flex-row flex-wrap justify-between">
        <div className="flex flex-col w-9/12">
          <span className="font-bold">{name}</span>
          <span className="font-bold">₹{priceInRupees}</span>
          {ratings?.aggregatedRating?.rating ? (
            <span className="flex text-sm items-center">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                fillcolor="#116649"
              >
                <rect width="14" height="14" fill="white"></rect>
                <path
                  d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z"
                  fill="#116649"
                ></path>
              </svg>
              {ratings?.aggregatedRating?.rating +
                "(" +
                ratings?.aggregatedRating?.ratingCountV2 +
                ")"}
            </span>
          ) : null}
          <span className="text-sm text-gray-500">{description}</span>
        </div>
        <div className="flex flex-col flex-wrap justify-between w-3/12">
          <img src={CON_URL + imageId} className="rounded-t-2xl h-50 w-50" />
          {showCounter ? (
            <div className="flex items-center rounded-b-2xl border border-green-700 w-50" >
              <button
                type="button"
                onClick={() => {
                  count > 1
                    ? setCount(count - 1)
                    : setShowCounter(!showCounter) && setCount(1);
                }}
                className="h-10 cursor-pointer bg-green-700 text-white-100 hover:bg-green-900 rounded-bl-2xl px-4 py-2"
              >
                <svg
                  className="w-3 h-3 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 2"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h16"
                  />
                </svg>
              </button>
              <input
                type="text"
                className="text-green-700 text-center block w-full px-6"
                value={count}
                readOnly
              />
              <button
                type="button"
                onClick={() => setCount(count + 1)}
                className="h-10 cursor-pointer bg-green-700 text-white-100  hover:bg-green-900 rounded-br-2xl px-4 py-2"
              >
                <svg
                  className="w-3 h-3 text-white "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 1v16M1 9h16"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <button
              onClick={() => setShowCounter(!showCounter)}
              className="w-50 cursor-pointer text-green-700 bg-white border h-10 border-green-700 rounded-b-2xl px-4 py-2 text-center"
            >
              Add +
            </button>
          )}
        </div>
      </div>
      <hr className="h-px my-4 bg-gray-100 border-0" />
    </>
  );
}
