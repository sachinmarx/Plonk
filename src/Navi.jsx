import React from "react";
import Home from "./Logos/Home";
import BookMark from "./Logos/BookMark";
import Message from "./Logos/Message";
import Profile from "./Logos/Profile";
import Settings from "./Logos/Settings";
import Notification from "./Logos/Notification";
import "./index.css";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
export default function Navi() {
  return (
    <div>
      <nav className="inline-flex  overflow-hidden flex-col ml-5 space-x-12 gap-5">
        <p
          className=" flex justify-end w-20 h-12 items-end
         text-dark text-lg font-bold"
        >
          Menu
        </p>
        <Router>
          <div className=" inline-flex flex-row pl-3 space-x-6">
            <Home />
            <Link to="/menu" className=" focus:font-bold">
              Home
            </Link>
          </div>
          <div className="inline-flex flex-row pl-2 space-x-6">
            <BookMark />

            <Link to="/bookmarks" className=" focus:font-bold">
              Bookmarks
            </Link>
          </div>
          <div className="inline-flex flex-row pl-2 space-x-6">
            <Message />

            <Link to="/mesages" className="focus:font-bold">
              Messages
            </Link>
          </div>
          <div className="inline-flex flex-row pl-2 space-x-6">
            <Notification />

            <Link to="/notifications" className="focus:font-bold">
              Notifications
            </Link>
          </div>
          <div className="inline-flex flex-row pl-2 space-x-6">
            <Settings />

            <Link to="/settings" className="focus:font-bold">
              Settings
            </Link>
          </div>
          <div className="inline-flex flex-row pl-2 space-x-6">
            <Profile />
            <Link to="/profile" className="focus:font-bold">
              Profile
            </Link>
          </div>
          <Routes>
            <Route path="/menu"></Route>
          </Routes>
          <Routes>
            <Route path="/bookmarks"></Route>
          </Routes>
          <Routes>
            <Route path="/messages"></Route>
          </Routes>
          <Routes>
            <Route path="/notifications"></Route>
          </Routes>
          <Routes>
            <Route path="/settings"></Route>
          </Routes>
          <Routes>
            <Route path="/profile"></Route>
          </Routes>
        </Router>
        <div className="left-12">
          <button className="bg-sky-600 text-white ml-14 rounded-md w-24 h-9 ">
            Add post
          </button>
        </div>
        <div>
          <p className="font-bold justify-start">ADS</p>

          <img
            className=" h-44 w-56 p-2 space-x-12"
            src="public/Images/Rectangle 3.png"
          ></img>
          <span className=" flex  text-sm">
            <img
              className="bg-rose-200 m-1 h-7 w-7"
              src="public/Images/Emoji.png"
            ></img>{" "}
            <p className="pl-2 w-44 text-sm font-semibold">
              How to improve business in social media
            </p>
          </span>
        </div>
      </nav>
    </div>
  );
}
