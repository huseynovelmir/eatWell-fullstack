import React from "react";
import style from "./style.module.scss";
import img from "../../assets/images/img.jpg";
const Gallery = () => {
  return (
    <div className={style.gallery}>
      <div className={style.container}>
        <span>Gallery</span>
        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <div className={style.images}>
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
