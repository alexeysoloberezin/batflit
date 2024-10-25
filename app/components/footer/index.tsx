'use client'
import React from 'react';
import {useTranslation} from "react-i18next";
import Logo from "../Icons/Logo";

const Index = () => {
  const {t} = useTranslation();
  return (
    <footer id={"link_4"} className={"bg-[#121212] text-white"}>
      <div className="">
        <div className="container">
          <div className={"flex lg:flex-row flex-col items-center lg:justify-between pt-[45px] pb-[25px] lg:gap-[15px] gap-[30px]"}>
            <div>
              <Logo/>
            </div>
            <div className={"text-[18px] grow"}>
              <div className={"flex lg:flex-row flex-col items-center justify-center gap-[25px] mb-[25px]"}>
                <a className={" gap-[10px] flex items-center hover:text-primary transition-all"} href="tel:88007772750">
                  <img src="/icons/soc/phone.svg" alt=""/>
                  8 (800) 777-27-50
                </a>
                <div className={" flex justify-center gap-[23px]"}>
                  <a href="#">
                    <img src="/icons/soc/vk.svg" alt=""/>
                  </a>
                  <a href="#">
                    <img src="/icons/soc/inst.svg" alt=""/>
                  </a>
                  <a href="#">
                    <img src="/icons/soc/youtube.svg" alt=""/>
                  </a>
                  <a href="#">
                    <img src="/icons/soc/tg.svg" alt=""/>
                  </a>
                </div>
              </div>
              <div className={"flex justify-center gap-[25px]"}>
                <a className={'gap-[10px] lg:flex hidden items-center hover:text-primary transition-all'} href="mailto:support@battflit.com">
                  <img src="/icons/soc/mail.svg" alt=""/>
                  support@battflit.com
                </a>
                <a className={'gap-[10px] flex items-center lg:opacity-100 opacity-50 hover:text-primary transition-all'} href="#">
                  <img src="/icons/soc/prot.svg" alt=""/>
                  {t('Privacy Policy')}
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

function Phone() {
  return (
    <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.70051 8.00692C3.6724 10.9837 5.57531 13.592 8.11819 15.427L10.5977 13.6137C10.9075 13.3877 11.3046 13.3699 11.624 13.5297C12.6589 14.0608 13.8025 14.4393 15.0156 14.629C15.5563 14.7135 15.9221 15.2149 15.8375 15.7557L15.3043 19.1659C15.2197 19.7066 14.7184 20.0724 14.1776 19.9879C5.0285 18.5572 -1.22685 9.98306 0.203753 0.833957C0.28831 0.293195 0.794563 -0.0718292 1.33045 0.0119656L4.74066 0.545206C5.28142 0.629762 5.64721 1.13114 5.56265 1.67191C5.37297 2.88497 5.38425 4.08952 5.57413 5.23716C5.62874 5.59007 5.49061 5.96275 5.18077 6.1888L2.70051 8.00692Z"
        fill="white"/>
      <path
        d="M2.70051 8.00692C3.6724 10.9837 5.57531 13.592 8.11819 15.427L10.5977 13.6137C10.9075 13.3877 11.3046 13.3699 11.624 13.5297C12.6589 14.0608 13.8025 14.4393 15.0156 14.629C15.5563 14.7135 15.9221 15.2149 15.8375 15.7557L15.3043 19.1659C15.2197 19.7066 14.7184 20.0724 14.1776 19.9879C5.0285 18.5572 -1.22685 9.98306 0.203753 0.833957C0.28831 0.293195 0.794563 -0.0718292 1.33045 0.0119656L4.74066 0.545206C5.28142 0.629762 5.64721 1.13114 5.56265 1.67191C5.37297 2.88497 5.38425 4.08952 5.57413 5.23716C5.62874 5.59007 5.49061 5.96275 5.18077 6.1888L2.70051 8.00692Z"
        fill="url(#paint0_linear_23_2922)"/>
      <defs>
        <linearGradient id="paint0_linear_23_2922" x1="0.508779" y1="-3.11875" x2="21.8626" y2="11.8045"
                        gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFE973"/>
          <stop offset="1" stopColor="#FFC226"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

export default Index;
