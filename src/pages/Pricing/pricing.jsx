import React from 'react'
import PricingArea from '../../components/Pricing/PricingArea'
import Layout from '../../layouts/Layout'
import BreadcrumbArea from '../../components/BreadcrumbArea/BreadcrumbArea'
import NewsLetterArea from '../../components/NewsLetter/NewsLetterArea'

function Pricing() {
    return (
        <>
            <Layout header={1} footer={1} className="" mainClassName="">
                <BreadcrumbArea
                    title={"Pricing"}
                    subtitle={"Our pricing plan"}
                    className={"breadcrumb-area-two pt-175"}
                    showShape={false}
                />
                <PricingArea />
                <NewsLetterArea />
            </Layout>
        </>
    )
}

export default Pricing