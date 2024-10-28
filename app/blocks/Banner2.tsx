import React from 'react';
import {useTranslation} from "react-i18next";
import useMediaQuery from "../hooks/useMediaQueary";
import clsx from "clsx";
import WrapperOpenModal from "../components/WrapperOpenModal";

function Banner(props) {
  const {t} = useTranslation();
  const isMob = useMediaQuery(false, '(max-width: 1024px)');

  function Btn({classes}: {classes?: string}) {
    return (
      <WrapperOpenModal>
        <div data-aos={'fade-up'} data-aos-delay={'200'} className={clsx(["btn", classes])}>
          {t('banner.btn')}
          <img src="/icons/moln.svg" alt=""/>
        </div>
      </WrapperOpenModal>
    )
  }

  return (
    <div className={"lg:mt-0 mt-[70px]"}>
      {isMob && (
        <h2 data-aos={'fade-up'} className={"text-dark mb-[30px] text-center"}>{t('banner.title')}</h2>
      )}
      <div className="bg-gray-gradient-2  rounded-[20px] lg:mt-[90px] ">
        <div className="container relative flex justify-center lg:justify-start lg:min-h-[488px] min-h-[338px] lg:items-center items-end">
          {!isMob && (
            <div className={"h-full w-[50%]"}>
              <h2 data-aos={'fade-up'} className={"mb-[50px]"}>{t('banner.title')}</h2>
              <Btn />
            </div>
          )}

          <img src="/app2.png" data-aos={'fade-up'} className={"lg:absolute translate-x-[-20px] lg:translate-x-0 bottom-0 right-0 lg:max-w-[50%]"} alt=""/>
        </div>
      </div>
      {isMob && (
        <div className={"mt-[40px]"}>
          <Btn classes={'!w-full'}/>
        </div>
      )}
    </div>
  );
}

export default Banner;