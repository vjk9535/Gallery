import React from "react";
import { Image } from "semantic-ui-react";
import { useState } from "react";

const Home = () => {
  const [activeItem, setActiveItem] = useState("Home");
  const handleItemClick = (e, { name }) => setActiveItem(name);
  return (
    <>
      <div className="App">
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <div className="square"></div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
        </ul>
        <span>
          <div>
            <h1 data-text="I'am ,">I'am , </h1>
            <h1 data-text="Sindhuja Vangipuram,">Sindhuja Vangipuram,</h1>
            <h1 data-text="Photographer.">Photographer.</h1>
          </div>
          <div>
            <Image
              className="profileImg"
              src="IMG_20191026_213049.jpg"
              alt="vijay"
              width="300"
              height="300"
              circular
            />
          </div>
        </span>
      </div>
    </>
  );
};

export default Home;
