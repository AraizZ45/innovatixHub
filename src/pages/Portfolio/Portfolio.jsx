import React from 'react'
import Layout from '../../layouts/Layout'
import BreadcrumbArea from '../../components/BreadcrumbArea/BreadcrumbArea'
import InnerProjectArea from '../../components/Project/InnerProjectArea'
import { Link } from 'react-router-dom';

const logo_design = [
    {
      url: "#",
      src1: "/img/project-custom/logo-design/1-01.jpg",
      src2: "/img/project-custom/logo-design/2-01.jpg",
      title: "Logo Design",
      desc: "Timeless Logos, Bold Identities",
    },
    {
      url: "#",
      src1: "/img/project-custom/logo-design/5-01.jpg",
      src2: "/img/project-custom/logo-design/4-01.jpg",
      title: "Logo Design",
      desc: "Timeless Logos, Bold Identities",
    },
    {
      url: "#",
      src1: "/img/project-custom/logo-design/6-01.jpg",
      src2: "/img/project-custom/logo-design/7-01.jpg",
      title: "Logo Design",
      desc: "Timeless Logos, Bold Identities",
    },
    {
      url: "#",
      src1: "/img/project-custom/logo-design/8-01.jpg",
      src2: "/img/project-custom/logo-design/9-01.jpg",
      title: "Logo Design",
      desc: "Timeless Logos, Bold Identities",
    },
    {
      url: "#",
      src1: "/img/project-custom/logo-design/10-01.jpg",
      src2: "/img/project-custom/logo-design/11-01.jpg",
      title: "Logo Design",
      desc: "Timeless Logos, Bold Identities",
    },
    {
      url: "#",
      src1: "/img/project-custom/logo-design/12-01.jpg",
      src2: "/img/project-custom/logo-design/13-01.jpg",
      title: "Logo Design",
      desc: "Timeless Logos, Bold Identities",
    },
    {
      url: "#",
      src1: "/img/project-custom/logo-design/14-01.jpg",
      src2: "/img/project-custom/logo-design/15-01.jpg",
      title: "Logo Design",
      desc: "Timeless Logos, Bold Identities",
    },
    {
      url: "#",
      src1: "/img/project-custom/logo-design/16-01.jpg",
      src2: "/img/project-custom/logo-design/22-01.jpg",
      title: "Logo Design",
      desc: "Timeless Logos, Bold Identities",
    },
    {
      url: "#",
      src1: "/img/project-custom/logo-design/18-01.jpg",
      src2: "/img/project-custom/logo-design/19-01.jpg",
      title: "Logo Design",
      desc: "Timeless Logos, Bold Identities",
    },
    {
      url: "#",
      src1: "/img/project-custom/logo-design/20-01.jpg",
      src2: "/img/project-custom/logo-design/21-01.jpg",
      title: "Logo Design",
      desc: "Timeless Logos, Bold Identities",
    },
  ];
const web_design = [
    {
      url: "#",
      src1: "/img/project-custom/web-design/1-01.jpg",
      src2: "/img/project-custom/web-design/2-01.jpg",
      title: "Web Design",
      desc: "Innovative Websites, Seamless Experience",
    },
    {
      url: "#",
      src1: "/img/project-custom/web-design/5-01.jpg",
      src2: "/img/project-custom/web-design/4-01.jpg",
      title: "Web Design",
      desc: "Innovative Websites, Seamless Experience",
    },
    {
      url: "#",
      src1: "/img/project-custom/web-design/6-01.jpg",
      src2: "/img/project-custom/web-design/7-01.jpg",
      title: "Web Design",
      desc: "Innovative Websites, Seamless Experience",
    },
    {
      url: "#",
      src1: "/img/project-custom/web-design/8-01.jpg",
      src2: "/img/project-custom/web-design/9-01.jpg",
      title: "Web Design",
      desc: "Innovative Websites, Seamless Experience",
    },
    {
      url: "#",
      src1: "/img/project-custom/web-design/10-01.jpg",
      src2: "/img/project-custom/web-design/11-01.jpg",
      title: "Web Design",
      desc: "Innovative Websites, Seamless Experience",
    },
    {
      url: "#",
      src1: "/img/project-custom/web-design/12-01.jpg",
      src2: "/img/project-custom/web-design/13-01.jpg",
      title: "Web Design",
      desc: "Innovative Websites, Seamless Experience",
    },
    {
      url: "#",
      src1: "/img/project-custom/web-design/14-01.jpg",
      src2: "/img/project-custom/web-design/15-01.jpg",
      title: "Web Design",
      desc: "Innovative Websites, Seamless Experience",
    },
    {
      url: "#",
      src1: "/img/project-custom/web-design/16-01.jpg",
      src2: "/img/project-custom/web-design/22-01.jpg",
      title: "Web Design",
      desc: "Innovative Websites, Seamless Experience",
    },
  ];
