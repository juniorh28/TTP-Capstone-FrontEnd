import { useState } from "react";
import Cards from "./Cards";
import "./Tabs.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 0 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(0)}
        >
          Brooklyn 
        </button>
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Manhattan
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Queens
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Staten Island
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          The Bronx
        </button>
      </div>
      <div className="content-tabs">
        <div
          className={toggleState === 0 ? "content  active-content" : "content"}
        >
          <Cards />
        </div>
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <Cards />
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <Cards />
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <Cards />
        </div>
        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Tabs;