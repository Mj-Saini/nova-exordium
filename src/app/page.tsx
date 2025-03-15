import FeaturedCommonSections from "./components/common/FeaturedCommonSections";
import Header from "./components/common/Header";
import FeatureCard from "./components/FeatureCard";
import Hero from "./components/Hero";
import StartJourney from "./components/StartJourney";
import StatsSection from "./components/StatsSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "./components/Testimonial";



export default function Home() {
  return (
    <div>
      <main>
        <div className="hero_bgimg bg-cover md:min-h-screen bg-top">
          <div className="relative z-50">
            <Header />
          </div>
          <Hero />
        </div>
        <div className="custom_container !pb-12 md:!pb-0 !pt-12 md:!pt-16 lg:!pt-0 lg:-translate-y-1/3 ">
          <FeatureCard />
        </div>
        <StatsSection />
        <FeaturedCommonSections
          label="dashboard"
          heading="Lorem ipsum dolor sit amet consectetur"
          descriptions=" Lorem ipsum dolor sit amet consectetur. Dignissim velit egestas
                ac risus maecenas magna risus tellus adipiscing. Magna nunc
                accumsan praesent dolor diam mi leo eu et. Enim dolor et sed
                condimentum."
          counterStyling="hidden"
          
        />
        <FeaturedCommonSections
          label="Templates"
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
          label="Templates"
          heading="Lorem ipsum dolor sit amet consectetur"
          descriptions=" Lorem ipsum dolor sit amet consectetur. Dignissim velit egestas
                ac risus maecenas magna risus tellus adipiscing. Magna nunc
                accumsan praesent dolor diam mi leo eu et. Enim dolor et sed
                condimentum."
          listStyling="hidden"
        />
         <FeaturedCommonSections
          label="Templates"
          heading="Lorem ipsum dolor sit amet consectetur"
          descriptions=" Lorem ipsum dolor sit amet consectetur. Dignissim velit egestas
                ac risus maecenas magna risus tellus adipiscing. Magna nunc
                accumsan praesent dolor diam mi leo eu et. Enim dolor et sed
                condimentum."
          listStyling="hidden"
          flexStyling="max-lg:flex-col-reverse 2xl:pb-10"
           counterStyling="hidden"
        />
        <Testimonial/>
        <StartJourney/>
      </main>
    </div>
  );
}
