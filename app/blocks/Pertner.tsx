import React, {useEffect, useRef, useState} from 'react';
import {useTranslation} from "react-i18next";
import Line4 from "../components/Icons/Line4";
import clsx from "clsx";
import {is} from "immutable";
import useMediaQuery from "../hooks/useMediaQueary";

function Card({index, text, hiddenText}) {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);
  const isDesc = useMediaQuery(false, '(min-width: 1024px)');


  const [contentHeight2, setContentHeight2] = useState(0);
  const contentRef2 = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [text, isOpen]);


  useEffect(() => {
    if (contentRef2.current) {
      setContentHeight2(contentRef2.current.scrollHeight);
    }
  }, [text, isOpen]);

  const handleHover = (val) => {
    if (isDesc) {
      setIsOpen(val)
    }
  }

  return (
    <div data-aos={'fade-up'}>
      <div
        className={clsx("lg:bg-dark text-white flex group flex-col transition-all  cardPartner duration-500 lg:h-[210px] lg:p-[30px] px-[45px] rounded-[20px]", {
          "lg:bg-dark": !isOpen,
          "lg:bg-main-gradient": isOpen
        })}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        {isDesc ? (
          <>
            <div ref={contentRef2}
                 className={"origin-top flex lg:flex-col lg:gap-[0] gap-[25px] lg:items-start items-center  duration-500 flex-row lg:justify-between transition-all"}
                 style={{opacity: isOpen && isDesc ? 0 : 1, height: isOpen ? 0 : '100%'}}>
              <div className={"lg:text-[48px] text-[30px] font-bold text-right lg:ml-auto"}>{index}</div>
              <div className={"lg:text-[24px] text-[20px] font-bold uppercase"}>{text}</div>
            </div>
            <div ref={contentRef}
                 className={"text-[20px] leading-tight duration-500 origin-bottom overflow-hidden transition-all text-dark"}
                 style={{height: isOpen ? contentHeight + 'px' : "0"}}>
              {hiddenText}
            </div>
          </>
        ) : (
          <>
            <div
              className={"flex gap-[25px]  items-center"}
            >
              <div className={"text-[30px] font-bold "}>{index}</div>
              <div className={"text-[20px] font-bold uppercase  leading-tight"}>{text}</div>
            </div>
            <div
              className={"text-[16px] font-light leading-tight mt-[10px]"}>
              {hiddenText}
            </div>
          </>
        )
        }
      </div>
    </div>
  )
}

function Pertner(props) {
  const {t} = useTranslation();
  const isDesc = useMediaQuery(false, '(min-width: 1024px)');

  return (
    <div className={"pt-[80px] lg:container relative text-black"}>
      <h2 data-aos="fade-up" className={"mb-[40px] relative text-center"}>{t('partner.title')}</h2>

      <div
        className={"lg:block hidden absolute pointer-events-none top-[25px] left-1/2 -translate-x-1/2 w-[2000px] rotate-[10deg] h-auto"}>
        <Line4/>
      </div>
      <div
        className={"grid lg:bg-transparent bg-dark rounded-[10px]  relative lg:py-[0px] py-[45px] lg:grid-cols-3 lg:gap-[10px] gap-[25px]"}>
        <Card text={t('partner.card_title_1')} hiddenText={t('partner.card_text_1')} index={'1'}/>
        <Card text={t('partner.card_title_2')} hiddenText={t('partner.card_text_2')} index={'2'}/>
        {isDesc && (
          <>
            <div></div>
            <div className={"row-span-2"}>
              <img src="/app.png" className={"object-contain max-h-full translate-y-[40px]"} alt=""/>
            </div>
          </>
        )}

        <Card text={t('partner.card_title_3')} hiddenText={t('partner.card_text_3')} index={'3'}/>
        <Card text={t('partner.card_title_4')} hiddenText={t('partner.card_text_4')} index={'4'}/>
        <Card text={t('partner.card_title_5')} hiddenText={t('partner.card_text_5')} index={'5'}/>
        <Card text={t('partner.card_title_6')} hiddenText={t('partner.card_text_6')} index={'6'}/>
      </div>
    </div>
  );
}

export default Pertner;