import React, { useRef } from "react";
import Store from "./Json/StoryTop.json";
import Post from "./Json/Feed.json";
import "./index.css";

export default function Home() {
  const scrollContainerRef = useRef(null);

  const Left = () => {
    if (scrollContainerRef.current) {
      // Adjust as needed
      scrollContainerRef.current.scrollLeft -= 500;
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const scrollStep = 500; // Adjust as needed
      scrollContainerRef.current.scrollLeft += scrollStep;
    }
  };

  return (
    <div className="relative overflow-y-auto  hide-scrollbar">
      <div className="flex w-[630px] top-3  py-5 px-4 mr-28 mt-4 overflow-hidden space-x-8 h-30 rounded-xl border-2 border-gray-900  border-opacity-5">
        <button onClick={Left} className="w-10 h-10 mt-6">
          <img src="public/Images/Vector1.png"></img>
        </button>

        <div
          ref={scrollContainerRef}
          className="flex flex-row space-x-6 overflow-x-auto hide-scrollbar"
        >
          {Store.map((item) => (
            <div>
              <img
                className={`max-w-xl h-17 border-dashed border-2 rounded-full border-red-500
                `}
                src={item.img}
                alt={item.username}
              />

              <div className="flex justify-center pt-2 ">
                <h2 className="text-sm font-semibold "> {item.username}</h2>
              </div>
            </div>
          ))}
        </div>

        <button onClick={scrollRight} className="w-10 h-10 mt-6">
          <img src="public/Images/Vector2.png"></img>
        </button>
      </div>

      <div>
        {Post.map((item) => (
          <div className="ml-4 my-12 border-2  shadow-gray w-[603px] mt-4 shadow-sm border-box border-opacity-5 border-gray-900 rounded-xl">
            <div key={item.id}>
              <div className="flex p-3">
                <img
                  className="border-2 rounded-full border-dotted border-red-500"
                  src={item.img}
                />

                <div className="flex-col pl-4 pt-2 ">
                  <p className="text-xs font-bold">{item.name}</p>
                  <p className="text-[10px]">{item.uname}</p>
                </div>
                <div className="flex ml-96 mt-5 justify-end">
                  <img className="h-4 w-4 " src={item.logo}></img>
                </div>
              </div>
              <p className=" text-xs pl-4 pb-3 font-semibold">
                {item.content}
                <span className="text-blue-700">{item.tag}</span>
              </p>
              <div className="absolute bg-transparent overflow-hidden px-16 space-x-52  py-6 pb-5 mt-64 rounded-b-md text-white flex backdrop-blur-xl">
                <div className="flex flex-1 w-5 h-5 bg-transparent text-sm ">
                  <img className="bg-transparent" src={item.icon1} />
                  <p className="bg-transparent font-thin text-xs px-1">14k</p>
                </div>
                <div className="flex w-5 h-5 bg-transparent text-sm">
                  <img className="bg-transparent" src={item.icon2} />
                  <p className="bg-transparent text-xs font-thin mt-1 px-1">
                    2.2k
                  </p>
                </div>
                <div className="flex w-4 h-4 bg-transparent text-sm ">
                  <img className="bg-transparent" src={item.icon3} />
                </div>
              </div>
            </div>
            <img
              className="h-80 w-[603px] overflow-hidden rounded-b-xl flex"
              src={item.post}
            />

            <div>
              <p className="absolute my-3 text-xs ">2day ago</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
