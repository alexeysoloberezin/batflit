import React from 'react';
import {Trans, useTranslation} from "react-i18next";

function Banner4(props) {
  const {t} = useTranslation();

  return (
    <div className={"container text-dark relative z-20  lg:pt-[150px] pt-[45px]"}>
      <div data-aos={'fade-up'} className={"bg-main-gradient-green grid md:grid-cols-[1fr_300px] items-center   rounded-[20px] py-[20px] min-h-[150px] px-[35px]"}>
        <div className={"grow text-white md:text-left text-center"}>
          <h2  >
            <Trans i18nKey="banner4.title" >
              Даём <span className="text-primary">гарантию</span>
            </Trans>
          </h2>
          <p  className={"lg:text-[24px] text-[18px] font-bold mt-[10px] "}>
            <Trans i18nKey="banner4.text">
              Если в течении года вы не окупите вложения - <span className="text-primary">мы вернём вам деньги</span>
            </Trans>
          </p>
        </div>
        <div className={" relative h-full md:w-[330px] md:mr-[-20px] md:ml-0 mx-auto translate-y-[20px]"}>
          <img src="/cafe.png" className={"md:absolute  bottom-0 right-0"}
               alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Banner4;