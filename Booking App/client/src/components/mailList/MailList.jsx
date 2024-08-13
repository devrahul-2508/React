import React from "react";

function MailList() {
  return (
    <div className="mail w-full bg-blue-800 text-white flex flex-col gap-10 items-center p-10">
      <h1 className="mailTitle font-bold text-3xl">Save Time,Save Money</h1>
      <span className="mailDesc font-semibold text-xl">
        Sign up and we'll send the best deals to you
      </span>
      <div className="mailInputContainer flex items-center w-96 space-x-1">
        <input
          className="w-3/4 h-10 rounded-md p-1"
          type="text"
          placeholder="Your email"
        />
        <button className="h-10 bg-blue-400 text-white rounded-md p-1">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default MailList;
