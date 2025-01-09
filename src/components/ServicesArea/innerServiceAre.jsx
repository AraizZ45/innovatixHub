import React from 'react'
import InnerServiceAreaTwoItem from './InnerServiceAreaTwoItem'
import InnerServicesAreaItem from './InnerServicesAreaItem';

function InnerServiceAre() {
  const services = [
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
    {
      src: "/img/icon/inner_services_icon08.png",
      url: "/services-details",
      title: "PPC",
      desc: "Driving immediate results with targeted PPC campaigns that maximize ROI, enhance visibility.",
    },
    {
      src: "/img/icon/inner_services_icon08.png",
      url: "/services-details",
      title: "Content Writing",
      desc: "Crafting compelling, high-quality content that resonates with your audience, boosts engagement.",
    },
    {
      src: "/img/icon/inner_services_icon08.png",
      url: "/services-details",
      title: "Social Campaigns",
      desc: "Designing dynamic social campaigns that amplify your brand’s voice, engage your audience.",
    },
  ];
    
    return (
        <div className="container mb-40" style={{marginTop: "-70px"}}>
            <div className="inner-services-wrap-two">
            <div className="row justify-content-center">
                {services.map((x, index) => (
                    <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-10">
                        <InnerServicesAreaItem item={x} />
                    </div>
                ))}
            </div>
        </div>
        </div>
        
    )
}

export default InnerServiceAre