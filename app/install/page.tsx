'use client'

import React from 'react';
import Header from "../components/header";
import {useTranslation} from "react-i18next";
import IconCIrcleBig from "../components/Icons/IconCIrcleBig";
import Phone from "../components/Phone";
import Form_2 from "../blocks/Form_2";
import useMediaQuery from "../hooks/useMediaQueary";
import Footer from "../components/footer";
import WrapperOpenModal from "../components/WrapperOpenModal";

function Page() {
  const {t} = useTranslation();
  const isDesc = useMediaQuery(false, '(max-width: 1024px)');

  const texts = t('install.in.arrTxt', {returnObjects: true});

  return (
    <div className={"relative"}>
      <div className="bg-dark xl:h-[167px] h-[90px] flex items-center rounded-bl-[30px] rounded-br-[30px]">
        <Header
          isSecond={true}
        />
      </div>

      {!isDesc && (<>
          <img src="/flash_1.svg" className={"absolute top-[70%] right-[30px] z-[-1]"} alt=""/>
          <img src="/flash_2.svg" className={"absolute top-[20%] left-[-55px] z-[-1]"} alt=""/>
          <img src="/installLine.png" className={"absolute max-w-fit top-[5%] left-1/2 -translate-x-1/2 z-[-1]"}
               alt=""/>
          <img src="/installLine_2.png"
               className={"absolute bottom-[50px] max-w-fit left-1/2 -translate-x-1/2 z-[-1]"}
               alt=""/>
        </>
      )}

      <div className={"text-black container lg:mt-[100px] mt-[50px]"}>
        <h1 className={"text-center lg:mb-[65px] mb-[25px]"}
            dangerouslySetInnerHTML={{__html: t('install.title')}}></h1>
        <div className={"py-[60px] px-[50px] relative flex justify-center mb-[60px]"}>
          <img src="/bbg.jpg" className={"absolute object-cover rounded-[15px] top-0 left-0 w-full h-full"} alt=""/>
          <WrapperOpenModal classes={"btn relative !rounded-[20px] z-20 mx-auto"}>
            {t('reviews.button')}
          </WrapperOpenModal>
        </div>

        <div className={"grid lg:grid-cols-[1fr_450px] lg:mb-[100px] mb-[40px]"}>
          <div>
            <h2>{t('install.in.title')}</h2>
            <p className={"md:text-[24px] text-[18px] mt-[10px] mb-[30px]"}>{t('install.in.text')}</p>


            <div className={"space-y-[15px] lg:block flex flex-col items-center"}>
              {Array.isArray(texts) && texts.map((el, i) => (
                <div className={"flex lg:flex-row flex-col md:text-left text-center items-center gap-[15px]"}>
                  <div className={"shrink-0 lg:mb-0 mb-[-25px]"}>
                    {isDesc ? (
                      <img src="/circleGr.png" alt=""/>
                    ) : (
                      <IconCIrcleBig centerFill={'#fff'}/>
                    )}
                  </div>
                  <div className={"md:text-[24px] lg:font-normal font-light text-[18px]"}>{el}</div>
                </div>
              ))}
            </div>
          </div>
          {!isDesc && (
            <div className={"pt-[230px]"}>
              <Phone/>
            </div>
          )}

        </div>

        <div className={" grid md:grid-cols-3 lg:gap-[40px] gap-[10px] lg:mb-[80px] mb-[40px]"}>
          <div className={"relative sm:min-h-[420px] min-h-[375px]"}>
            <div className={"relative z-20 pt-[30px] px-[15px]"}>
              <h4 className={"text-white lg:text-[24px] text-[18px] text-center font-bold"}>{t('install.cd_1')}</h4>
            </div>
            <img src="/cd_1.png" className={"absolute object-cover rounded-[20px] top-0 left-0 w-full h-full"} alt=""/>
          </div>

          <div className={"relative sm:min-h-[420px] min-h-[375px]"}>
            <div className={"relative px-[20px] z-20 flex flex-col justify-center h-full"}>
              <h4 className={"text-white lg:text-[24px] text-[18px] text-center font-bold"}>{t('install.cd_2')}</h4>

              <WrapperOpenModal
                classes={"h-[48px] flex text-center text-[18px] justify-center items-center bg-white w-full rounded-[20px] mt-[15px]"}>
                {t('install_btn')}
              </WrapperOpenModal>
            </div>
            <img src="/cd_2.png" className={"absolute top-0 object-cover rounded-[20px] left-0 w-full h-full"} alt=""/>
          </div>

          <div className={"relative sm:min-h-[420px] min-h-[375px]"}>
            <div className={"relative z-20 pt-[40px]"}>
              <h4
                dangerouslySetInnerHTML={{__html: t('install.cd_3')}}
                className={"text-white lg:text-[24px] text-[18px] text-center font-bold"}>
              </h4>
            </div>
            <img src="/cd_3.png" className={"absolute top-0 object-cover rounded-[20px] left-0 w-full h-full"} alt=""/>
          </div>
        </div>

      </div>


      <Form_2 bgDark={true} hideLines={true}/>

      <div className={"lg:mb-[100px] mb-[40px]"}></div>


      <Footer/>

    </div>
  );
}

export default Page;