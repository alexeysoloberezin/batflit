import React, {useCallback, useState} from 'react';
import {useTranslation} from "react-i18next";
import useMediaQuery from "../hooks/useMediaQueary";
import clsx from "clsx";
import WrapperOpenModal from "../components/WrapperOpenModal";
import CatalogCard from "../components/CatalogCard";
import Link from "next/link";

const cards = [
  {
    id: 'q_1',
    name: "Power Bank 6000mAH",
    price: 1200,
    value: 0,
    image: "/cddd_1.png"
  },
  {
    id: 'q_2',
    name: "Станция 6 ячеек",
    price: 30000,
    value: 0,
    image: "/cddd_2.png"
  },
  {
    id: 'q_3',
    name: "Станция 16 ячеек",
    price: 100000,
    value: 0,
    image: "/cddd_3.png"
  },
  {
    id: 'q_4',
    name: "Станция 24 ячейки",
    price: 170000,
    value: 0,
    image: "/cddd_4.png"
  },
]

function Banner(props) {
  const {t} = useTranslation();
  const isMob = useMediaQuery(false, '(max-width: 1024px)');
  const [catalog, setCatalog] = useState([...cards]);


  function Btn({classes}: {classes?: string}) {
    return (
      <WrapperOpenModal>
        <div data-aos={'fade-up'} data-aos-delay={'200'} className={clsx(["btn", classes])}>
          {t('banner.btn')}
          <img src="/icons/moln.svg" alt=""/>
        </div>
      </WrapperOpenModal>
    )
  }

  const onAddRemove = useCallback((value, id) => {
    setCatalog(prevCatalog =>
      prevCatalog.map(el =>
        el.id === id ? { ...el, value: value } : el
      )
    );
  }, []);

  return (
    <div className={"lg:mt-[120px] text-dark mt-[70px] "}>
      <div className={"text-center"}>
        <h2>{t('sfc')}</h2>
        <p className={"text-[24px] mt-[30px]"}>{t('sfc_txt')}</p>
      </div>
      <div className={"grid lg:grid-cols-4 grid-cols-2 md:grid-cols-3 md:mt-[50px] mt-[20px] md:gap-[20px] gap-[10px]"}>
        {catalog.map((item, index) => (
          <CatalogCard
            key={item.id}
            price={item.price}
            name={item.name}
            image={item.image}
            isBlack={true}
            id={item.id}
            value={item.value}
            onAddRemove={(val) => onAddRemove(val, item.id)}
          />
        ))}
      </div>
      <div className={"grid md:grid-cols-2 gap-[10px] md:mt-[60px] mt-[30px]"}>
        <Link className={"btn !w-full"} href="/catalog">{t('goToCatalog')}</Link>
        <WrapperOpenModal>
          <div className={clsx("btn !w-full")}>
            {t('form.btn')}
          </div>
        </WrapperOpenModal>
      </div>
    </div>
  );
}

export default Banner;