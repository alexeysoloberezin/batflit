import React from 'react';
import {useTranslation} from "react-i18next";
import clsx from "clsx";

function Vars(props) {
  const {t} = useTranslation();

  const items = t('s3.items', {returnObjects: true});

  const classes = [
    {
      img: " bottom-0 md:right-0 sm:right-[20px] right-[10px]  scale-[.7]",
      wrapper: "",
      title: "max-w-[230px]",
      text: "max-w-[63%]"
    },
    {
      img: " bottom-0 lg:right-[-35px] md:right-[-20px] right-[-13px]  scale-[.73]",
      wrapper: "z-[20]",
      title: "max-w-[230px]",
      text: "sm:max-w-[79%] max-w-[70%]"
    },
    {
      img: "md:bottom-[7px] bottom-0 lg:right-[4px] md:right-[-12px] right-[20px] scale-[.6]",
      wrapper: "",
      title: "max-w-[230px]",
      text: "max-w-[70%]"
    }
  ]

  return (
    <div className={"lg:container text-black  lg:pt-[100px] pt-[60px]"}>
      <h2 className={"lg:mb-[60px] mb-[30px] text-center"}  data-aos="fade-up">{t('s3.title')}</h2>

      <div className={"grid md:grid-cols-3 gap-[11px]"}>
        {Array.isArray(items) && items.length > 0 && items.map((item, i) => (
          <div
            key={i}
            data-aos="fade-right"
            data-aos-delay={i * 350}
            className={clsx("bg-main-gradient-green md:min-h-[453px] min-h-[240px] relative md:py-[50px] py-[39px] rounded-[20px] lg:px-[30px] md:px-[15px] px-[39px]", classes[i].wrapper)}>
            <div className={"relative z-10"}>
              <h4 className={clsx(["xl:text-[24px] text-[20px] md:mb-[25px] mb-[10px] lh12 font-bold", classes[i].title])}>{item.title}</h4>
              <div className={clsx(["xl:text-[24px] sm:text-[20px] text-[18px] lh12", classes[i].text])}>{item.text}</div>
            </div>

            <img className={clsx(['absolute origin-bottom-right xl:scale-100 lg:scale-[.85] md:scale-[.75] '], classes[i].img)} src={`/vars/var${i + 1}.png`} alt=""/>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Vars;