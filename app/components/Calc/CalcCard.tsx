import React, {useState} from 'react';
import Slider from 'react-slider';
import {Trans, useTranslation} from "react-i18next";
import FormModal from "../FormModal";
import {useMyModal} from "../../hooks/modal";

const CalculatorSlider = () => {
  const {t} = useTranslation();
  const [stations, setStations] = useState(4);
  const costPerStation = 18500;
  const totalInvestment = stations * costPerStation;
  const {openModal} = useMyModal()


  return (
    <div className="rounded-lg mt-[40px] ">
      <Slider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        min={0}
        max={10}
        step={1}
        renderThumb={(props, state) => (
          <div {...props} className="custom-thumb outline-none translate-y-[-15px] translate-x-[4px] cursor-grab">
            {/* Кастомная иконка */}
            <svg width="22" height="42" viewBox="0 0 22 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.16667 26.7273H0L12.8333 0V15.2727H22L9.16667 42V26.7273Z" fill="#212121"/>
            </svg>
          </div>
        )}
        value={stations}
        onChange={(value) => setStations(value)}
      />
      <div className=" mt-[40px] flex md:flex-row flex-col justify-between md:items-end">
        <div>
          <p className="mb-[5px]">
            <span
              className={"xl:text-[48px] lg:text-[38px] text-[30px] font-bold"}>{(totalInvestment).toLocaleString()}₽</span>
            <span className={"xl:text-[24px] text-[20px]"}>/мес</span>
          </p>
          <p className="xl:text-[24px] text-[20px] opacity-50 font-medium">{(totalInvestment * 5).toLocaleString()}₽
            вложено</p>
        </div>
        <button
          onClick={openModal}
          className={"bg-dark cursor-pointer bg-opacity-20 md:mt-0 mt-[44px] px-[20px] flex items-center justify-center  lg:py-[30px] py-[15px] rounded-[15px] xl:h-[77px] h-[65px] whitespace-nowrap text-[18px] font-bold"}
         >{t('reviews.button')}
        </button>
      </div>

      <div className={"xl:hidden text-[16px] text-center mt-[25px] max-w-[360px] mx-auto"}>
        <Trans i18nKey="home.calc_ps" >
          Оставьте заявку и получите бесплатную консультацию от специалиста <b className={"uppercase"}>battflit</b>
        </Trans>
      </div>
    </div>
  );
};

export default CalculatorSlider;
