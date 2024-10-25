'use client'
import {useTranslation} from "react-i18next";
import Image from "next/image";
import logo_img from "../../../public/logo.svg"
import i18next from "i18next";
import clsx from "clsx";
import Link from "next/link";
import {useEffect, useState} from "react";
import Burger from "../Burger/Burger";

const Header = ({isSecond}) => {
  const {t, i18n} = useTranslation();
  const currentLanguage = i18n.language;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.querySelector('html').style.overflowY = 'hidden';
    } else {
      document.querySelector('html').style.overflowY = 'auto';
    }


    return () => {
      document.querySelector('html').style.overflowY = 'auto';
    }
  }, [isOpen]);

  const changeLanguage = (lang) => {
    i18next.changeLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const mobLink = clsx(`text-[18px]`)

  function Logo () {
    return (
      <div className={"flex items-center gap-[10px]"}>
        <a href={'/'} className={""}>
          <Image src={logo_img} width={102} height={64} alt={"logo-image"}/>
        </a>
        <div className={"text-[18px] opacity-50 xl:block hidden"}>
          {currentLanguage === 'ru' ? (
            <span>Почасовая аренда <br/>POWERBANK</span>
          ) : (
            <span>Hourly rental of <br/>POWER BANK</span>
          )}
        </div>
      </div>
    )
  }

  return (
    <header className={clsx("header z-[50] top-[0px] left-[0px] w-full", {'absolute': !isSecond})}>
      <div className="container relative">
        <div className="flex xl:flex-row w-full items-center xl:justify-center justify-between py-4 ">
          {/*logo start*/}
          <div className={"xl:hidden"}>
            <Logo />
          </div>

          <div className={clsx(
            'flex xl:flex-row overflow-y-auto xl:overflow-y-visible xl:justify-between bg-dark xl:bg-transparent flex-col xl:opacity-100  xl:static xl:pb-0 pb-[30px] xl:pt-0 pt-[30px]  fixed left-0 top-0 xl:h-fit h-screen xl:w-full w-screen xl:translate-y-[0%] transition-all duration-700  z-[40]  items-center  ',
            {
              'translate-y-[-100%] opacity-0': !isOpen
            }
          )}>
            <div className={"xl:block hidden"}>
              <Logo/>
            </div>
            <div className={"xl:hidden"}>
              <Image src={logo_img} width={213} height={56} alt={"logo-image"}/>
            </div>

            <div className={"flex xl:flex-row xl:py-0 py-[15px]  flex-col justify-center xl:grow-0 grow items-center xl:gap-[25px] gap-[30px]"}>
              <Link
                onClick={() => setIsOpen(false)}
                href={'#link_1'} scroll={true}
                className={mobLink}>{t('nav.link_1')}</Link>
              <Link onClick={() => setIsOpen(false)} href={'#link_2'} scroll={true}
                    className={mobLink}>{t('nav.link_2')}</Link>

              <Link onClick={() => setIsOpen(false)} href={'#link_3'} scroll={true}
                    className={mobLink}>{t('nav.link_3')}</Link>

              <Link  onClick={() => setIsOpen(false)} href={'#link_6'} scroll={true}
                    className={mobLink + ' xl:hidden'}>{t('nav.link_6')}</Link>
              <Link  onClick={() => setIsOpen(false)} href={'#link_7'} scroll={true}
                    className={mobLink + ' xl:hidden'}>{t('nav.link_7')}</Link>

              <Link onClick={() => setIsOpen(false)} href={"#link_4"} scroll={true}
                    className={mobLink}>{t('nav.link_4')}</Link>
              <Link onClick={() => setIsOpen(false)} href={'#link_5'} scroll={true}
                    className={clsx(mobLink)}>{t('nav.link_5')}</Link>
            </div>
            <a href="/catalog"
               className={"flex items-center w-[230px] gap-[10px] justify-center bg-main-gradient-green text-[18px] font-bold text-black px-[15px] xl:py-[10px] py-[15px] rounded-[6px]"}>
              {t('Equipment')}
              <img src="/icons/moln.svg" alt=""/>
            </a>
            <Link href="#link_4"
               className={"xl:hidden flex items-center w-[230px] mt-[30px] gap-[10px] justify-center bg-main-gradient text-[18px] font-bold text-black px-[15px] xl:py-[10px] py-[15px] rounded-[6px]"}>
              Стать партнером
              <img src="/icons/moln.svg" alt=""/>
            </Link>
          </div>
          <div className={'xl:hidden relative z-[60] mr-[-12px]'}>
            <Burger active={isOpen} onClick={() => setIsOpen(!isOpen)}/>
          </div>

        </div>

        {!isSecond && (
          <div className="space-x-4  flex items-center justify-end">
            {/* Dark Mode Switch */}
            <div
              className="block text-center   transition duration-500 relative">
              <div className="text-sm leading-6">
                <div className={'bg-dark rounded-[50px]  relative'}>
                  <span
                    className={clsx("absolute top-[2px] left-[2px] bg-gray  rounded-[50px] w-[50%] h-[27px] z-5 transition-all", currentLanguage === 'en' ? "left-[48%]" : '')}
                  ></span>
                  <button
                    className={clsx('w-[52px] h-[31px] relative   z-[10] text-[16px] transition-all', currentLanguage === 'ru' ? 'text-primary' : 'text-white')}
                    type="button"
                    onClick={() => changeLanguage('ru')}
                  >
                    RU
                  </button>
                  <button
                    className={clsx('w-[52px] h-[31px] relative  z-[10] text-[16px] transition-all', currentLanguage === 'en' ? 'text-primary' : 'text-white')}
                    type="button"
                    onClick={() => changeLanguage('en')}
                  >
                    EN
                  </button>
                </div>

              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