const brand_design = [
    {
      url: "#",
      src1: "/img/project-custom/brand-design/1-01.jpg",
      src2: "/img/project-custom/brand-design/2-01.jpg",
      title: "Brand Design",
      desc: "Defining Identities, Empowering Brands",
    },
    {
      url: "#",
      src1: "/img/project-custom/brand-design/5-01.jpg",
      src2: "/img/project-custom/brand-design/4-01.jpg",
      title: "Brand Design",
      desc: "Defining Identities, Empowering Brands",
    },
    {
      url: "#",
      src1: "/img/project-custom/brand-design/6-01.jpg",
      src2: "/img/project-custom/brand-design/7-01.jpg",
      title: "Brand Design",
      desc: "Defining Identities, Empowering Brands",
    },
    {
      url: "#",
      src1: "/img/project-custom/brand-design/8-01.jpg",
      src2: "/img/project-custom/brand-design/9-01.jpg",
      title: "Brand Design",
      desc: "Defining Identities, Empowering Brands",
    },
    {
      url: "#",
      src1: "/img/project-custom/brand-design/10-01.jpg",
      src2: "/img/project-custom/brand-design/11-01.jpg",
      title: "Brand Design",
      desc: "Defining Identities, Empowering Brands",
    },
    {
      url: "#",
      src1: "/img/project-custom/brand-design/12-01.jpg",
      src2: "/img/project-custom/brand-design/13-01.jpg",
      title: "Brand Design",
      desc: "Defining Identities, Empowering Brands",
    },
    {
      url: "#",
      src1: "/img/project-custom/brand-design/14-01.jpg",
      src2: "/img/project-custom/brand-design/15-01.jpg",
      title: "Brand Design",
      desc: "Defining Identities, Empowering Brands",
    },
    {
      url: "#",
      src1: "/img/project-custom/brand-design/16-01.jpg",
      src2: "/img/project-custom/brand-design/17-01.jpg",
      title: "Brand Design",
      desc: "Defining Identities, Empowering Brands",
    },
    {
      url: "#",
      src1: "/img/project-custom/brand-design/18-01.jpg",
      src2: "/img/project-custom/brand-design/19-01.jpg",
      title: "Brand Design",
      desc: "Defining Identities, Empowering Brands",
    },
  ];
const book_design = [
    {
      url: "#",
      src1: "/img/project-custom/book-design/1-01.jpg",
      src2: "/img/project-custom/book-design/2-01.jpg",
      title: "Book Design",
      desc: "Crafting Stories, Designing Pages",
    },
    {
      url: "#",
      src1: "/img/project-custom/book-design/5-01.jpg",
      src2: "/img/project-custom/book-design/4-01.jpg",
      title: "Book Design",
      desc: "Crafting Stories, Designing Pages",
    },
    {
      url: "#",
      src1: "/img/project-custom/book-design/6-01.jpg",
      src2: "/img/project-custom/book-design/7-01.jpg",
      title: "Book Design",
      desc: "Crafting Stories, Designing Pages",
    },
    {
      url: "#",
      src1: "/img/project-custom/book-design/8-01.jpg",
      src2: "/img/project-custom/book-design/9-01.jpg",
      title: "Book Design",
      desc: "Crafting Stories, Designing Pages",
    },
    {
      url: "#",
      src1: "/img/project-custom/book-design/10-01.jpg",
      src2: "/img/project-custom/book-design/11-01.jpg",
      title: "Book Design",
      desc: "Crafting Stories, Designing Pages",
    },
  ];
