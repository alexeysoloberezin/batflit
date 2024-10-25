import React from 'react';
import {useTranslation} from "react-i18next";
import clsx from "clsx";

function InfoCards(props) {
  const {t} = useTranslation();

  const items = t('info', {returnObjects: true});

  const classes = [
    "lg:col-span-4 md:col-span-4 col-span-6",
    "lg:col-span-3 md:col-span-4 col-span-6",
    "lg:col-span-3 md:col-span-4 col-span-6",
    "lg:col-span-2 md:col-span-4 col-span-6",
    "lg:col-span-3 md:col-span-4 col-span-6",
    "lg:col-span-3 md:col-span-4 col-span-6",
    "lg:col-span-3 md:col-span-4 col-span-6",
    "lg:col-span-3 md:col-span-4 col-span-6",
  ]

  return (
    <div className={"grid grid-cols-12 lg:gap-[15px]  mt-[24px]"}>
      {Array.isArray(items) && items.length > 0 && items.map((el, i) => (
        <div key={i} data-aos={'fade-up'} data-aos-delay={i * 50} className={clsx("bg-main-gradient text-dark flex flex-col md:mb-0 mb-[-15px] text-[18px] gap-[3px] justify-end lg:min-h-[275px] lg:p-[25px] pt-[30px] px-[20px] pb-[40px] lg:rounded-[20px] rounded-[10px]", classes[i])}>
          <div className={"lg:text-[18px] text-[16px]"}>{el.upText}</div>
          <div className={"lg:text-[42px] md:text-[36px] text-[30px] font-bold"}>{el.title}</div>
          <div className={"lg:text-[18px] text-[16px]"}>{el.downText}</div>
        </div>
      ))}
    </div>
  );
}

export default InfoCards;