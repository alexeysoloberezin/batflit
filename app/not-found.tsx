'use client'
import Link from 'next/link'
import i18next from "i18next";
import {useTranslation} from "react-i18next";
import React from "react";

export default function NotFound() {
  const {t} = useTranslation();
  return <div className={"flex flex-col px-[10px] text-dark gap-[25px] min-h-screen items-center justify-center"}>
    <img src="/404.svg" alt=""/>
    <div className={"lg:text-[48px] md:text-[35px] text-[30px] font-bold text-center"}>Данной страницы не существует</div>
    <Link href={'/'} className={'btn'}>
      Вернуться на главную
    </Link>

    <img src="/flash_1.svg" className={"absolute lg:block hidden top-[65%] right-[-50px] z-[-1]"} alt=""/>
    <img src="/flash_2.svg" className={"absolute lg:block hidden top-[5%] left-[-105px] z-[-1]"} alt=""/>
  </div>
}
