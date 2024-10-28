import React from 'react';
import {useTranslation} from "react-i18next";
import IconCIrcleBig from "../components/Icons/IconCIrcleBig";
import clsx from "clsx";
import WrapperOpenModal from "../components/WrapperOpenModal";

function DocsItem({text, isRight, index}){
  return (
    <div
      data-aos={'fade-up'}
      data-aos-delay={100 * index}
      className={clsx("flex items-center gap-[15px]", isRight && "lg:text-right lg:flex-row-reverse")}>
      <div className={"shrink-0 w-[30px]"}>
        <IconCIrcleBig />
      </div>
      <div className={"lg:text-[24px] md:text-[20px] text-[18px]"}>{text}</div>
    </div>
  )
}

function Docs(props) {
  const {t} = useTranslation();

  const items_l = t('docs.tags_l', {returnObjects: true});
  const items_r = t('docs.tags_r', {returnObjects: true});


  return (
    <div className="">
      <div className="relative container text-white">
        <h2 data-aos={'fade-up'} className={'max-w-[893px] text-center mx-auto'}>{t('docs.title')}</h2>


        <div className={"relative"}>
          <div className={'circles'}>
            <span className={'circle_1'}></span>
            <span className={'circle_2'}></span>
            <span className={'circle_3'}></span>
            <span className={'circle_4'}></span>
          </div>
          <div className={"grid lg:grid-cols-[1fr_354px_1fr] relative items-center lg:gap-[20px] gap-[40px] lg:mt-[50px] mt-[40px]"}>
            <div className={"space-y-[50px]"}>
              {Array.isArray(items_l) && items_l.map((el, i) => (
                <DocsItem text={el} isRight={false} key={el} index={i}/>
              ))}
            </div>

            <WrapperOpenModal>
              <div data-aos={'fade-up'} className={"flex flex-col items-center"}>
                <img src="/doc.png" className={"lg:w-fit w-[190px]"} alt=""/>
                <div
                  className="btn mt-[-30px] lg:!w-full lg:!text-[18px] !text-[14px] !w-[224px] lg:!h-[78px] !h-[50px]">
                  {t('View the contract')}
                </div>
              </div>
            </WrapperOpenModal>

            <div className={"space-y-[50px]"}>
              {Array.isArray(items_r) && items_r.map((el, i) => (
                <DocsItem text={el} isRight={true} key={el} index={i}/>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Docs;