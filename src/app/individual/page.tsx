import React from "react";
import Layout from "../components/common/Layout";
import IndividualResp from "../components/serveyFolder/IndividualResp";

const page = () => {
  return (
    <>
      <Layout heading="Survey" sub_heading="Individual responses">
        <IndividualResp />
      </Layout>
    </>
  );
};

export default page;
