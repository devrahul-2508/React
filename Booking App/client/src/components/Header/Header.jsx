import React, { Children, useContext, useState } from "react";
import {
  faBed,
  faPlane,
  faCar,
  faTaxi,
  faC,
  faB,
  faCalendarDays,
  faPerson,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

import { DateRange, DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { SearchContext } from "../../context/SearchContext.jsx";
function Header({ type }) {
  const [destination, setDestination] = useState("");

  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    console.log(destination);
    dispatch({
      type: "NEW_SEARCH",
      payload: { destination, dates, options },
    });
    navigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    <div
      className={`header bg-blue-800 px-12 md:px-20 lg:px-52 mt ${
        type === "list" ? "pb-0" : "pb-20"
      } relative`}
    >
      <div className="headerList flex justify-normal  space-x-5 text-white mx-auto pt-5 pb-5">
        <div className="space-x-2 border border-white rounded-2xl p-2">
          <FontAwesomeIcon icon={faBed} />
          <span>Stays</span>
        </div>
        <div className="space-x-2 p-2">
          <FontAwesomeIcon icon={faPlane} />
          <span>Flights</span>
        </div>
        <div className="space-x-2 p-2">
          <FontAwesomeIcon icon={faCar} />
          <span>Car Rentals</span>
        </div>
        <div className="space-x-2 p-2">
          <FontAwesomeIcon icon={faBed} />
          <span>Attractions</span>
        </div>
        <div className="space-x-2 p-2">
          <FontAwesomeIcon icon={faTaxi} />
          <span>Taxis</span>
        </div>
      </div>
      {type !== "list" && (
        <>
          <h2 className="text-white text-left text-4xl font-bold">
            A lifetime of discounts? It's Genius
          </h2>
          <p className="text-white text-left mt-5">
            Get rewarded for your travels - unlock instant savings of 10% or
            more with free booking account
          </p>
          <button className="flex justify-start mt-5 rounded-md bg-white font-semibold p-2 text-x">
            Sign in/ Register
          </button>
          <div className="headerSearch max-w-7xl bg-white items-center justify-between flex border-4 border-yellow-600 rounded-md mt-5 p-2 absolute -bottom-9 sm:-bottom-6 left-4 right-4 sm:left-10 sm:right-10 md:left-20 md:right-20 lg:left-52 lg:right-52">
            <div className="headerSearchitem  bg-white text-gray-700 space-x-1">
              <FontAwesomeIcon icon={faBed} className="headerIcon" />
              <input
                type="text"
                placeholder="Where are u going?"
                className="headerSearchInput w-22 sm:w-100"
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="headerSearchitem relative  bg-white text-gray-700 space-x-1">
              <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
              <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText"
              >{`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
                dates[0].endDate,
                "dd/MM/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  className="absolute top-16 z-10"
                  editableDateInputs={true}
                  onChange={(item) => setDates([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={dates}
                />
              )}
            </div>
            <div className="headerSearchitem bg-white text-gray-700 space-x-1">
              <FontAwesomeIcon icon={faPerson} className="headerIcon" />
              <span
                onClick={() => setOpenOptions(!openOptions)}
                className="headerSearchText"
              >{`${options.adult} adult - ${options.children} children - ${options.room} room`}</span>
              {openOptions && (
                <div className="options absolute mt-5 bg-white rounded-md shadow-lg z-10">
                  <div className="optionItem w-200 flex justify-between space-x-10 m-5">
                    <span className="optionText">Adult </span>
                    <div className="optionCounter flex items-center gap-5 ">
                      <button
                        className="optionCounterButton bg-blue-200 w-5 h-5 flex items-center justify-center rounded-sm text-white"
                        onClick={() => handleOption("adult", "i")}
                      >
                        +
                      </button>
                      <span className="optionCounterNumber">
                        {options.adult}
                      </span>
                      <button
                        className="optionCounterButton bg-blue-200 w-5 h-5 flex items-center justify-center rounded-sm text-white"
                        onClick={() => handleOption("adult", "d")}
                        disabled={options.adult <= 1}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div className="optionItem w-200 flex justify-between space-x-10 m-5">
                    <span className="optionText">Children </span>
                    <div className="optionCounter flex items-center gap-5">
                      <button
                        className="optionCounterButton bg-blue-200 w-5 h-5 flex items-center justify-center rounded-sm text-white"
                        onClick={() => handleOption("children", "i")}
                      >
                        +
                      </button>
                      <span className="optionCounterNumber">
                        {options.children}
                      </span>
                      <button
                        className="optionCounterButton bg-blue-200 w-5 h-5 flex items-center justify-center rounded-sm text-white"
                        onClick={() => handleOption("children", "d")}
                        disabled={options.children <= 1}
                      >
                        -
                      </button>
                    </div>
                  </div>
                  <div className="optionItem w-200 flex justify-between space-x-10 m-5">
                    <span className="optionText">Rooms</span>
                    <div className="optionCounter flex items-center gap-5">
                      <button
                        className="optionCounterButton bg-blue-200 w-5 h-5 flex items-center justify-center rounded-sm text-white"
                        onClick={() => handleOption("room", "i")}
                      >
                        +
                      </button>
                      <span className="optionCounterNumber">
                        {options.room}
                      </span>
                      <button
                        className="optionCounterButton bg-blue-200 w-5 h-5 flex items-center justify-center rounded-sm text-white"
                        onClick={() => handleOption("room", "d")}
                        disabled={options.room <= 1}
                      >
                        -
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="headerSearchitem bg-white text-gray-700 space-x-1 ">
              <button
                className="bg-blue-400 rounded-sm px-3 py-1 text-white"
                onClick={() => handleSearch()}
              >
                Search
              </button>
            </div>
          </div>
        </>
      )}{" "}
    </div>
  );
}

export default Header;
