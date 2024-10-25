import React, {useEffect, useState} from 'react';
import clsx from 'clsx';
import {useTranslation} from 'react-i18next';
import IconMol from "../components/Icons/IconMol";
import Form from "./Form";
import FormMain from "../components/FormMain";

function FormSecond() {
  const {t} = useTranslation();
  const texts = t('form.text', {returnObjects: true});

  return (
    <div className={'container relative z-[50] pt-[50px]'}>
      <div            className={"bg-dark lg:overflow-visible overflow-hidden lg:block flex flex-col-reverse  rounded-[25px] bg-opacity-[.3] backdrop-blur-[3px]  relative py-[44px] lg:px-[60px] px-[30px]"}>
        <div
          className={"bg-gray-gradient  pointer-events-none rounded-[25px] absolute w-full h-full opacity-[.2] top-0 left-0 z-10"}
        ></div>
        <div className="custom-dash"></div>

        <div className={"lg:absolute relative lg:mb-0 mb-[-45px] max-w-fit pointer-events-none z-[55] bottom-0 right-0"}>
          <img src="/formApp.png"
               className={"relative z-10 max-w-fit sm:w-fit w-[280px]"} alt=""/>
          <img src="/2_1.gif" className={"absolute sm:top-[15px] top-[13px] sm:left-[19px] left-[16px] sm:w-fit w-[180px]"} alt=""/>
        </div>
        <img src="/formLine.png"
             className={"absolute lg:block hidden pointer-events-none w-fit max-w-fit z-[50] top-[240px] -translate-y-1/2 left-1/2 -translate-x-1/2"}
             alt=""/>
        <div className={"grid relative z-[60] lg:grid-cols-[1fr_40%] gap-[20px]"}>
          <div className="">
            <FormMain aos={true}/>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormSecond;
