import React from "react";

function SearchItem() {
  const image =
    "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=";

  return (
    <div className="searchItem border border-gray-400 rounded-md p-5 flex justify-between gap-10 mb-5 max-w-full">
      <img src={image} alt="" className="siImg w-60 h-60 object-cover rounded-md" />
      <div className="siDesc flex flex-col gap-2">
        <h1 className="siTitle text-2xl font-bold text-blue-500">Tower Street Apartments</h1>
        <span className="siDistance"> 120 m from center</span>
        <span className="siTaxiOp bg-green-500 p-0.5 w-max text-white rounded-md">
          Free airport taxi
        </span>
        <span className="siSubtitle font-bold">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          Entire Studio; 1 bathroom; 21m2 full bed
        </span>
        <span className="siCancelOp text-green-600 font-semibold">
          Free cancellation{" "}
        </span>
        <span className="siCancelOpSubtitle text-green-600">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails flex flex-col justify-between">
        <div className="siRating flex justify-between">
          <span className="font-bold text-xl">Excellent</span>
          <button className="bg-blue-800 text-white p-1 rounded-md">4.8</button>
        </div>
        <div className="siDetailTexts flex flex-col items-end gap-3 ">
          <span className="siPrice text-2xl text-black">$1200</span>
          <span className="siTaxOp text-sm text-gray-600">
            Includes taxes and fees
          </span>
          <button className="siCheckButton bg-blue-400 text-white p-2 rounded-md">
            See availability
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
