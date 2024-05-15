import style from "./style.module.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import fish from "../../assets/images/fish.jpg";

const handleDragStart = (e) => e.preventDefault();
const OurOffer = () => {
  const responsive = {
    1200: { items: 1 },
    1201: { items: 3 },
  };

  const items = [
    <div className={style.card}>
      <img src={fish} alt="" />
      <span className={style.span}>$39.00</span>
      <h4 className={style.h4}>Salmon Fish</h4>
      <p className={style.p}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure et neque,
        eligendi tempora expedita repudiandae harum, mollitia quisquam culpa rem
        error, quod dolore pariatur adipisci hic repellendus enim. Quo, neque.
      </p>
      <button className={style.caruselbtn}>order now</button>
    </div>,
    <div className={style.card}>
      <img src={fish} alt="" />
      <span className={style.span}>$39.00</span>
      <h4 className={style.h4}>Salmon Fish</h4>
      <p className={style.p}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure et neque,
        eligendi tempora expedita repudiandae harum, mollitia quisquam culpa rem
        error, quod dolore pariatur adipisci hic repellendus enim. Quo, neque.
      </p>
      <button className={style.caruselbtn}>order now</button>
    </div>,
    <div className={style.card}>
      <img src={fish} alt="" />
      <span className={style.span}>$39.00</span>
      <h4 className={style.h4}>Salmon Fish</h4>
      <p className={style.p}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure et neque,
        eligendi tempora expedita repudiandae harum, mollitia quisquam culpa rem
        error, quod dolore pariatur adipisci hic repellendus enim. Quo, neque.
      </p>
      <button className={style.caruselbtn}>order now</button>
    </div>,
    <div className={style.card}>
      <img src={fish} alt="" />
      <span className={style.span}>$39.00</span>
      <h4 className={style.h4}>Salmon Fish</h4>
      <p className={style.p}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure et neque,
        eligendi tempora expedita repudiandae harum, mollitia quisquam culpa rem
        error, quod dolore pariatur adipisci hic repellendus enim. Quo, neque.
      </p>
      <button className={style.caruselbtn}>order now</button>
    </div>,
    <div className={style.card}>
      <img src={fish} alt="" />
      <span className={style.span}>$39.00</span>
      <h4 className={style.h4}>Salmon Fish</h4>
      <p className={style.p}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure et neque,
        eligendi tempora expedita repudiandae harum, mollitia quisquam culpa rem
        error, quod dolore pariatur adipisci hic repellendus enim. Quo, neque.
      </p>
      <button className={style.caruselbtn}>order now</button>
    </div>,
    <div className={style.card}>
      <img src={fish} alt="" />
      <span className={style.span}>$39.00</span>
      <h4 className={style.h4}>Salmon Fish</h4>
      <p className={style.p}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure et neque,
        eligendi tempora expedita repudiandae harum, mollitia quisquam culpa rem
        error, quod dolore pariatur adipisci hic repellendus enim. Quo, neque.
      </p>
      <button className={style.caruselbtn}>order now</button>
    </div>,
  ];
  return (
    <div className={style.ourOffer}>
      <div className={style.container}>
        <span>OUR OFFERS</span>
        <h1>Our Offer This Summer</h1>

        <p>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>
        <AliceCarousel
          className={style.cards}
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
        />
      </div>
    </div>
  );
};

export default OurOffer;
