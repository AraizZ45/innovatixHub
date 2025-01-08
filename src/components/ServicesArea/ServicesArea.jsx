import React from "react";
import ServicesAreaItem from "./ServicesAreaItem";

const ServicesArea = () => {
  const services_area_list = [
    {
      title: "UIUX Design",
      desc: "Crafting seamless experiences with intuitive design, enhancing user engagement and satisfaction.",
      url: "/services-details",
      delay_time: 2,
    },
    {
      title: "Product Design",
      desc: "Transforming ideas into innovative, functional products that enhance user experiences.",
      url: "/services-details",
      delay_time: 4,
    },
    {
      title: "Website Design",
      desc: "Creating visually appealing, user-friendly websites that drive engagement and conversions.",
      url: "/services-details",
      delay_time: 6,
    },
    {
      title: "Branding Design",
      desc: "Building distinctive, memorable brands with creative design and strategic identity.",
      url: "/services-details",
      delay_time: 8,
    },
    {
      title: "Branding Design",
      desc: "Building distinctive, memorable brands with creative design and strategic identity.",
      url: "/services-details",
      delay_time: 8,
    },
    {
      title: "Branding Design",
      desc: "Building distinctive, memorable brands with creative design and strategic identity.",
      url: "/services-details",
      delay_time: 8,
    },
    {
      title: "Branding Design",
      desc: "Building distinctive, memorable brands with creative design and strategic identity.",
      url: "/services-details",
      delay_time: 8,
    },
    {
      title: "Branding Design",
      desc: "Building distinctive, memorable brands with creative design and strategic identity.",
      url: "/services-details",
      delay_time: 8,
    },
  ];

  return (
    <section className="services-area pt-35 pb-95">
      <div className="container">
        <div className="row justify-content-center">
          {services_area_list.map((item, index) => (
            <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-10">
              <ServicesAreaItem index={index} item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesArea;
