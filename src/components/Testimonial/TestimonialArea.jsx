import React from "react";
import SlickSlider from "../SlickSlider/SlickSlider";
import TestimonialAreaItem from "./TestimonialAreaItem";
import $ from "jquery";
import { doAnimations } from "../../lib/helpers";
import cn from "classnames";

const TestimonialArea = () => {
  const slick_settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    autoplay: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    beforeChange: function (currentSlide, nextSlide) {
      var $animatingElements = $(
        '.single-slider[data-slick-index="' + nextSlide + '"]'
      ).find("[data-animation]");
      doAnimations($animatingElements);
    },
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  const slider_items = [
    {
      title: "John Matthews",
      designation: "Brand strategy",
      desc: `"Innovatix Hub truly transformed our online presence. Their attention to detail in web design and digital strategy was exceptional. Our website now reflects our brand perfectly, and we’ve seen significant growth in engagement. Highly recommend their services!"`,
      src: 1,
    },
    {
      title: "Michael Thompson",
      designation: "Digital Marketing or Web Design",
      desc: `"I’m incredibly impressed with the results from Innovatix Hub Australia. They not only designed a sleek, user friendly website for us, but their digital marketing strategies have brought us more clients. They understood our needs and delivered beyond expectations."`,
      src: 1,
    },
    {
      title: "David Williams",
      designation: "Graphic Design",
      desc: `"Working with Innovatix Hub has been an amazing experience. Their creative team helped us develop a digital presence that perfectly aligns with our brand. From the design to the marketing strategies, they exceeded our expectations."`,
      src: 3,
    },
    {
      title: "James Anderson",
      designation: "Web Development",
      desc: `"Innovatix Hub took our ideas and turned them into a modern, functional website. Their professionalism, creativity, and expertise made all the difference in helping us reach a broader audience. The results speak for themselves."`,
      src: 1,
    },
    {
      title: "Sarah Johnson",
      designation: "Web Design",
      desc: `"I couldn’t be happier with the work Innovatix Hub did for our business. The design team crafted an intuitive and aesthetically beautiful website, while their marketing services really boosted our online visibility. They were attentive to our vision and goals."`,
      src: 4,
    }
  ];

  return (
    <section className="testimonial-area pt-110 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6">
            <div className="section-title text-center mb-60">
              <span className="sub-title">Testimonials</span>
              <h2 className="title">Shat Our Customer Say About Us</h2>
            </div>
          </div>
        </div>

        <div className="testimonial-item-wrap">
          <div className="row testimonial-active">
            <SlickSlider settings={slick_settings}>
              {slider_items.map((x, index) => (
                <div
                  key={index}
                  className={cn(
                    "col-lg-3",
                    index % 2 === 0 && "testimonial-item-wrap-item-even"
                  )}
                >
                  <TestimonialAreaItem item={x} />
                </div>
              ))}
            </SlickSlider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialArea;
