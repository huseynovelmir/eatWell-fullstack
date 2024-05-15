import React from "react";
import style from "./style.module.scss";
import barista from "../../assets/images/barista.jpg";
const OurStory = () => {
  return (
    <div className={style.ourStory}>
      <div className={style.container}>
        <div className={style.textArea}>
          <span>OUR STORY</span>
          <h2>Welcome</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts
          </p>
          <p>
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth.
          </p>
          <button>Learn More About us</button>
        </div>
        <img src={barista} alt="" />
      </div>
    </div>
  );
};

export default OurStory;
