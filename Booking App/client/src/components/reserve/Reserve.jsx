import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import useFetch from "../../hooks/useFetch";
import { useContext } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios"

function Reserve({ setOpen, hotelId }) {
  const [selectedRooms, setSelectedRooms] = useState([]);

  const { data, loading, error } = useFetch(
    `http://localhost:8800/api/hotels/room/${hotelId}`
  );

  const { dates } = useContext(SearchContext);

  const getDatesInRange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const date = new Date(start.getTime());

    let listDates = [];

    while (date <= end) {
      listDates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }
    return listDates;
  };

  const allDates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  const isAvailable = (roomNumber) => {
    const isFound = roomNumber.unavailableDates.some((date) =>
      allDates.includes(new Date(date).getTime())
    );

    return !isFound;
  };
  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const handleClick = async (e) => {
    try {
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(
            `http://localhost:8800/api/rooms/availability/${roomId}`,
            {
              dates: allDates,
            }
          );
          console.log(res.data);
          
          return res.data;
        })
      );
    } catch (error) {
      console.log(error);
      
    }
  };
  return (
    <div className="reserve fixed inset-0 flex flex-row bg-black bg-opacity-70 z-50 justify-center items-center">
      <div className="rContainer bg-white p-6 rounded-xl space-y-2">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose mr-3"
          onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        {data.map((item) => (
          <div className="rItem flex flex-row items-center">
            <div className="rItemInfo mr-28 w-48 sm:w-64">
              <div className="rTitle font-bold">{item.title}</div>
              <div className="rDesc font-normal text-gray-500">{item.desc}</div>
              <div className="rMax">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice font-bold">Price: {item.price}</div>
            </div>
            <div className="rSelectRooms flex flex-wrap space-x-2 ">
              {item.roomNumbers.map((roomNumber) => (
                <div key={roomNumber._id} className="room flex flex-col text-xs text-gray-700">
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    disabled={!isAvailable(roomNumber)}
                    value={roomNumber._id}
                    onChange={(e) => handleSelect(e)}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button
          onClick={(e) => handleClick(e)}
          className="rButton bg-blue-800 text-white p-3 rounded-md w-full"
        >
          Reserve Now
        </button>
      </div>
    </div>
  );
}

export default Reserve;
