import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import IconMol from "../components/Icons/IconMol";
import FormMain from "../components/FormMain";
import useMediaQuery from "../hooks/useMediaQueary";

function FormModal() {
  const {t} = useTranslation();
  const texts = t('form.text', {returnObjects: true});
  const isMob = useMediaQuery(false, '(max-width: 1024px)');


  function Map(){
    return (
      <div className={"relative sm:translate-x-[0px] translate-x-[140px]"}>
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
        <img src="/mapsvg.svg"  className={"w-[625px] relative max-w-fit sm:translate-x-[0px] translate-x-[-140px]"} alt=""/>
      </div>
    )
  }

  return (
    <div className={'container pt-[50px]'}>
      <div className={"bg-dark lg:overflow-visible overflow-hidden  rounded-[25px]  relative lg:py-[44px] pt-[40px] pb-[30px] lg:px-[60px] px-[20px]"}>
        <div
          className={"bg-gray-gradient pointer-events-none rounded-[25px] absolute w-full h-full opacity-[.2] top-0 left-0 z-10"}></div>

        <div className="custom-dash"></div>


        {!isMob && (
          <div data-aos={'fade-up'} className={"absolute bottom-[-40px] left-[-40px]"}>
            <Map/>
          </div>
        )}
        {/*<img src="/formCalc.png" className={"absolute bottom-[0px] left-[-15px]"} alt=""/>*/}

        <div className={"grid relative z-40 lg:grid-cols-[1fr_40%] gap-[20px]"}>
          <div className={"lg:mx-0 mx-auto "}>
            <h2 data-aos={'fade-up'} className={"mb-[15px]"}>{t('form.title_1')}</h2>
            {Array.isArray(texts) && texts.map((el, i) => (
              <div  data-aos={'fade-up'} data-aos-delay={200 + 200 * i}
                   className={"flex items-center gap-[10px] mb-[15px]"} key={i}>
                <div><IconMol/></div>
                <div className={"lg:text-[24px] text-[18px]"}>{el}</div>
              </div>
            ))}
            {isMob && (
              <div className={"relative sm:scale-100 scale-75  translate-x-[-100px] my-[-70px] sm:max-w-fit max-w-[280px]"}>
                <Map/>
              </div>
            )}
          </div>
          <div className="">
            <FormMain aos={true}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormModal;
