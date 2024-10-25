'use client'

import HeroBanner from "./components/hero-banner";
import AboutUs from "./blocks/AboutUs";
import Reviews from "./blocks/Reviews";
import Form from "./blocks/Form";
import Adv from "./blocks/Adv";
import Vars from "./blocks/Vars";
import CalcBlock from "./blocks/CalcBlock";
import Pertner from "./blocks/Pertner";
import Network from "./blocks/Network";
import Banner from "./blocks/Banner";
import InfoCards from "./blocks/InfoCards";
import Banner2 from "./blocks/Banner2";
import MobApp from "./blocks/MobApp";
import Banner3 from "./blocks/Banner3";
import Banner4 from "./blocks/Banner4";
import Docs from "./blocks/Docs";
import FormSecond from "./blocks/Form_2";
import Faq from "./blocks/Faq";

export default function Home() {
  return (
    <main>
      <div className={""}>

        <div className="main">
          <HeroBanner/>

          {/*<Services/>*/}

          <AboutUs/>
          <Adv/>
          <Vars/>
          <CalcBlock/>
          <Pertner/>
          <Network/>
          <Banner/>
          <InfoCards/>
          <Banner2/>
        </div>

        <div className={"bg-dark mt-[90px] re lative w-screen relative"}>
          <img src="/lineApp.svg" className={"absolute top-0 left-1/2 max-w-fit -translate-x-1/2"} alt=""/>

          <div className={"relative z-10"}>
            <Form/>
            <MobApp/>
            <Banner3/>
          </div>
        </div>

        <Reviews/>
        <Banner4/>

        <div className={"bg-dark mt-[-40px] py-[90px] relative z-10 w-screen"}>
          <Docs/>
          <FormSecond />
          <Faq />
        </div>
      </div>
    </main>
  );
}
