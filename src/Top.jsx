import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Search from "./Logos/Search";
import "./top.css";
export default function Top() {
  return (
    <header className="bg-rose-300 h-20 w-full flex items-center space-x-96">
      <div className=" bg-rose-300 absolute left-32">
        <a href="#">
          {" "}
          <p className=" text-5xl bg-rose-300 font-semibold bg-gradient-to-b from-purple-500 via-pink-600 to-transparent text-transparent bg-clip-text justify-self-center">
            Plonk
          </p>
        </a>
      </div>
      <div className="flex items-center bg-rose-300 space-x-24">
        <div className="w-96 bg-rose-300 flex justify-end items-center space-x-10">
          <img
            className=" border-2 border-red-500 bg-rose-300 rounded-full w-14 h-14 "
            src="public/Images/Ellipse 1.jpg"
          />
          <Router>
            <Link to="/home" className="bg-rose-300 font-semibold">
              My Friends
            </Link>

            <Link to="/gallery" className="bg-rose-300 font-semibold">
              My Gallery
            </Link>
            <Routes>
              <Route path="/home"></Route>
            </Routes>
            <Routes>
              <Route path="/gallery"></Route>
            </Routes>
          </Router>
        </div>
        <div className="relative left-12 bg-rose-300">
          <input
            type="text"
            placeholder="Search"
            className=" bg-rose-300 border-2  focus:outline-none focus:border-b-2 placeholder:font-semibold placeholder:text-black"
            variant="static"
          />
          <button>
            <div className="absolute top-0 right-2 bg-rose-300">
              <Search />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
