import React from "react";
import style from "./style.module.scss";
import OurStory from "../../components/ourStory";
import OurOffer from "../../components/ourOffer";
import News from "../../components/news";
import Gallery from "../../components/gallery";
const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.homeBg}>
        <div className={style.container}>
          <h1>Welcome To EatWell</h1>
          <span>Come and eat well with our delicious & healthy foods.</span>
          <button>Reservation</button>
        </div>
      </div>
      <OurStory />
      <OurOffer />
      <News />
      <Gallery />
    </div>
  );
};

export default Home;
