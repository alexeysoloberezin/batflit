import React from 'react';
import {useTranslation} from "react-i18next";
import clsx from "clsx";

function WhyWe(props) {
  const {t} = useTranslation();

  const classTitle = clsx("lg:text-[30px] text-[20px] font-semibold lg:mb-[22px] mb-[12px]")
  const classText = clsx("lg:text-[22px] text-[15px]")

  return (
    <div id={'wrok'} className={"container lg:pt-[100px] pt-[32px]"}>
      <h2 className={"lg:mb-[55px] mb-[22px] uppercase"}>{t('home.why_us')}</h2>
      <div className={"grid lg:grid-cols-[1.3fr_2fr] lg:gap-[35px]"}>
        <div className={"h-full flex flex-col"}>
          <div className={classTitle}>(1)</div>
          <div className={clsx(classText, "grow mt-auto flex items-end lg:mb-[22px] mb-[12px]")}>{t('home.goal_growth')}</div>
          <img  src="/whyUs.jpg" className={"lg:max-w-full max-w-[265px]"} alt=""/>
        </div>
        <div className={"grid lg:gap-[40px] gap-[15px] lg:mt-0 mt-[-20px]"}>
          <div className={"lg:text-left text-right"}>
            <div className={classTitle}>(2)</div>
            <div className={classText}>{t('home.whyUs_2')}</div>
          </div>
          <div>
            <div className={classTitle}>(3)</div>
            <div className={clsx(classText, 'max-w-[290px]')}>{t('home.whyUs_3')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyWe;