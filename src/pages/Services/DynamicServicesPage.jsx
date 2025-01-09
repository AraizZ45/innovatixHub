import React, { useEffect, useState } from 'react'
import Layout from '../../layouts/Layout'
import BreadcrumbArea from '../../components/BreadcrumbArea/BreadcrumbArea'
import { useParams } from 'react-router-dom'
import ServicesDetailsArea from '../../components/ServicesArea/ServicesDetailsArea';
import CounterAreaFour from '../../components/CounterArea/CounterAreaFour';
import NewsLetterArea from '../../components/NewsLetter/NewsLetterArea';
import CaseStudy from '../../components/CaseStudy/CaseStudy';

const data = {
    "web-design": {
        title: "Web Design",
        tagLine: "A logo is much more than just a graphic; it’s the essence of your brand captured in a single image. It represents the values, mission, and vision of your company, instantly conveying what you stand for to your audience. At the heart of every successful brand lies a memorable logo that connects with customers and leaves a lasting impression.",
        imgs: [
            {
                colClassName: "col-lg-4 col-md-6",
                src: "/img/project/inner_project01.jpg",
                url: "/project-details",
                title: "Motion Design",
                desc: "Lorem Ipsum is simply",
            },
            {
                colClassName: "col-lg-4 col-md-6",
                src: "/img/project/inner_project01.jpg",
                url: "/project-details",
                title: "Motion Design",
                desc: "Lorem Ipsum is simply",
            },
            {
                colClassName: "col-lg-4 col-md-6",
                src: "/img/project/inner_project01.jpg",
                url: "/project-details",
                title: "Motion Design",
                desc: "Lorem Ipsum is simply",
            },
            {
                colClassName: "col-lg-4 col-md-6",
                src: "/img/project/inner_project01.jpg",
                url: "/project-details",
                title: "Motion Design",
                desc: "Lorem Ipsum is simply",
            },
            {
                colClassName: "col-lg-4 col-md-6",
                src: "/img/project/inner_project01.jpg",
                url: "/project-details",
                title: "Motion Design",
                desc: "Lorem Ipsum is simply",
            },
            {
                colClassName: "col-lg-4 col-md-6",
                src: "/img/project/inner_project01.jpg",
                url: "/project-details",
                title: "Motion Design",
                desc: "Lorem Ipsum is simply",
            },
        ]
    },
    "brand-design": {
        title: "Brand Design",
        tagLine: "A logo is much more than just a graphic; it’s the essence of your brand captured in a single image. It represents the values, mission, and vision of your company, instantly conveying what you stand for to your audience. At the heart of every successful brand lies a memorable logo that connects with customers and leaves a lasting impression.",
        imgs: [
            {
                colClassName: "col-lg-4 col-md-6",
                src: "/img/project/inner_project01.jpg",
                url: "/project-details",
                title: "Motion Design",
                desc: "Lorem Ipsum is simply",
            },
            {
                colClassName: "col-lg-4 col-md-6",
                src: "/img/project/inner_project01.jpg",
                url: "/project-details",
                title: "Motion Design",
                desc: "Lorem Ipsum is simply",
            },
            {
                colClassName: "col-lg-4 col-md-6",
                src: "/img/project/inner_project01.jpg",
                url: "/project-details",
                title: "Motion Design",
                desc: "Lorem Ipsum is simply",
            },
            {
                colClassName: "col-lg-4 col-md-6",
                src: "/img/project/inner_project01.jpg",
                url: "/project-details",
                title: "Motion Design",
                desc: "Lorem Ipsum is simply",
            },
            {
                colClassName: "col-lg-4 col-md-6",
                src: "/img/project/inner_project01.jpg",
                url: "/project-details",
                title: "Motion Design",
                desc: "Lorem Ipsum is simply",
            },
        ]
    },
}   


function DynamicServicesPage() {
    const params = useParams();
    const [settled, setSettled] = useState({title: "Lorem",
        tagLine: "A logo is much more than just a graphic; it’s the essence of your brand captured in a single image. It represents the values, mission, and vision of your company, instantly conveying what you stand for to your audience. At the heart of every successful brand lies a memorable logo that connects with customers and leaves a lasting impression.",
        imgs: [
            {
                colClassName: "col-lg-4 col-md-6",
                src: "/img/project/inner_project01.jpg",
                url: "/project-details",
                title: "Motion Design",
                desc: "Lorem Ipsum is simply",
            },
            {
                colClassName: "col-lg-4 col-md-6",
                src: "/img/project/inner_project01.jpg",
                url: "/project-details",
                title: "Motion Design",
                desc: "Lorem Ipsum is simply",
            },
            {
                colClassName: "col-lg-4 col-md-6",
                src: "/img/project/inner_project01.jpg",
                url: "/project-details",
                title: "Motion Design",
                desc: "Lorem Ipsum is simply",
            },
            {
                colClassName: "col-lg-4 col-md-6",
                src: "/img/project/inner_project01.jpg",
                url: "/project-details",
                title: "Motion Design",
                desc: "Lorem Ipsum is simply",
            },
            {
                colClassName: "col-lg-4 col-md-6",
                src: "/img/project/inner_project01.jpg",
                url: "/project-details",
                title: "Motion Design",
                desc: "Lorem Ipsum is simply",
            },
        ]})
    const paramsEntry = () => {
        Object.entries(data).forEach(([key, value]) => {
            if (key === params.service){
                setSettled(value)
            }
        });
    }
    useEffect(() => {
        paramsEntry();
    }, [])
    return (
        <Layout header={1} footer={1} className="" mainClassName="">
            <BreadcrumbArea
                title={settled.title}
                subtitle={"Services Details"}
                className={"pt-175 pb-50"}
            />
            <ServicesDetailsArea para={settled.tagLine}/>
            {/* <CounterAreaFour /> */}
            {settled && <CaseStudy studies={settled.imgs}/>}
            
            <NewsLetterArea />
        </Layout>
    )
}

export default DynamicServicesPage