const stationary = [
    {
      url: "#",
      src1: "/img/project-custom/stationary/1-01.jpg",
      src2: "/img/project-custom/stationary/2-01.jpg",
      title: "Stationary",
      desc: "Elevating Brands Through Stationery",
    },
    {
      url: "#",
      src1: "/img/project-custom/stationary/5-01.jpg",
      src2: "/img/project-custom/stationary/4-01.jpg",
      title: "Stationary",
      desc: "Elevating Brands Through Stationery",
    },
    {
      url: "#",
      src1: "/img/project-custom/stationary/6-01.jpg",
      src2: "/img/project-custom/stationary/7-01.jpg",
      title: "Stationary",
      desc: "Elevating Brands Through Stationery",
    },
    {
      url: "#",
      src1: "/img/project-custom/stationary/8-01.jpg",
      src2: "/img/project-custom/stationary/9-01.jpg",
      title: "Stationary",
      desc: "Elevating Brands Through Stationery",
    },
    {
      url: "#",
      src1: "/img/project-custom/stationary/10-01.jpg",
      src2: "/img/project-custom/stationary/11-01.jpg",
      title: "Stationary",
      desc: "Elevating Brands Through Stationery",
    },
    {
      url: "#",
      src1: "/img/project-custom/stationary/12-01.jpg",
      src2: "/img/project-custom/stationary/13-01.jpg",
      title: "Stationary",
      desc: "Elevating Brands Through Stationery",
    },
    {
      url: "#",
      src1: "/img/project-custom/stationary/14-01.jpg",
      src2: "/img/project-custom/stationary/15-01.jpg",
      title: "Stationary",
      desc: "Elevating Brands Through Stationery",
    },
    {
      url: "#",
      src1: "/img/project-custom/stationary/16-01.jpg",
      src2: "/img/project-custom/stationary/17-01.jpg",
      title: "Stationary",
      desc: "Elevating Brands Through Stationery",
    },
  ];
const appDesign = [
    {
      url: "#",
      src1: "/img/project-custom/app-design/1-01.jpg",
      src2: "/img/project-custom/app-design/2-01.jpg",
      title: "App Design",
      desc: "Innovative Interfaces, Engaging Experiences",
    },
    {
      url: "#",
      src1: "/img/project-custom/app-design/5-01.jpg",
      src2: "/img/project-custom/app-design/4-01.jpg",
      title: "App Design",
      desc: "Innovative Interfaces, Engaging Experiences",
    },
    {
      url: "#",
      src1: "/img/project-custom/app-design/6-01.jpg",
      src2: "/img/project-custom/app-design/7-01.jpg",
      title: "App Design",
      desc: "Innovative Interfaces, Engaging Experiences",
    },
    {
      url: "#",
      src1: "/img/project-custom/app-design/8-01.jpg",
      src2: "/img/project-custom/app-design/13-01.jpg",
      title: "App Design",
      desc: "Innovative Interfaces, Engaging Experiences",
    },
    {
      url: "#",
      src1: "/img/project-custom/app-design/14-01.jpg",
      src2: "/img/project-custom/app-design/15-01.jpg",
      title: "App Design",
      desc: "Innovative Interfaces, Engaging Experiences",
    },
    {
      url: "#",
      src1: "/img/project-custom/app-design/16-01.jpg",
      src2: "/img/project-custom/app-design/13-01.jpg",
      title: "App Design",
      desc: "Innovative Interfaces, Engaging Experiences",
    },
  ];
