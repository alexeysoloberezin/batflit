import React from 'react';
import {useTranslation} from 'react-i18next';
import IconMol from "../components/Icons/IconMol";
import useMediaQuery from "../hooks/useMediaQueary";

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
          <div data-aos={'fade-up'}>
            <div
              className={"relative lg:h-full lg:scale-100 scale-[.7] h-[350px] lg:mt-0 mt-[30px] lg:w-auto lg:ml-0 sm:ml-[-50px]  sm:w-[400px] w-[250px]"}>
              <img className={"absolute top-1/2 ml-[-90px] iphone1 -translate-y-1/2 left-1/2 -translate-x-1/2"}
                   src="/app/phone1.png" alt=""/>
              <img className={"absolute bottom-0 right-[-20px] z-10"} src="/app/star.png" alt=""/>
              <div
                className={"absolute top-1/2 w-[250px] h-[505px] -translate-y-1/2 left-1/2 p-[5px] rounded-[40px] -translate-x-1/2 overflow-hidden"}>
                <video
                  className={"w-full h-full bg-gray-gradient absolute top-0 left-0"}
                  height="100%" width="100%" autoPlay loop playsInline
                  muted>
                  <source src="/app_preview.mp4" type="video/mp4"/>
                  Видео не поддерживается вашим браузером.
                </video>
                <img className={"max-w-fit absolute top-0 left-0"} src="/app/iphone2.png"
                     alt=""/>
              </div>
            </div>
          </div>

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
