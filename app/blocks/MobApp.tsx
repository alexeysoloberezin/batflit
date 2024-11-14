import React from 'react';
import {useTranslation} from 'react-i18next';
import IconMol from "../components/Icons/IconMol";
import useMediaQuery from "../hooks/useMediaQueary";
import Phone from "../components/Phone";

function MobApp() {
  const {t} = useTranslation();
  const texts = t('app.texts', {returnObjects: true});
  const isMob = useMediaQuery(false, '(max-width: 1024px)');

  function Btns() {
    return (
      <div data-aos={'fade-up'} className={"flex items-center gap-[10px]"}>
        <a className={"ml-[-30px]"} href="#"><img src="/app/download1.png" alt=""/></a>
        <a className={"ml-[-15px]"} href="#"><img src="/app/download2.png" alt=""/></a>
      </div>
    )
  }

  return (
    <div id={"link_6"} className={'container lg:pt-[100px] pt-[40px] pb-0 pb-[20px]'}>
      <div className={"bg-dark  rounded-[25px]  relative py-[40px] lg:px-[60px] px-[30px]"}>
        <div
          className={"bg-gray-gradient pointer-events-none rounded-[25px] absolute w-full h-full opacity-[.2] top-0 left-0 z-10"}></div>
        <div className="custom-dash"></div>

        {/*<img src="/formCalc.png" className={"absolute bottom-[0px] left-[-15px]"} alt=""/>*/}

        <div className={"grid lg:grid-cols-[1fr_34%] relative z-40"}>
          <div>
            <h2 data-aos={'fade-up'} className={"mb-[15px] lg:text-left text-center"}>{t('app.title')}</h2>
            <div data-aos={'fade-up'}
                 className={"text-[18px] max-w-[480px] lg:text-left text-center opacity-50 font-extralight mb-[25px]"}>
              {t('app.subtitle')}
            </div>
            <div className={"space-y-[14px] lg:text-[24px] text-[18px]"}>
              {Array.isArray(texts) && texts.map((el, i) => (
                <div data-aos={'fade-up'} data-aos-delay={150 * i} className={"flex items-center gap-[10px] "} key={i}>
                  <div className={"w-[34px] shrink-0 flex items-center justify-center"}>
                    <img src={`/app/icon_${i + 1}.png`} className={"mx-auto"} alt=""/>
                  </div>
                  <div>{el}</div>
                </div>
              ))}
            </div>

            {!isMob && (
              <Btns/>
            )}
          </div>
           <Phone />

          {isMob && (
            <div className={"mb-[-35px] max-w-[78vw]"}>
              <Btns/>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MobApp;
