import Layout from "@/app/components/common/Layout";
import IndividualSurvey from "@/app/components/serveyFolder/IndividualSurvey";
import React from "react";

const page = () => {
  return (
    <>
      <Layout heading="Survey" sub_heading="Individual responses">
        <IndividualSurvey />
      </Layout>
    </>
  );
};

export default page;
