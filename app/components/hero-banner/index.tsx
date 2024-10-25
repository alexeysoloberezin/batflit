'use client'
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {useTranslation} from "react-i18next";
import Header from "../header";
import MolnGold from "../Icons/MolnGold";
import IconQ from "../Icons/IconQ";
import CalculatorSlider from "../Calc/CalcCard";

const Index = () => {
  const {t} = useTranslation();

  function Card ({link, text}) {
    return (
      <a href={link} className={"lg:bg-green flex lg:flex-col lg:items-start items-center lg:gap-0 gap-[30px]  lg:justify-between lg:h-[235px] lg:rounded-[20px] py-[24px] px-[20px]"}>
        <svg className={"lg:ml-auto"} width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd"
                d="M18.5 37C28.7173 37 37 28.7173 37 18.5C37 8.28273 28.7173 0 18.5 0C8.28273 0 0 8.28273 0 18.5C0 28.7173 8.28273 37 18.5 37ZM26 9H17C16.4477 9 16 9.44771 16 10C16 10.5523 16.4477 11 17 11H23.5858L9.29289 25.2929C8.90237 25.6834 8.90237 26.3166 9.29289 26.7071C9.68342 27.0976 10.3166 27.0976 10.7071 26.7071L25 12.4142V19C25 19.5523 25.4477 20 26 20C26.5523 20 27 19.5523 27 19V10C27 9.44771 26.5523 9 26 9Z"
                fill="#212121"/>
        </svg>
        <div className={"text-[20px] lg:max-w-[139px] lg:mt-[40px] text-black"} style={{lineHeight: 1.2}}>{text}</div>
      </a>
    )
  }

  return (
    <>
      <div className={"blackSection text-black lg:min-h-[500px]  pb-[40px] relative z-20  lg:overflow-hidden"}>
        <Header isSecond={false}/>
        <div className={"container md:pt-[165px] pt-[135px]"}>
          <div className={"relative"}>
            <div className={'lg:pb-[190px] md:pb-0  pb-[430px] relative z-20'}>
              <h1 data-aos="fade-up" data-aos-delay="200" className={"max-w-[630px]"}>{t('home.title')}</h1>
              <div data-aos="fade-up" data-aos-delay="400" className={"lg:text-[25px] text-[20px] font-medium lg:mt-[35px] mt-[24px]"}>{t('home.subtitle')}</div>
            </div>
            <div>
              <img className={"lg:absolute bottom-0 right-0 lg:max-w-[50%] md:block hidden"} src="/main.png" alt=""/>
              <img className={"md:hidden absolute bottom-[-105px] max-w-fit sm:right-[-35px] right-[-50px]"} src="/appMob.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
      <div className={'mt-[20px] grid lg:grid-cols-2 relative lg:z-30 z-10 lg:container gap-[20px]'}>
        <div className={"bg-main-gradient text-dark rounded-[20px] lg:min-h-[400px] lg:px-[36px] px-[26px] lg:py-[40px] pt-[60px] pb-[50px] lg:mt-[-200px] mt-[-50px]"}>
          <div data-aos="fade-up" data-aos-delay="0" className={"flex items-center gap-[15px] mb-[35px]"}>
            <MolnGold />
            <div className={"lg:text-[24px] text-[20px] text-dark font-medium"}>
              <span>{t('home.t2')}</span> <b>{t('home.t2_a')}</b> {t('home.t2_b')}</div>
          </div>
          <div data-aos="fade-up" className={"flex items-center gap-[10px]"}>
            <div className={"max-w-[370px] xl:text-[35px] w-fit lg:text-[30px] text-[25px]  font-bold"}>
              {t('home.t1')}
            </div>
            <div className={"mt-[2px]"}>
              <IconQ />
            </div>
          </div>

          <div data-aos="fade-up">
            <CalculatorSlider />
          </div>
        </div>
        <div className={"grid lg:grid-cols-3 lg:gap-[19px] lg:bg-transparent bg-green rounded-[20px]"}>
          <Card text={t(`home.card_1`)} link={'#'}/>
          <Card text={t(`home.card_2`)} link={'#'}/>
          <Card text={t(`home.card_3`)} link={'#'}/>
        </div>
      </div>
    </>

  );
};

export default Index;
