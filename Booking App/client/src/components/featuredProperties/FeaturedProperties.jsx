import React from "react";
import useFetch from "../../hooks/useFetch";

function FeaturedProperties() {
  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
  ];

  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/hotels?featured=true&limit=4"
  );

  return (
    <div className="fp px-12 md:px-20 lg:px-52 w-full flex flex-col md:flex-row space-x-2 gap-4">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data &&
            data.length > 0 &&
            images.map((image, index) => (
              <div key={index} className="fpItem flex flex-1 flex-col gap-1 ">
                <img
                  src={image}
                  alt=""
                  className="w-full h-30 sm:h-32 md:h-40 object-cover"
                />
                <span className="fpName font-bold">{data[index]?.name}</span>
                <span className="fpCity font-semibold capitalize">
                  {data[index]?.city}
                </span>
                <span className="fpPrice font-medium">
                  Starting from ${data[index].cheapestPrice}
                </span>
                <div className="fpRating">
                  <button className="bg-blue-800 text-white p-1 rounded-md">
                    {data[index]?.rating}
                  </button>
                  <span className="font-semibold text-blue-950 ms-3">
                    Excellent
                  </span>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
}

export default FeaturedProperties;
