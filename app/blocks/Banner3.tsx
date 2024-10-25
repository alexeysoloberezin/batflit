import React from 'react';
import {useTranslation} from "react-i18next";
import useMediaQuery from "../hooks/useMediaQueary";

function Banner3(props) {
  const {t} = useTranslation();
  const isMob = useMediaQuery(false, '(max-width: 1024px)');

  return (
    <>
      {!isMob && (
        <div className={"container text-dark pb-[100px] pt-[150px]"}>
          <div
            className={"bg-main-gradient grid grid-cols-[1fr_160px_130px] items-center gap-[60px]  rounded-[20px] py-[20px] min-h-[150px] px-[35px]"}>
            <div className={"grow"}>
              <h2  data-aos={'fade-up'} className={"mb-[5px]"}>{t('banner3.title')}</h2>
              <div  data-aos={'fade-up'} className={"text-[24px]"}>{t('banner3.text')}</div>
              <div></div>
            </div>
            <div className={" relative"}>
              <img src="/iphone16.png"
                   className={"absolute w-[158px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"} alt=""/>
            </div>
            <div>
              <img  data-aos={'fade-up'} src="/visa.png" alt=""/>
            </div>
          </div>
        </div>
      )}
    </>

  );
}

export default Banner3;