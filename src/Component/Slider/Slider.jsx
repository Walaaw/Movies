import React from "react";
import sliderStyle from "./Slider.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useContext } from "react";
import { AppContext } from "../../Context/Context";
export default function Slider() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  let { allmovies } = useContext(AppContext);
  return (
    <>
      <div className={` position-relative vh-100 ${sliderStyle.slider}`}>
        <div className={`${sliderStyle.layer}`}>
          <div className={`${sliderStyle.smallSlider} p-5`}>
            <Carousel
              swipeable={false}
              draggable={false}
              responsive={responsive}
              ssr={true} // means to render carousel on server-side.
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="all 1s"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["tablet", "mobile"]}
              dotListClass="custom-dot-list-style"
              itemClass="carousel-item-padding-40-px"
            >
              {allmovies ? (
                allmovies.map((item) => (
                  <div className=" m-1">
                    <img
                      src={"https://image.tmdb.org/t/p/w500" + item.poster_path}
                      alt="img"
                      width={"200px"}
                      height="250px"
                      className="w-100"
                    />
                  </div>
                ))
              ) : (
                <div className="loadingScreen vh-100 d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-spinner fa-spin fa-2x"></i>
                </div>
              )}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
