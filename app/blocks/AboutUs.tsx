import React from 'react';
import {Trans, useTranslation} from "react-i18next";
import IconCIrcle from "../components/Icons/IconCIrcle";
import Line from "../components/Icons/Line";

function AboutUs(props) {
  const {t} = useTranslation();

  return (
    <div id={'link_1'} className="text-black relative lg:pt-[100px] pt-[60px]">
      <div className={"lg:block hidden absolute pointer-events-none top-[-30px] left-1/2 translate-x-[-50%] w-screen"}>
        <Line/>
      </div>
      <div className="md:container relative z-10">
        <h2  data-aos="fade-up" className={"max-w-[391px] mx-auto text-center"}>{t('s.title')} </h2>

        <div className={"relative grid lg:grid-cols-[40%_1fr] gap-[20px] lg:mt-[60px] mt-[25px]"}>
          <div
            className={"flex flex-col lg:text-[24px] text-[20px] font-extralight pt-[15px]  gap-[22px]"}>
            {Array(4).fill(null).map((_, i, index) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 150}
                   className={'grid grid-cols-[30px_1fr] gap-[15px] items-center'}>
                <div className={''}>
                  <IconCIrcle/>
                </div>
                <div className={""}>
                  <Trans i18nKey={`s.text_${i + 1}`}>
                    Пользователь обнаружил, <b className={"font-medium"}>что срочно</b> нужно подзарядить свое
                    устройство
                  </Trans>
                </div>
              </div>
            ))}
          </div>
          <div className={"relative"}>
            <video
              className={"w-full h-auto rounded-[10px] min-h-[300px] object-cover shadow-yellow-shadow"}
              height="100%" width="100%" autoPlay loop playsInline
              muted
            >
              <source src="/BattFlit.mp4" type="video/mp4"/>
              Видео не поддерживается вашим браузером.
            </video>
            <img src="/mob.png" className={"absolute bottom-[-30px] lg:translate-x-1/2 right-0"} alt=""/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;