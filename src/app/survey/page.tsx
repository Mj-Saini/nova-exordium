import React from "react";
import Layout from "../components/common/Layout";
import Table from "../components/serveyFolder/Table";

const page = () => {
  return (
    <>
      <Layout heading="Survey">
        <Table />
      </Layout>
    </>
  );
};

export default page;
