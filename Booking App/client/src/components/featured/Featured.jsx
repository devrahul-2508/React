import React from "react";
import useFetch from "../../hooks/useFetch";

function Featured() {
  const images = [
    "https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o=",
    "https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o=",
    "https://cf.bstatic.com/xdata/images/city/max500/689422.webp?k=2595c93e7e067b9ba95f90713f80ba6e5fa88a66e6e55600bd27a5128808fdf2&o=",
  ];

  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/hotels/countByCity?cities=berlin,Krakow,Miami"
  );
  return (
    <div className="featured pb-12 w-full flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 md:space-x-5 px-12 md:px-20 lg:px-52 ">
      {images.map((image, index) => (
        <div
          key={index}
          className="featuredItem relative overflow-hidden rounded-md flex-1 h-40 sm:h-80"
        >
          <img className="w-full h-full object-cover" src={image} alt="Image" />
          <div className="featuredTitles">
            <h1 className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-4 sm:left-6 md:left-10 text-white font-bold text-lg sm:text-xl md:text-2xl">
              {["Dublin", "Reno", "Austin"][index]}
            </h1>
            <h2 className="absolute bottom-2 sm:bottom-3 md:bottom-5 left-4 sm:left-6 md:left-10 text-white font-semibold text-xs sm:text-sm md:text-base">
              {data[0]} properties
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Featured;
