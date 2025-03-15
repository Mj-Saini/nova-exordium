import Header from "./components/common/Header";
import Hero from "./components/Hero";


export default function Home() {
  return (
    <div >
      <main >
        <div className='hero_bgimg bg-cover h-screen bg-top'>
        <Header />
        <Hero/>
        </div>
      </main>
   
    </div>
  );
}
