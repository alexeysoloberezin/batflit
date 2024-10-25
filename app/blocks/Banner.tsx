import React from 'react';
import {useTranslation} from "react-i18next";
import useMediaQuery from "../hooks/useMediaQueary";

function Banner(props) {
  const {t} = useTranslation();
  const isDesc = useMediaQuery(false, '(max-width: 1024px)');


  return (
    <div className="bg-dark rounded-[20px] md:mt-[65px] mt-[205px] ">
      <div className="container md:grid flex flex-col-reverse md:grid-cols-[1fr_42%] items-center md:py-[25px] pt-[20px] pb-[40px]">
          <div>
            <h2 data-aos={'fade-up'} className={"lg:mb-[30px] mb-[15px]"}>{t('glob.title')}</h2>
            <div data-aos={'fade-up'} className={"lg:text-[24px] leading-tight text-[20px]"}>{t('glob.text')}</div>
          </div>


        <img data-aos={'fade-up'} src="/glob.png" className={"md:mt-0 mt-[-150px] mb-[40px]"} alt=""/>
      </div>
    </div>
  );
}

export default Banner;