import React from "react";
import useFetch from "../../hooks/useFetch";

function PropertyList() {
  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];

  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/hotels/countByType"
  );

  return (
    <div className="pList px-12 md:px-20 lg:px-52 max-w-full flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 md:space-x-5 mt-10">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            data.length > 0 &&
            images.map((image, index) => (
              <div
                key={index}
                className="pListItem rounded-md overflow-hidden flex-1"
              >
                <img
                  src={image}
                  alt=""
                  className="w-full h-60 sm:h-40 object-cover"
                />
                <div className="pListTitles mt-2">
                  <h1 className="text-lg font-bold capitalize">
                    {data[index]?.type}
                  </h1>
                  <h2 className="text-gray-500 font-normal text-sm">
                    {data[index]?.count} {data[index]?.type}
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}{" "}
    </div>
  );
}

export default PropertyList;
