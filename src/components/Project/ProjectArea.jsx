import React from "react";
import { Link } from "react-router-dom";
// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/core";

import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiperArrows } from "../../lib/hooks/useSwiperArrows";

// configure Swiper to use modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const ProjectArea = () => {
  const swiper_settings = {
    spaceBetween: 20,
    slidesPerView: 1.2,
    loop: true,
    autoplay: true,
    breakpoints: {
      500: {
        slidesPerView: 1.4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2.2,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 3.4,
        spaceBetween: 20,
      },
      1500: {
        slidesPerView: 3.3,
        spaceBetween: 20,
      },
    },
  };

  const { sliderRef, toNext, toPrev } = useSwiperArrows();

  return (
    <section className="project-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-4">
            <div className="project-content">
              <div className="section-title white-title mb-30">
                <span className="sub-title">Our Complete Craft</span>
                <h2 className="title">
                Shaping the Future with Innovation and Collaboration
                </h2>
              </div>
              <p>
              Turning visionary ideas into impactful solutions through collaboration, creativity, and cutting-edge technology for success.
              </p>
              <div className="content-bottom">
                <Link to="/about-me" className="btn">
                  View All Project <span></span>
                </Link>

                <div className="project-nav">
                  <button
                    className="swiper-button-prev"
                    onClick={toPrev}
                  ></button>
                  <button
                    className="swiper-button-next"
                    onClick={toNext}
                  ></button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-8">
            <div className="project-item-wrap">
              <div className="swiper-container project-active">
                <div className="swiper-wrapper">
                  <Swiper
                    {...swiper_settings}
                    onBeforeInit={(swiper) => {
                      sliderRef.current = swiper;
                    }}
                  >
                    {[1, 2, 3, 4, 5, 6].map((x, index) => (
                      <SwiperSlide key={x + index + Math.random()}>
                        <div className="swiper-slide">
                          <div className="project-item">
                            <Link to="/project-details">
                              <img
                                src={`/img/custom-projects/${x}.jpg`}
                                alt=""
                              />
                            </Link>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="project-shape-wrap">
        <img
          src="/img/project/project_shape01.png"
          alt=""
          className="shape-one ribbonRotate"
        />
        <img
          src="/img/project/project_shape02.png"
          alt=""
          className="shape-two ribbonRotate"
        />
      </div>
    </section>
  );
};

export default ProjectArea;
