import React from 'react';
import {useTranslation} from "react-i18next";
import clsx from "clsx";
import useMediaQuery from "../hooks/useMediaQueary";

type Card = {
  index: string,
  text: string,
  image?: string,
  children?: any,
  mob?: {
    index: string,
    text: string,
    image: string,
  }
  classes?: string
}

function ServicesCard({index, text, image, classes, children, mob}: Card) {
  const isSmallScreen = useMediaQuery(false, '(max-width: 1280px)');

  const data = isSmallScreen && mob ? {
    image: mob.image,
    text: mob.text,
    index: mob.index
  } : {
    image: image,
    text: text,
    index: index
  }

  return (
    <div className={clsx(classes, 'rounded-[20px] md:min-h-[295px] min-h-[184px] flex lg:py-[27px] p-[15px] lg:px-[22px] relative overflow-hidden border-1 border-white border')}>
      {children ? (
        children
      ) : (
        <>
          {data.image && (
            <img src={data.image} alt="" className="absolute top-0 left-0 z-[2] object-cover w-full h-full"/>
          )}
          <div className={"h-full grow flex-col relative z-[4] justify-between flex"}>
            <div className={"md:text-[19px] text-[15px]"}>{data.index}</div>
            <div className={"mt-auto md:text-[19px] text-[15px]"}>{data.text}</div>
          </div>
        </>
      )}
    </div>
  )
}

function Services(props) {
  const {t} = useTranslation();

  const data = [
    {
      text: t('home.consulting_finance'),
      image: "",
      classes: 'lg:col-span-3 md:col-span-4 col-span-7',
    },
    {
      text: t('home.strategic_restructuring'),
      image: "",
      classes: 'lg:col-span-3 md:col-span-4 col-span-7 md:col-start-0 col-start-6',
    },
    {
      text: t('home.business_loans'),
      image: "",
      mob: {
        text: t('home.credit_lines'),
        image: '/aboutUs1.jpg',
        index: "03"
      },
      classes: 'lg:col-span-3 md:col-span-4 col-span-7',
    },
    {
      text: t('home.credit_lines'),
      mob: {
        text: t('home.business_loans'),
        image: '',
        index: "04"
      },
      image: "/aboutUs1.jpg",
      classes: 'lg:col-span-3  col-span-6',
    },
    {
      text: t('home.plans'),
      image: "",
      classes: 'lg:col-span-3  col-span-6',
    },
    {
      text: t('home.plans'),
      image: "/aboutUs2.jpg",
      classes: 'lg:col-span-6 col-span-12',
    },
    {
      text: t('home.working_capital'),
      image: "",
      classes: 'lg:col-span-3 md:col-span-4 col-span-7 md:col-start-0 col-start-6',
    },
    {
      text: t('home.money_for_repairs'),
      image: "/aboutUs3.jpg",
      classes: 'lg:col-span-3 md:col-span-4  col-span-7',
    },
    {
      text: t('home.flexible_schedules'),
      image: "",
      classes: 'lg:col-span-3 md:col-span-4  col-span-7 md:col-start-0 col-start-6',
    }
  ]

  return (
    <div id={'link_1'} className={"py-[50px]"}>
      <div className="container">
        <div className={"lg:mb-[50px] mb-[35px]"}>
          <h3 className={'subtitle uppercase sm:text-left text-right mb-[10px]'}>
            {t('home.services_title')}
          </h3>
          <div className={'lg:text-[22px] text-[18px]'}>
            {t('home.services_text')}
          </div>
        </div>
        <div className={"grid grid-cols-12 gap-[0px]"}>
          {data.map((el, i) => (
            <ServicesCard
              key={el.text + i}
              text={el.text}
              classes={el.classes}
              image={el.image}
              mob={el?.mob || null}
              index={'0' + (i + 1)}
            />
          ))}
          <ServicesCard
            text={''}
            classes={'bg-white lg:col-span-6 col-span-12'}
            index={''}
          >
            <img src="/graf.png" className={'md:max-h-[240px] max-h-[180px] mx-auto'} alt=""/>
          </ServicesCard>
        </div>
      </div>
    </div>
  );
}

export default Services;