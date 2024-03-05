import React from "react";
import Script from "next/script";
import img1 from "../public/images/Slider1.jpg";
// import img2 from '../public/images/Slider2.jpg'
// import img3 from '../public/images/Slider3.jpg'
// import img4 from '../public/images/Slider4.jpg'
// import img5 from '../public/images/Slider5.jpg'
import img6 from "../public/images/Slider6.jpg";
import img7 from "../public/images/Slider7.jpg";
import next from "../public/images/next.png";
import prev from "../public/images/previous.png";
const Slider = () => {
  return (
    <div className="overflow-hidden">
      <style jsx>{`
        

        :root {
          --unhover-border-color: rgba(0, 0, 0, 0.5);
          --unhover-text-color: rgba(255, 255, 255, 0.5);
          --unhover-background-color: rgba(0, 0, 0, 0.5);

          --hover-border-color: rgba(0, 0, 0, 0.8);
          --hover-text-color: rgba(255, 255, 255, 0.8);
          --hover-background-color: rgba(0, 0, 0, 0.8);

          --transition-delay: 0.5s;
        }

        .carousel {
          position: relative;
          width: 100vw;
          height: 50vh;
          margin: 0 auto;
          
        }

        .slider-button {
          font-size: 1rem;
          padding: 5px 1rem;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: var(--unhover-background-color);
          border: 2px solid var(--unhover-border-color);
          color: var(--unhover-text-color);
          z-index: 1;
          cursor: pointer;
        
        }

        .slider-button-prev {
          left: 0.5rem;
        }

        .slider-button-next {
          right: 0.5rem;
        }

        .slider-button:hover,
        .slider-button:focus {
          background-color: var(--hover-background-color);
          border: 2px solid var(--hover-border-color);
          color: var(--hover-text-color);
        }

        ul.slides {
          list-style-type: none;
          height: 100%;
          width: 100%;
        }

        li.slide {
          position: absolute;
          top: 0;
          left: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
          opacity: 0;
          transition: opacity var(--transition-delay);
          transition-delay: var(--transition-delay);
        }

        .slide > img {
          height: 100%;
          width: 100%;
          object-fit: cover;
          object-position: center;
        }

        li.slide[data-active-slide] {
          opacity: 1;
        }

        .slides-circles {
          display: flex;
          position: absolute;
          bottom: 3rem;
          left: 50%;
          transform: translateX(-50%);
          overflow: hidden;
        }

        .slides-circles > div {
          height: 20px;
          width: 20px;
          margin: 10px;
          border: 3px solid white;
          border-radius: 50%;
          transition: background-color var(--transition-delay);
          transition-delay: var(--transition-delay);
        }

        .slides-circles > div[data-active-slide] {
          background-color: white;

        }
        .arrows{
          // width: 25px;
          height: 50px;
          opacity: 0.5;
          // invert: 1;
          filter: invert(1);
          // background-color:white;
          border-radius: 50%;
        }
        .arrows:hover{
          opacity: 0.7;
          // height: 55px;
        }
      `}</style>
      {/* <Script>
        {`
    const buttons = document.querySelectorAll("[data-slide-direction]");
        if(buttons.length > 0){
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const offset = button.dataset.slideDirection === "next" ? 1 : -1;
        changeSlide(offset);
      });
    });
  }
    
    const changeSlide = (offset) => {
      const slides = document.querySelector(".slides");
      const activeSlide = slides.querySelector("[data-active-slide]");
      
      let newIndex = [...slides.children].indexOf(activeSlide) + offset;
      newIndex =
        newIndex < 0
          ? slides.children.length - 1
          : newIndex === slides.children.length
          ? 0
          : newIndex;
      slides.children[newIndex].dataset.activeSlide = true;
      delete activeSlide.dataset.activeSlide;
    
      const circles = document.querySelector(".slides-circles");
      const activeCircle = circles.querySelector("[data-active-slide]");
      circles.children[newIndex].dataset.activeSlide = true;
      delete activeCircle.dataset.activeSlide;
    };
    
    setInterval(changeSlide.bind(null, 1), 6000);
    
  `}
      </Script> */}
      {/* <div className="overflow-hidden"></div> */}
      <section className="carousel">
        <button
          className="slider-button slider-button-prev"
          data-slide-direction="prev"
        >
          <img src={prev.src} className="arrows" />
        </button>
        <button
          className="slider-button slider-button-next "
          data-slide-direction="next"
        >
           <img src={next.src} className="arrows" />
        </button>
        <ul className="slides">
          <li className="slide" data-active-slide>
            <img src={img1.src} alt="Nature Image #1" />
          </li>
          <li className="slide">
            <img src={img6.src} alt="Nature Image #2" />
          </li>
          <li className="slide">
            <img src={img7.src} alt="Nature Image #3" />
          </li>
        </ul>
        <div className="slides-circles">
          <div data-active-slide></div>
          <div></div>
          <div></div>
        </div>
      </section>
    </div>
  );
};

export default Slider;
