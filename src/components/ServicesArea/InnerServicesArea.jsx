import React from "react";
import InnerServicesAreaItem from "./InnerServicesAreaItem";

const InnerServicesArea = () => {
  const inner_services = [
    {
      src: "/img/icon/inner_services_icon01.png",
      url: "/services-details",
      title: "Logo Design",
      desc: "Crafting Timeless Logos That Speak Your Brand’s Identity",
    },
    {
      src: "/img/icon/inner_services_icon02.png",
      url: "/services-details",
      title: "Web Designing",
      desc: "Designing Websites That Inspire, Engage, and Drive Digital Success",
    },
    {
      src: "/img/icon/inner_services_icon03.png",
      url: "/services-details",
      title: "Brand Design",
      desc: "Shaping Bold Identities That Define Your Brand’s Unique Story",
    },
    {
      src: "/img/icon/inner_services_icon04.png",
      url: "/services-details",
      title: "Packaging Design",
      desc: "Innovative Packaging That Speaks for Your Brand and Delights Customers",
    },
    {
      src: "/img/icon/inner_services_icon05.png",
      url: "/services-details",
      title: "UI/UX Design",
      desc: "Designing Intuitive Experiences That Engage Users and Elevate Interfaces",
    },
    {
      src: "/img/icon/inner_services_icon06.png",
      url: "/services-details",
      title: "Business Advertising",
      desc: "Maximizing Visibility, Driving Growth, and Amplifying Your Brand’s Reach",
    },
    {
      src: "/img/icon/inner_services_icon07.png",
      url: "/services-details",
      title: "SEO",
      desc: "Boosting Your Online Presence with Results-Driven SEO Strategies",
    },
    {
      src: "/img/icon/inner_services_icon08.png",
      url: "/services-details",
      title: "Brand Strategy",
      desc: "Crafting Strategic Solutions That Position Your Brand for Long-Term Success",
    },
  ];

  return (
    <section className="inner-services-area pt-110 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title title-style-two text-center mb-60">
              <span className="sub-title">Our Service</span>
              <h2 className="title">Empowering Your Vision with Expert Solutions</h2>
            </div>
          </div>
        </div>

        <div className="inner-services-item-wrap">
          <div className="row justify-content-center">
            {inner_services.map((x, index) => (
              <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-8">
                <InnerServicesAreaItem item={x} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnerServicesArea;
