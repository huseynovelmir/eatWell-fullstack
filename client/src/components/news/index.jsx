import React from "react";
import style from "./style.module.scss";
import fish from "../../assets/images/fish.jpg";
const News = () => {
  return (
    <div className={style.news}>
      <div className={style.container}>
        <span>News</span>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <div className={style.cards}>
          <div className={style.card}>
            <img src={fish} alt="" />
            <span className={style.span}>$39.00</span>
            <h4 className={style.h4}>Salmon Fish</h4>
            <p className={style.p}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure et
              neque, eligendi tempora expedita repudiandae harum, mollitia
              quisquam culpa rem error, quod dolore pariatur adipisci hic
              repellendus enim. Quo, neque.
            </p>
            <button className={style.caruselbtn}>order now</button>
          </div>
          <div className={style.card}>
            <img src={fish} alt="" />
            <span className={style.span}>$39.00</span>
            <h4 className={style.h4}>Salmon Fish</h4>
            <p className={style.p}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure et
              neque, eligendi tempora expedita repudiandae harum, mollitia
              quisquam culpa rem error, quod dolore pariatur adipisci hic
              repellendus enim. Quo, neque.
            </p>
            <button className={style.caruselbtn}>order now</button>
          </div>
          <div className={style.card}>
            <img src={fish} alt="" />
            <span className={style.span}>$39.00</span>
            <h4 className={style.h4}>Salmon Fish</h4>
            <p className={style.p}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure et
              neque, eligendi tempora expedita repudiandae harum, mollitia
              quisquam culpa rem error, quod dolore pariatur adipisci hic
              repellendus enim. Quo, neque.
            </p>
            <button className={style.caruselbtn}>order now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
