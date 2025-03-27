'use client'
import FeaturedCommonSections from "./components/common/FeaturedCommonSections";
import Header from "./components/common/Header";
import FeatureCard from "./components/FeatureCard";
import Hero from "./components/Hero";
import StartJourney from "./components/StartJourney";
import StatsSection from "./components/StatsSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "./components/Testimonial";
import Footer from "./components/common/Footer";
import dashboard_img from "../../public/images/png/hero-right-img.png";
import project_img from "../../public/images/png/project_img.png";
import template_img from "../../public/images/png/template_img.png";
import notifications_img from "../../public/images/png/notification_img.png";



export default function Home() {
  return (
    <div className="body">
      <main>
        <div className="hero_bgimg bg-cover md:min-h-screen bg-top">
          <div className="relative z-50">
            <Header btnStyling="" btnName="Log in" toggleForm={() => console.log("btn clicked")} />
          </div>
          <Hero />
        </div>
        <div className="custom_container !pb-12 md:!pb-0 !pt-12 md:!pt-16 lg:!pt-0 lg:-translate-y-1/3 ">
          <FeatureCard />
        </div>
        <StatsSection />
        <FeaturedCommonSections
          img={dashboard_img}
          label="dashboard"
          heading="Lorem ipsum dolor sit amet consectetur"
          descriptions=" Lorem ipsum dolor sit amet consectetur. Dignissim velit egestas
                ac risus maecenas magna risus tellus adipiscing. Magna nunc
                accumsan praesent dolor diam mi leo eu et. Enim dolor et sed
                condimentum."
          counterStyling="hidden"

        />
        <FeaturedCommonSections
          img={project_img}
          label="Projects"
          heading="Lorem ipsum dolor sit amet consectetur"
          descriptions=" Lorem ipsum dolor sit amet consectetur. Dignissim velit egestas
                ac risus maecenas magna risus tellus adipiscing. Magna nunc
                accumsan praesent dolor diam mi leo eu et. Enim dolor et sed
                condimentum."
          listStyling="hidden"
          flexStyling="max-lg:flex-col-reverse 2xl:mb-16"
          counterStyling="hidden"
        />
        <FeaturedCommonSections
          img={template_img}
          label="Templates"
          heading="Lorem ipsum dolor sit amet consectetur"
          descriptions=" Lorem ipsum dolor sit amet consectetur. Dignissim velit egestas
                ac risus maecenas magna risus tellus adipiscing. Magna nunc
                accumsan praesent dolor diam mi leo eu et. Enim dolor et sed
                condimentum."
          listStyling="hidden"
        />
        <FeaturedCommonSections
          img={notifications_img}
          label="Notifications"
          heading="Lorem ipsum dolor sit amet consectetur"
          descriptions=" Lorem ipsum dolor sit amet consectetur. Dignissim velit egestas
                ac risus maecenas magna risus tellus adipiscing. Magna nunc
                accumsan praesent dolor diam mi leo eu et. Enim dolor et sed
                condimentum."
          listStyling="hidden"
          flexStyling="max-lg:flex-col-reverse 2xl:pb-10"
          counterStyling="hidden"
        />
        <Testimonial />
        <StartJourney />
        <Footer />
      </main>
    </div>
  );
}
