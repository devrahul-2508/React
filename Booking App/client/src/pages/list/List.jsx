import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { format } from "date-fns";
import { DateRange, DateRangePicker } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";

function List() {
  const location = useLocation();

  const [destination, setDestination] = useState(location.state.destination);
  const [date, setDate] = useState(location.state.date);
  const [options, setOptions] = useState(location.state.options);

  const [openDate, setOpenDate] = useState(false);


  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="listContainer flex items-center mt-10 px-3">
        <div className="listWrapper flex flex-row justify-around space-x-6">
          <div className="listSearch flex-1 bg-yellow-400 p-5 rounded-md top-5 sticky h-max">
            <h1 className=" lsTitle font-bold text-2xl mb-10">Search</h1>
            <div className="lsItem flex flex-col mb-5 gap-1">
              <label>Destination</label>
              <input
                type="text"
                className="h-10 w-80 flex items-start px-1"
                placeholder={destination}
              />
            </div>
            <div className="lsItem flex flex-col mb-5 gap-1">
              <label>Check-in Date</label>
              <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText h-10 flex items-center bg-white text-sm p-3 cursor-pointer"
              >{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                date[0].endDate,
                "dd/MM/yyyy"
              )}`}</span>{" "}
              {openDate && (
                <DateRange
                  className="z-10"
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptionItem flex justify-between mb-4 text-gray-500 text-sm space-x-2">
                <span className="lsOptionText">
                  Min Price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput w-12" />
              </div>
              <div className="lsOptionItem flex justify-between mb-4 text-gray-500 text-sm space-x-2">
                <span className="lsOptionText">
                  Max Price <small>per night</small>
                </span>
                <input type="number" className="lsOptionInput w-12" />
              </div>
              <div className="lsOptionItem flex justify-between mb-4 text-gray-500 text-sm space-x-2">
                <span className="lsOptionText">Adult</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput w-12"
                  placeholder={options.adult}
                />
              </div>
              <div className="lsOptionItem flex justify-between mb-4 text-gray-500 text-sm space-x-2">
                <span className="lsOptionText">Children</span>
                <input
                  type="number"
                  min={0}
                  className="lsOptionInput w-12"
                  placeholder={options.children}
                />
              </div>
              <div className="lsOptionItem flex justify-between mb-4 text-gray-500 text-sm space-x-2">
                <span className="lsOptionText">Room</span>
                <input
                  type="number"
                  min={1}
                  className="lsOptionInput w-12"
                  placeholder={options.room}
                />
              </div>
            </div>
            <button className="p-2 bg-blue-800 rounded-md text-white w-full font-bold ">
              Search
            </button>
          </div>
          <div className="listResult flex-3 overflow-y-auto">
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
            <SearchItem />
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
