import React from 'react'
import Layout from '../../layouts/Layout'
import BreadcrumbArea from '../../components/BreadcrumbArea/BreadcrumbArea'
import SuccessArea from "../../components/SuccessArea/SuccessArea";
import InnerServicesArea from '../../components/ServicesArea/InnerServicesArea';
import InnerServiceAre from '../../components/ServicesArea/innerServiceAre';

function ServicePage() {
  return (
    <Layout header={1} footer={1} className="" mainClassName="">
        <BreadcrumbArea
        title="Our Services"
        subtitle={"Services"}
        className={"pt-175 pb-140"}
      />
      <InnerServiceAre />
    </Layout>
  )
}

export default ServicePage