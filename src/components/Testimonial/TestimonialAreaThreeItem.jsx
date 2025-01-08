import React from "react";

const TestimonialAreaThreeItem = (props) => {
  return (
    <div className="swiper-slide">
      <div className="testimonial-item-three">
        <div className="testimonial-thumb-three">
          <img src={`/img/images/testimonial_avatar0${props.data.id}.png`} alt="" />
        </div>

        <div className="testimonial-content-three">
          <h4 className="title">{props.data.name}</h4>

          <span>{props.data.designation}</span>

          <p>
            {props.data.comment}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialAreaThreeItem;