const businessAdvertising = [
    {
      url: "#",
      src1: "/img/project-custom/bussiness-advertising/business-advertizing-01-min.jpg",
      src2: "/img/project-custom/bussiness-advertising/business-advertizing-02-min.jpg",
      title: "Bussiness Advertising",
      desc: "Driving Growth, Amplifying Succes",
    },
    {
      url: "#",
      src1: "/img/project-custom/bussiness-advertising/business-advertizing-03-min.jpg",
      src2: "/img/project-custom/bussiness-advertising/business-advertizing-04-min.jpg",
      title: "Bussiness Advertising",
      desc: "Driving Growth, Amplifying Succes",
    },
    {
      url: "#",
      src1: "/img/project-custom/bussiness-advertising/business-advertizing-05-min.jpg",
      src2: "/img/project-custom/bussiness-advertising/business-advertizing-06-min.jpg",
      title: "Bussiness Advertising",
      desc: "Driving Growth, Amplifying Succes",
    },
    {
      url: "#",
      src1: "/img/project-custom/bussiness-advertising/business-advertizing-07-min.jpg",
      src2: "/img/project-custom/bussiness-advertising/business-advertizing-08-min.jpg",
      title: "Bussiness Advertising",
      desc: "Driving Growth, Amplifying Succes",
    },
    {
      url: "#",
      src1: "/img/project-custom/bussiness-advertising/business-advertizing-09-min.jpg",
      src2: "/img/project-custom/bussiness-advertising/business-advertizing-10-min.jpg",
      title: "Bussiness Advertising",
      desc: "Driving Growth, Amplifying Succes",
    },
    {
      url: "#",
      src1: "/img/project-custom/bussiness-advertising/business-advertizing-11-min.jpg",
      src2: "/img/project-custom/bussiness-advertising/business-advertizing-12-min.jpg",
      title: "Bussiness Advertising",
      desc: "Driving Growth, Amplifying Succes",
    },
    {
      url: "#",
      src1: "/img/project-custom/bussiness-advertising/business-advertizing-13-min.jpg",
      src2: "/img/project-custom/bussiness-advertising/business-advertizing-14-min.jpg",
      title: "Bussiness Advertising",
      desc: "Driving Growth, Amplifying Succes",
    },
    {
      url: "#",
      src1: "/img/project-custom/bussiness-advertising/business-advertizing-15-min.jpg",
      src2: "/img/project-custom/bussiness-advertising/business-advertizing-16-min.jpg",
      title: "Bussiness Advertising",
      desc: "Driving Growth, Amplifying Succes",
    },
  ];


function Portfolio() {
  return (
    <Layout header={1} footer={1} className="" mainClassName="">
      <BreadcrumbArea
        title="Portfolio"
        subtitle={"Portfolio"}
        className={"pt-175 pb-140"}
      />
      <div className="d-flex gap-2 items-center justify-content-center flex-wrap" style={{marginTop: "-70px", marginBottom: "60px"}}>
        <a href={"#logo-design"} className='tab-btn'>Logo Design</a>
        <a href={"#web-design"} className='tab-btn'>Web Design</a>
        <a href={"#brand-design"} className='tab-btn'>Brand Design</a>
        <a href={"#book-design"} className='tab-btn'>Book Design</a>
        <a href={"#stationary-design"} className='tab-btn'>Stationary</a>
        <a href={"#app-design"} className='tab-btn'>App Design</a>
        <a href={"#business-advertizing"} className='tab-btn'>Business Advertising</a>
        <a href={""} className='tab-btn'>Logo Design</a>
        <a href={""} className='tab-btn'>Logo Design</a>
      </div>
      <InnerProjectArea dark={true} items={logo_design} title="Logo Design" id={"logo-design"}/>
      <InnerProjectArea dark={false} items={web_design} title="Web Design" id={"web-design"}/>
      <InnerProjectArea dark={true} items={brand_design} title="Brand Design" id={"brand-design"}/>
      <InnerProjectArea dark={false} items={book_design} title="Book Design" id={"book-design"}/>
      <InnerProjectArea dark={true} items={stationary} title="Stationary" id={"stationary-design"}/>
      <InnerProjectArea dark={false} items={appDesign} title="App Design" id={"app-design"}/>
      <InnerProjectArea dark={true} items={businessAdvertising} title="Business Advertising" id={"business-advertizing"}/>
      </Layout>
  )
}

export default Portfolio