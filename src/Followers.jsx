import React from "react";

import jsonData from "./Json/RecentFollowers.json";
import data from "./Json/Suggested.json";
export default function Followers() {
  return (
    <div className="rounded-xl  w-92 p-6 mr-4 mt-6 flow  space-y-4 border-2 border-gray-900 border-opacity-5 ">
      <div className="ml-5 ">
        <p className="font-bold">Recent Followers</p>
        {jsonData.map((item) => (
          <div key={item.id}>
            <div className="flex w-auto ml-8 pt-4 ">
              <img src={item.image} alt={item.name} />
              <div className="flex flex-col pl-5 w-32">
                <h2 className="text-sm font-semibold">{item.name}</h2>

                <p className="text-[10px] w-12">{item.uname}</p>
              </div>
              <div className="">
                <button className=" bg-sky-800 p-1 px-2 text-sm text-white rounded-md">
                  Accept
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="ml-5">
        <p className="pb-5 font-bold">Suggeseted For You</p>
        {data.map((item) => (
          <div key={item.id}>
            <div className="flex w-64 ml-8 pt-4 ">
              <img src={item.image} alt={item.name} />
              <div className="flex flex-col pl-5 w-32">
                <h2 className="text-sm font-semibold">{item.name}</h2>

                <p className="text-[10px] w-12">{item.uname}</p>
              </div>
              <div className="">
                <button className=" bg-sky-800 p-1 px-2 text-sm text-white rounded-md">
                  Accept
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
