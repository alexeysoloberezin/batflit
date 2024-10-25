import React from 'react';
import {useTranslation} from "react-i18next";
import IconNetDot from "../components/Icons/IconNetDot";
import useMediaQuery from "../hooks/useMediaQueary";

function Network(props) {
  const {t} = useTranslation();
  const isDesc = useMediaQuery(false, '(max-width: 1024px)');

  const items = t('network.items', {returnObjects: true});

  return (
    <>
      {
        !isDesc && (
          <div className={"pt-[110px]"}>
            <div className="container">
              <h2 data-aos={'fade-up'} className={"text-dark text-center pb-[30px]"}>{t('network.title')}</h2>

              <div className={"relative"}>
                <div data-aos="zoom-in-right" data-aos-duration={'1000'}>
                  <img
                    className={"absolute max-w-fit top-[-30px] left-1/2 -translate-x-1/2"} src="/network.png" alt=""
                  />
                </div>
                <div className={"grid grid-cols-4 w-full relative pt-[20px] pr-[70px]"}>
                  {Array.isArray(items) && items.map((item, index) => (
                    <div data-aos={'fade-up'} data-aos-delay={600 + (index * 150)} key={item.title} className={"flex flex-col items-center text-dark text-center "}>
                      <div className={"h-[50px] w-[50px] mb-[10px] flex items-center justify-center"}>
                        {item?.image ? (
                          <img src={item.image} alt=""/>
                        ) : (
                          <IconNetDot/>
                        )}
                      </div>
                      <div className={"text-[24px] mb-[5px]"}>{item.title}</div>
                      <div className={"font-extralight max-w-[210px] text-[18px]"}>{item.text}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      }
    </>

  );
}

export default Network;