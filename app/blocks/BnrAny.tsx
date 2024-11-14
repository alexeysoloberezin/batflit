import React from 'react';
import {useTranslation} from "react-i18next";
import useMediaQuery from "../hooks/useMediaQueary";
import Faq from "./Faq";
import Form from "./Form";
import Form_2 from "./Form_2";

function BnrAny() {
  const {t} = useTranslation();
  const texts = t('form.text', {returnObjects: true});
  const isMob = useMediaQuery(false, '(max-width: 1024px)');

  function Map(){
    return (
      <div className={"relative w-[625px] translate-x-[0px]"}>
        <div className={""}>
          <img src="/logoMp.png"
               className={" animate-myPulse ml-[50px] mt-[0]  w-[25px] h-[25px] z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}
               alt=""/>
          <img src="/logoMp.png"
               className={" animate-myPulse ml-[150px] mt-[-45px]  w-[25px] h-[25px] z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}
               alt=""/>
          <img src="/logoMp.png"
               className={" animate-myPulse ml-[130px] mt-[45px]  w-[25px] h-[25px] z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}
               alt=""/>
          <img src="/logoMp.png"
               className={" animate-myPulse ml-[0] mt-[56px]  w-[25px] h-[25px] z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}
               alt=""/>
          <img src="/logoMp.png"
               className={" animate-myPulse ml-[30px] mt-[80px]  w-[25px] h-[25px] z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}
               alt=""/>
          <img src="/logoMp.png"
               className={" animate-myPulse ml-[-180px] mt-[30px]  w-[25px] h-[25px] z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}
               alt=""/>
          <img src="/logoMp.png"
               className={" animate-myPulse ml-[-150px] mt-[-30px]  w-[25px] h-[25px] z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}
               alt=""/>
          <img src="/logoMp.png"
               className={" animate-myPulse ml-[-80px] mt-[-30px]  w-[25px] h-[25px] z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}
               alt=""/>
          <img src="/logoMp.png"
               className={" animate-myPulse ml-[-40px] mt-[10px]  w-[25px] h-[25px] z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}
               alt=""/>
          <img src="/logoMp.png"
               className={" animate-myPulse ml-[120px] mt-[-20px]  w-[25px] h-[25px] z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}
               alt=""/>
        </div>
        <img src="/mapsvg.svg"  className={"w-[625px] relative max-w-fit translate-x-[0px]"} alt=""/>
      </div>
    )
  }

  const data = t('any.bnr_2.arr', {returnObjects: true});


  return (
    <div>
      <div className={'container pt-[50px]'}>
        <div className={"bg-dark lg:overflow-visible overflow-hidden  rounded-[25px]  relative lg:py-[44px] pt-[40px] pb-[30px] lg:px-[60px] px-[20px]"}>
          <div
            className={"bg-gray-gradient pointer-events-none rounded-[25px] absolute w-full h-full opacity-[.2] top-0 left-0 z-10"}></div>

          <div className="custom-dash"></div>


          <div>
            <h2>
              {t('any.bnr_2.title')}
            </h2>
            <ul className={"space-y-[15px] relative z-[10] mt-[15px]"}>
              {Array.isArray(data) && data.map(el => (
                <li className={"text-white lg:text-[24px] text-[18px] flex items-center gap-[10px]"}>
                  <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="15.8467" cy="15" r="15" fill="url(#paint0_linear_192_454)"/>
                    <path d="M15.0133 17.7273H10.8467L16.68 5V12.2727H20.8467L15.0133 25V17.7273Z" fill="#212121"/>
                    <defs>
                      <linearGradient id="paint0_linear_192_454" x1="4.84668" y1="-7.5" x2="24.8467" y2="41.5"
                                      gradientUnits="userSpaceOnUse">
                        <stop stopColor="#FFE86D"/>
                        <stop offset="1" stopColor="#F5BB26"/>
                      </linearGradient>
                    </defs>
                  </svg>
                  {el}
                </li>
              ))}
            </ul>
          </div>

          <div className={"lg:absolute relative md:scale-100 scale-75  pointer-events-none lg:bottom-[-80px] lg:right-[-60px]  lg:ml-0 md:ml-[-70px] ml-[-120px] lg:mb-0 md:mb-[-80px] mb-[-110px] lg:mt-0 mt-[-80px]  "}>
            <Map/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BnrAny;