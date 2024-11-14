'use client'

import React from 'react';
import Header from "../components/header";
import {useTranslation} from "react-i18next";
import useMediaQuery from "../hooks/useMediaQueary";
import BnrAny from "../blocks/BnrAny";
import Faq from "../blocks/Faq";
import Form_2 from "../blocks/Form_2";
import Footer from "../components/footer";

function Page() {
  const {t} = useTranslation();
  const isDesc = useMediaQuery(false, '(max-width: 1024px)');

  return (
    <div className={"relative"}>
      <div className="bg-dark xl:h-[167px] h-[90px] flex items-center rounded-bl-[30px] rounded-br-[30px]">
        <Header
          isSecond={true}
        />
      </div>

      {!isDesc && (<>
          <img src="/flash_1.svg" className={"absolute top-[50%] right-[30px] z-[-1]"} alt=""/>
          <img src="/flash_2.svg" className={"absolute top-[20%] left-[-55px] z-[-1]"} alt=""/>
          <img src="/flash_2.svg" className={"absolute top-[80%] right-[-60px] z-[-1]"} alt=""/>
          <img src="/installLine.png" className={"absolute max-w-fit top-[5%] left-1/2 -translate-x-1/2 z-[-1]"}
               alt=""/>
          <img src="/installLine_2.png"
               className={"absolute bottom-[50px] max-w-fit left-1/2 -translate-x-1/2 z-[-1]"}
               alt=""/>
        </>
      )}


      <div className={'container lg:mt-[100px] mt-[50px] relative z-[10]'}>
        <h1 className={"text-black md:text-left text-center"} dangerouslySetInnerHTML={{__html: t('any.title')}}></h1>


        <div className={"relative lg:block flex flex-col-reverse lg:mt-[65px] lg:mb-[40px] mt-[25px]"}>
          <div
            className={"flex items-center lg:backdrop-blur-sm lg:bg-black/30 lg:ml-0 ml-[-32px] lg:mt-0 mt-[40px] lg:pr-[30px] rounded-[20px] justify-center lg:absolute top-1/2 left-1/2 lg:-translate-x-1/2 -translate-y-1/2"}>
            <a href="#">
              <img src="/app/download1.png" alt=""/>
            </a>
            <a href="#">
              <img src="/app/download2.png" alt=""/>
            </a>
          </div>
          <img src="/app.jpg" className={"w-full aspect-video object-cover lg:rounded-[45px] rounded-[12px] "} alt=""/>
        </div>
      </div>

      <div className={" container"}>
        <div className={'relative lg:text-left text-center lg:min-h-0 min-h-[420px]  lg:py-0 pb-[30px] pt-[80px] lg:mt-0 mt-[-30px]'}>

          <img src={!isDesc ? "/bnr_33.jpg" : "/bnr_33_mob.jpg"} className={"absolute top-0 left-0 w-full h-full object-cover rounded-[25px]"} alt=""/>

          <div className={"lg:h-[225px] md:px-[60px] px-[20px] w-full items-center h-full relative z-[10] grid lg:grid-cols-[1fr_0.5fr_1fr] gap-[20px]"}>
            <div>
              <div className={"md:text-[48px] text-[28px] mb-[10px] font-bold"} dangerouslySetInnerHTML={{__html: t('any.bnr.price')}}></div>
              <div className={"md:text-[24px] text-[18px]"}>
                {t('any.bnr.txt')}
              </div>
            </div>
            <div></div>
            <div>
              <div className={"md:text-[24px] text-[18px] lg:mx-0 mx-auto max-w-[250px]"}>     {t('any.bnr.txt_2')}</div>
              <div className={"flex items-center gap-[25px]  lg:mx-0 mx-auto w-fit mt-[15px]"}>
                <a href="#">
                  <svg width="42" height="53" viewBox="0 0 42 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M34.5812 28.1572C34.6527 36.1778 41.3322 38.8469 41.4062 38.8809C41.3498 39.0692 40.339 42.6846 37.8871 46.419C35.7676 49.6477 33.5679 52.8645 30.1026 52.9311C26.6977 52.9965 25.6028 50.8267 21.7099 50.8267C17.8183 50.8267 16.6018 52.8645 13.3786 52.9965C10.0337 53.1284 7.48667 49.5052 5.34956 46.2883C0.982637 39.7083 -2.3546 27.6946 2.12646 19.5851C4.35256 15.5579 8.33076 13.0078 12.6487 12.9424C15.9333 12.8771 19.0335 15.2454 21.0414 15.2454C23.0481 15.2454 26.8155 12.3973 30.7761 12.8155C32.4341 12.8875 37.0883 13.5136 40.0768 18.0728C39.836 18.2284 34.5235 21.4517 34.5812 28.1572V28.1572ZM28.182 8.46224C29.9578 6.2219 31.153 3.10315 30.827 0C28.2673 0.107222 25.172 1.77776 23.336 4.01686C21.6906 5.9997 20.2496 9.17335 20.6384 12.2151C23.4915 12.4451 26.4061 10.704 28.182 8.46225"
                      fill="white"/>
                  </svg>
                </a>
                <a href="#">
                  <svg width="48" height="50" viewBox="0 0 48 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M3.76817 50C3.977 49.9209 4.1961 49.8212 4.42205 49.6974L34.4288 33.2015L27.3182 26.0675L3.76817 50ZM35.7605 32.4727L28.3384 25.0292L35.7537 17.493L45.9625 23.0867C48.4787 24.4654 47.1915 26.1879 45.9625 26.8617L35.7605 32.4727ZM34.4254 16.7675L4.42547 0.330056C4.10367 0.154714 3.74078 0.0481331 3.37789 0L27.3114 24.0012L34.4254 16.7675ZM1.61823 0.295675L26.2912 25.0361L1.73463 49.9931C1.01912 49.5359 0.632268 48.5457 0.628844 47.2667C0.61515 44.8154 0.420012 5.89287 0.406319 2.97394C0.399472 1.5712 0.906146 0.718559 1.61823 0.295675Z"
                          fill="white"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>



      </div>
      <BnrAny />


      <Faq takeFrom={'faq_2'} titleBlack={true}/>

      <div className={"lg:mt-[60px] lg:mb-[70px] mb-[20px]"}>
        <Form_2 bgDark={true} hideLines={true}/>
      </div>

      <Footer/>

    </div>
  );
}

export default Page;