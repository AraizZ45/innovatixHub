import React from "react";
import TestimonialAreaThreeItem from "./TestimonialAreaThreeItem";

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


const commentData = [
  {
    id: 1, 
    name: "John Matthews",
    designation: "Brand strategy",
    comment: `"Innovatix Hub truly transformed our online presence. Their attention to detail in web design and digital strategy was exceptional. Our website now reflects our brand perfectly, and we’ve seen significant growth in engagement. Highly recommend their services!"`
  },
  {
    id: 3, 
    name: "Michael Thompson",
    designation: "Digital Marketing or Web Design",
    comment: `"I’m incredibly impressed with the results from Innovatix Hub Australia. They not only designed a sleek, user friendly website for us, but their digital marketing strategies have brought us more clients. They understood our needs and delivered beyond expectations."`
  },
  {
    id: 4, 
    name: "David Williams",
    designation: "Graphic Design",
    comment: `"Working with Innovatix Hub has been an amazing experience. Their creative team helped us develop a digital presence that perfectly aligns with our brand. From the design to the marketing strategies, they exceeded our expectations."`
  },
  {
    id: 2, 
    name: "James Anderson",
    designation: "Web Development",
    comment: `"Innovatix Hub took our ideas and turned them into a modern, functional website. Their professionalism, creativity, and expertise made all the difference in helping us reach a broader audience. The results speak for themselves."`
  },
  {
    id: 1, 
    name: "Sarah Johnson",
    designation: "Web Design",
    comment: `"I couldn’t be happier with the work Innovatix Hub did for our business. The design team crafted an intuitive and aesthetically beautiful website, while their marketing services really boosted our online visibility. They were attentive to our vision and goals."`
  },
]

const TestimonialAreaFour = () => {
  const swiper_settings = {
    spaceBetween: 30,
    slidesPerView: 1.5,
    loop: true,
    autoplay: { delay: 5000, disableOnInteraction: true },
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 3,
      },
      576: {
        slidesPerView: 2,
      },
      0: {
        slidesPerView: 1.5,
      },
    },
  };

  const { sliderRef, toNext, toPrev } = useSwiperArrows();

  return (
    <section className="testimonial-area-three testimonial-area-four">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <div className="section-title title-style-two mb-45">
              <h2 className="title">What Our Client’s Say</h2>
            </div>
          </div>

          <div className="col-md-4">
            <div className="testimonial-nav">
              <button className="swiper-button-prev" onClick={toPrev}></button>
              <button className="swiper-button-next" onClick={toNext}></button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="swiper-container testimonial-active-three">
              <div className="swiper-wrapper">
                <Swiper
                  {...swiper_settings}
                  onBeforeInit={(swiper) => {
                    sliderRef.current = swiper;
                  }}
                >
                  {commentData.map((x) => (
                    <SwiperSlide key={x.id + Math.random()}>
                      <TestimonialAreaThreeItem data={x} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialAreaFour;
