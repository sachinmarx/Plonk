import React from "react";
import Navi from "./Navi";
import Top from "./Top";
import Followers from "./Followers";
import Home from "./Home";
const App = () => {
  return (
    <div className="h-screen overflow-y-hidden">
      <Top />

      <div className="flex">
        <div className="flex-1 ">
          <Navi />
        </div>
        <div
          style={{
            height: "650px",
            overflowY: "auto",
            position: "relative",
          }}
        >
          <Home />
        </div>

        <div>
          <Followers />
        </div>
      </div>
    </div>
  );
};

export default App;
