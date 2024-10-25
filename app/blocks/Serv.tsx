import React from 'react';
import {useTranslation} from "react-i18next";
import clsx from "clsx";

function Serv(props) {
  const {t} = useTranslation();

  const styleCard_blue = 'lg:py-[24px] py-[15px]  lg:px-[105px] px-[40px] bg-primary text-white'
  const styleCard_def = 'lg:py-[24px] py-[15px] lg:px-[32px] px-[8px]'

  function getClass(index: number) {
    switch (index){
      case 0:
        return clsx(`${styleCard_def} col-span-6`)
      case 1:
        return clsx(`${styleCard_def} col-span-6`)
      case 2:
        return clsx(`${styleCard_blue} col-span-12`)
      case 3:
        return clsx(`${styleCard_def} lg:col-span-3 col-span-6`)
      case 4:
        return clsx(`${styleCard_def} lg:col-span-3  col-span-6`)
      case 5:
        return clsx(`${styleCard_def}  lg:col-span-6 col-span-8 lg:col-start-0 col-start-3`)
      default:
        return clsx(`${styleCard_def} col-span-6`)
    }
  }


  return (
    <div id={'link_3'} className={"container lg:pt-[105px] pt-[30px] lg:pb-[105px] pb-[30px]"}>
      <h2 className={"text-center lg:mb-[42px] mb-[24px] uppercase"}>{t('home.services')}</h2>
      <div className={"grid grid-cols-12"}>
        {Array(6).fill(1).map((el, index) => (
          <div
            key={index}
            className={clsx([getClass(index), 'border-1 lg:text-[22px] md:text-[16px] text-[11px] border lg:min-h-[106px] min-h-[35px] flex items-center text-center justify-center border-primary lg:rounded-[100px] rounded-[70px]'])}>
            {t(`serv.text_${index + 1}`)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Serv;