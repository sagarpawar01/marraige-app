import React, { useEffect, useState } from "react";
import data from "../../utils/slider.json";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./Residencies.css";
import { sliderSettings } from "../../utils/common";
import { Card } from "react-bootstrap";

const Residencies = () => {
  return (
    <div id="residencies" className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="flexColStart r-head">
          {/* <span className="orangeText">Best Choices</span> */}
          <span className="resHeadingText">Our Services</span>
        </div>
        <div className="card-adjustment" >
          {/* slider */}
          {data.map((card, i) => (
              <div className="flexColStart r-card">
                <img src={card.image} alt="home" />

                <span className="secondaryText r-price">
                  <span style={{ color: "orange" }}></span>
                  <span>{card.price}</span>
                </span>
                <span className="resHeadingText">{card.name}</span>
                <span className="secondaryText">{card.detail}</span>
              </div>
          ))}
          </div>
      </div>
      <section className="c-wrapper">
      <div className="flexColStart r-head">
          {/* <span className="orangeText">Best Choices</span> */}
          <span className="resHeadingText">Our Clients</span>
        </div>
      <div className="paddings innerWidth flexCenter c-container">
        <img className='img' src="./punjabk.png" alt="" />
        <img className='img' src="./hdfcc.png" alt="" />
        <img className='img' src="./mercc.png" alt="" />
        <img className='img' src="./ht.png" alt="" />
        <img className='img' src="./delll.png" alt="" />
      </div>
    </section>
    </div>
    
  );
};

export default Residencies;

const SlideNextButton = () => {
  const swiper = useSwiper();
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);

  useEffect(() => {
    const updateButtonsVisibility = () => {
      setShowPrevButton(!swiper.isBeginning);
      setShowNextButton(!swiper.isEnd);
    };

    updateButtonsVisibility();

    swiper.on('slideChange', updateButtonsVisibility);

    return () => {
      swiper.off('slideChange', updateButtonsVisibility);
    };
  }, [swiper]);

  return (
    <div className="flexCenter r-buttons">
        <button onClick={() => swiper.slidePrev()} className={`r-prevButton ${ showPrevButton? 'visible' : 'hidden'}`}>
          &lt;
        </button>
        <button onClick={() => swiper.slideNext()} className={`r-prevButton ${showNextButton ? 'visible' : 'hidden'}`}>
          &gt;
        </button>
    </div>
  );
};
