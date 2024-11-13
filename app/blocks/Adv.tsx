import React from 'react';
import {useTranslation} from "react-i18next";
import Line2 from "../components/Icons/Line2";

function AdvCard({title, text, index}: { title: string; text: string, index: number }) {
  return (
    <div
      data-aos="fade-up"
      className={"h-full"}
      data-aos-delay={300 + (index % 2 * 150)}
    >
      <div
        style={{transform: 'skewX(-10deg)'}}
        className="relative xl:rounded-[30px] h-full rounded-[25px] bg-dark xl:py-[40px] py-[35px] flex items-center">
        <div className={'relative z-10 flex items-center text-white  xl:pl-[40px] pl-[20px] xl:pr-[50px] pr-[25px]'}
             style={{transform: 'skewX(10deg)'}}>
          <div className={"relative xl:w-[70px] w-[45px] xl:h-[70px] h-[50px] shrink-0"}>
            <img
              className={"absolute xl:scale-100 scale-[.65] w-fit h-fit max-w-fit top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}
              src={`/icons/adv/adv${index + 1}.png`} alt=""/>
          </div>
          <div className={"pl-[20px]"}>
            <h2 className="font-bold xl:text-[24px] text-[20px]">{title}</h2>
            <p className={"font-extralight leading-tight xl:text-[18px] text-[16px] mt-[5px]"}>{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Adv(props) {
  const {t} = useTranslation();

  const advantages = t('s2.items', {returnObjects: true});

  return (
    <div id={'link_2'} className={"text-dark lg:pt-[100px] pt-[50px] relative"}>
      <div
        className={"lg:block hidden absolute pointer-events-none top-[100px] left-1/2 -translate-x-1/2 w-[2000px] h-auto"}>
        <Line2/>
      </div>
      <div className="xl:container xl:px-[10px] px-[5px] relative">
        <h2 data-aos="fade-up" className={"text-center lg:mb-[70px] mb-[30px]"}>{t('s2.title')}</h2>
        <div className={"grid xl:grid-cols-2 xl:gap-[20px] gap-[10px]"}>
          {Array.isArray(advantages) && advantages.map((item, index) => (
            <AdvCard   {...item} index={index} key={index}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Adv;