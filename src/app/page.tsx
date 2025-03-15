import FeaturedCommonSections from "./components/common/FeaturedCommonSections";
import Header from "./components/common/Header";
import FeatureCard from "./components/FeatureCard";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";


export default function Home() {
  return (
    <div >
      <main >
        <div className='hero_bgimg bg-cover min-h-screen bg-top'>
        <Header />
        <Hero/>
        </div>
        <div className="custom_container !pb-12 md:!pb-0 !pt-12 md:!pt-16 lg:!pt-0 lg:-translate-y-1/3 ">
          <FeatureCard/>
        </div>
        <StatsSection />
        <FeaturedCommonSections/>
      </main>
   
    </div>
  );
}
