'use client'

import React, {useCallback, useMemo, useState} from 'react';
import Header from "../components/header";
import HeaderSecond from "../components/header/HeaderSecond";
import CatalogCard from "../components/CatalogCard";
import clsx from "clsx";
import {useTranslation} from "react-i18next";
import WrapperOpenModal from "../components/WrapperOpenModal";

const catalogData = [
  {
    id: '1',
    name: "Станция 8 ячеек",
    price: 35000,
    value: 0,
    image: "/catalog/catalog_1.png"
  },
  {
    id: '2',
    name: "Станция 12 ячеек",
    price: 48000,
    value: 0,
    image: "/catalog/catalog_2.png"
  },
  {
    id: '3',
    name: "Станция 12 ячеек + POS-терминал",
    price: 55000,
    value: 0,
    image: "/catalog/catalog_3.png"
  },
  {
    id: '4',
    name: "Станция 6 ячеек",
    price: 20000,
    value: 0,
    image: "/catalog/catalog_4.png"
  },
  {
    id: '5',
    name: "Станция 6 ячеек",
    price: 25000,
    value: 0,
    image: "/catalog/catalog_5.png"
  },
  {
    id: '6',
    name: "Станция 24 ячейки",
    price: 170000,
    value: 0,
    image: "/catalog/catalog_6.png"
  },
  {
    id: '7',
    name: "Станция 24 ячейки",
    price: 170000,
    value: 0,
    image: "/catalog/catalog_7.png"
  },
  {
    id: '8',
    name: "Станция 48 ячейки",
    price: 270000,
    value: 0,
    image: "/catalog/catalog_8.png"
  },
  {
    id: '9',
    name: "Станция 48 ячеек + POS-терминал",
    price: 270000,
    value: 0,
    image: "/catalog/catalog_9.png"
  },
  {
    id: '10',
    name: "Стойка одинарная",
    price: 3400,
    value: 0,
    image: "/catalog/catalog_10.png"
  },
  {
    id: '11',
    name: "Power Bank 6000mAH",
    price: 1200,
    value: 0,
    image: "/catalog/catalog_11.png"
  },
  {
    id: '12',
    name: "Станция 6 ячеек",
    price: 30000,
    value: 0,
    image: "/catalog/catalog_12.png"
  },
  {
    id: '13',
    name: "Станция 8 ячеек",
    price: 35000,
    value: 0,
    image: "/catalog/catalog_13.png"
  },
  {
    id: '14',
    name: "Станция 4 ячейки",
    price: 20000,
    value: 0,
    image: "/catalog/catalog_14.png"
  },
  {
    id: '15',
    name: "Станция 8 ячеек",
    price: 50000,
    value: 0,
    image: "/catalog/catalog_15.png"
  },
  {
    id: '16',
    name: "Станция 12 ячеек",
    price: 70000,
    value: 0,
    image: "/catalog/catalog_16.png"
  },
  {
    id: '17',
    name: "Станция 16 ячеек",
    price: 100000,
    value: 0,
    image: "/catalog/catalog_17.png"
  },
  {
    id: '18',
    name: "Станция 20 ячейки",
    price: 150000,
    value: 0,
    image: "/catalog/catalog_18.png"
  },
  {
    id: '19',
    name: "Станция 24 ячейки",
    price: 170000,
    value: 0,
    image: "/catalog/catalog_19.png"
  },
  {
    id: '20',
    name: "Станция 8 ячеек",
    price: 50000,
    value: 0,
    image: "/catalog/catalog_20.png"
  },
  {
    id: '21',
    name: "Станция 24 ячейки",
    price: 170000,
    value: 0,
    image: "/catalog/catalog_21.png"
  },
  {
    id: '22',
    name: "Уличная станция 24 ячейки",
    price: 170000,
    value: 0,
    image: "/catalog/catalog_22.png"
  },
]

function Page(props) {
  const [catalog, setCatalog] = useState([...catalogData]);
  const {t} = useTranslation()

  const total = useMemo(() => {
    return catalog.reduce((acc, item) => acc + item.value * item.price, 0);
  }, [catalog]);

  const onAddRemove = useCallback((value, id) => {
    setCatalog(prevCatalog =>
      prevCatalog.map(el =>
        el.id === id ? { ...el, value: value } : el
      )
    );
  }, []);

  return (
    <div>
      <HeaderSecond/>


      <div className={"min-h-screen container md:pb-[90px] pb-[50px]"}>
        <h1 className={"text-dark text-center md:mt-[50px] mt-[25px]"}>{t('sfc')}</h1>

        <div className={"grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 md:mt-[50px] mt-[20px] md:gap-[20px] gap-[10px]"}>
          {catalog.map((item, index) => (
            <CatalogCard
              key={item.id}
              price={item.price}
              name={item.name}
              image={item.image}
              id={item.id}
              value={item.value}
              onAddRemove={(val) => onAddRemove(val, item.id)}
            />
          ))}
        </div>

        <div className={"md:mt-[72px] mt-[60px] md:grid flex gap-[30px] flex-col-reverse md:grid-cols-2 items-center"}>
          <WrapperOpenModal>
            <div className={clsx("btn !w-full")}>
              {t('form.btn')}
              <img src="/icons/moln.svg" alt=""/>
            </div>
          </WrapperOpenModal>
          <div className="flex justify-end">
            <div className={"text-[48px] font-bold  text-black ml-auto"}>{total}₽</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;