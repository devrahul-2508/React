import React from "react";
import { Link, useNavigate } from "react-router-dom";

function SearchItem({ item }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/hotels/${item._id}`);
  };

  const image =
    "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=";

  return (
    <div
      className="searchItem border border-gray-400 rounded-md p-5 flex gap-5 mb-5 max-w-full"
      onClick={() => handleNavigate()}
    >
      <img
        src={image}
        alt=""
        className="siImg w-52 flex-shrink-0 object-cover rounded-md"
      />
      <div className="siDesc flex-1 flex flex-col gap-2">
        <h1 className="siTitle text-2xl font-bold text-blue-500">
          {item?.name}
        </h1>
        <span className="siDistance">{item?.distance} from center</span>
        <span className="siTaxiOp bg-green-500 p-0.5 w-max text-white rounded-md">
          Free airport taxi
        </span>
        <span className="siSubtitle font-bold">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">{item?.desc}</span>
        <span className="siCancelOp text-green-600 font-semibold">
          Free cancellation
        </span>
        <span className="siCancelOpSubtitle text-green-600">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails flex flex-col justify-between gap-3 w-40 flex-shrink-0">
        {item?.rating && (
          <div className="siRating flex justify-between">
            <span className="font-bold text-xl">Excellent</span>
            <button className="bg-blue-800 text-white p-1 rounded-md">
              {item?.rating}
            </button>
          </div>
        )}
        <div className="siDetailTexts flex flex-col items-end gap-3">
          <span className="siPrice text-2xl text-black">
            ${item?.cheapestPrice}
          </span>
          <span className="siTaxOp text-sm text-gray-600">
            Includes taxes and fees
          </span>
          <Link to={`/hotels/${item?._id}`}>
            <button className="siCheckButton bg-blue-400 text-white p-2 rounded-md">
              See availability
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
