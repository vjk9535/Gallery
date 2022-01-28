import React from "react";
import { Image } from "semantic-ui-react";

const Home = () => {
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
            <a href="/Gallery">Gallery</a>
          </li>
          <li>
            <a href="/FeedBackForm">About</a>
          </li>
        </ul>
        <span className="nameAlign">
          <div>
            <h1 data-text="I'am ,">I'am , </h1>
            <h1 data-text="Sindhuja Vangipuram,">Sindhuja Vangipuram,</h1>
            <h1 data-text="Photographer.">Photographer.</h1>
          </div>
          <div>
            <Image
              className="profileImg"
              src="profilepic.jpg"
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
