import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Hotel() {
  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg",
  ];

  const [slideIndex, setSlideNo] = useState(0);
  const [openSlide, setOpenSlide] = useState(false);

  const handleOpen = (index) => {
    setSlideNo(index);
    setOpenSlide(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideIndex === 0 ? 5 : slideIndex - 1;
    } else {
      newSlideNumber = slideIndex === 5 ? 0 : slideIndex + 1;
    }

    setSlideNo(newSlideNumber);
  };
  return (
    <div>
      <Navbar />
      <Header type={"list"} />
      <div className="hotelContainer">
        {openSlide && (
          <div className="slider fixed inset-0 flex flex-row bg-black bg-opacity-70 z-50 justify-center items-center gap-3">
            <FontAwesomeIcon
              icon={faCircleXmark}
              onClick={() => setOpenSlide(false)}
              className="close absolute top-5 right-10 text-3xl text-white cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              onClick={() => handleMove("l")}
              className="absolute left-10 text-3xl text-white cursor-pointer"
            />
            <div className="sliderWrapper flex justify-center items-center">
              <img
                src={images[slideIndex]}
                alt=""
                className=" h-auto w-auto max-h-full max-w-full md:w-4/5 md:h-[80vh]"
              />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              onClick={() => handleMove("r")}
              className="absolute right-10 text-3xl text-white cursor-pointer"
            />
          </div>
        )}

        <div className="hotelWrapper flex flex-col gap-2 px-10 sm:px-20 md:px-44 py-5">
          <h1 className="hotelTitle font-bold text-3xl">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 125 New York</span>
          </div>
          <span className="hotelDistance text-blue-500 font-semibold text-sm">
            Excellent location - 500m from center
          </span>
          <span className="hotelPriceHighlight text-green-600 font-semibold text-sm">
            Book a stay over $134 at this property and get a free airport taxi
          </span>
          <div className="hotelImages grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {images.map((image, index) => (
              <div key={index} className="hotelImgWrapper">
                <img
                  onClick={() => handleOpen(index)}
                  src={image}
                  alt=""
                  className="hotelmg w-full  h-60 object-cover"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails flex flex-col md:flex-row justify-between">
            <div className="hotelDetailsText flex-1 ">
              <h1 className="hotelTitle font-bold text-2xl my-3">
                Stay in the heart of
              </h1>
              <p className="hotelDesc">
                Located just a 5-minute walk from St. Florian's Gate in Krakow,
                Tower Hotel offers a blend of modern comfort and historic charm.
                Guests can enjoy elegantly designed rooms equipped with all
                essential amenities for a relaxing stay. The hotel features a
                rooftop terrace with stunning city views, perfect for unwinding
                after a day of sightseeing. A complimentary breakfast is served
                daily in the cozy dining area, offering a variety of local and
                international dishes. With its prime location, Tower Hotel
                provides easy access to Krakow's vibrant cultural and historical
                attractions.
              </p>
            </div>
            <div className="hotelDetailsPrice flex-1 bg-blue-200 rounded-md h-max">
              <div className="hotelDetailsPriceWrapper flex flex-col justify-center p-5 gap-3">
                <h1 className="font-bold text-lg text-gray-500 text-center mb-3">
                  Perfect for a 9-night stay
                </h1>
                <span className="text-black text-center mb-3">
                  Located in the heart of Krakow, this property has an excellent
                  location score of 9.8!
                </span>
                <h2 className="text-lg font-bold text-black text-center">
                  <b>$945</b> (9 nights)
                </h2>
                <button className="bg-blue-800 text-white p-1 rounded-md">
                  Reserve or Book Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MailList />
      <Footer />
    </div>
  );
}

export default Hotel;
