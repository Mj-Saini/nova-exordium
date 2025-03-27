import Layout from '@/app/components/common/Layout'
import SurveyPreview from '@/app/components/serveyFolder/SurveyPreview';
import React from 'react'

const page = () => {
  return (
    <>
      <Layout heading="Survey" sub_heading="Survey">

        <SurveyPreview/>
      </Layout>
    </>
  );
}

export default page