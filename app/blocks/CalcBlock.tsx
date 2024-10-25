import React, {useState} from 'react';
import {useTranslation} from "react-i18next";
import Slider from 'react-slider';
import RangeIconGreen from "../components/Icons/RangeIconGreen";
import clsx from "clsx";
import RangeIconGold from "../components/Icons/RangeIconGold";
import Line3 from "../components/Icons/Line3";

function CalcBlock(props) {
  const {t} = useTranslation();

  const [stations, setStations] = useState(4);
  const [place, setPlace] = useState(4);
  const [traffic, setTraffic] = useState(500);
  const [car, setCar] = useState(500);
  const [worker, setWorker] = useState(500);

  const costPerStation = 18500;
  const costPerPlace = 1000;

  const title = 'xl:text-[48px]  lg:text-[30px] text-[25px] mb-[25px] text-center '
  const range = 'py-[18px] lg:px-[60px] px-[26px]'
  const subtitle = "lg:text-[24px] text-[20px] font-bold text-center mb-[20px]"
  const total = `flex items-center  gap-[10px] mt-[19px] text-[18px] font-bold`
  return (
    <div id={"link_5"} className={"lg:container text-dark relative pt-[100px]"}>
      <h2 data-aos="fade-up" className={"lg:mb-[65px] mb-[30px] text-center flex items-center justify-center gap-[25px]"}>
        {t('s4.title')}
        <img className={"lg:block hidden"} src="/calc.png" alt=""/>
      </h2>

      <div className={"lg:block hidden absolute pointer-events-none top-[150px] left-1/2 -translate-x-1/2"}>
        <Line3 />
      </div>


      <div className={"grid md:grid-cols-2 gap-[15px] relative"}>
        <div className={"bg-main-gradient py-[30px]  rounded-[25px]"}>
          <h2 className={clsx(title)} data-aos="fade-up">{t('s4.l.title')}</h2>

          <div data-aos="fade-up" className={clsx(range)}>
            <h4 className={clsx(subtitle)} >{t('s4.l.text_1')}</h4>
            <Slider
              className="main-slider"
              thumbClassName="main-thumb"
              trackClassName="green-track"
              min={0}
              max={20}
              step={1}
              renderThumb={(props, state) => (
                <RangeIconGreen props={props} state={state}/>
              )}
              value={stations}
              onChange={(value) => setStations(value)}
            />
            <div className={clsx(total, 'justify-between')} >
              <div>{stations} {t('s4.count')}</div>
              <div>{stations * costPerStation} ₽</div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="400" className={clsx(range, 'bg-white bg-opacity-20')}>
            <h4  className={clsx(subtitle)}>{t('s4.l.text_2')}</h4>
            <Slider
              className="main-slider"
              thumbClassName="main-thumb"
              trackClassName="green-track"
              min={0}
              max={20}
              step={1}
              renderThumb={(props, state) => (
                <RangeIconGreen props={props} state={state}/>
              )}
              value={place}
              onChange={(value) => setPlace(value)}
            />
            <div  className={clsx(total, 'justify-between')}>
              <div>{place} {t('s4.count')}</div>
              <div>{place * costPerPlace} ₽</div>
            </div>
          </div>

        </div>

        {/*RIGHT*/}
        <div className={"bg-main-gradient-green py-[30px]  rounded-[25px]"}>
          <h2 data-aos="fade-up" className={clsx(title)}>{t('s4.r.title')}</h2>

          <div data-aos="fade-up" className={clsx(range)}>
            <h4  className={clsx(subtitle)}>{t('s4.r.text_1')}</h4>
            <Slider
              className="gold-slider"
              thumbClassName="main-thumb"
              trackClassName="gold-track"
              min={0}
              max={5000}
              step={50}
              renderThumb={(props, state) => (
                <RangeIconGold props={props} state={state}/>
              )}
              value={traffic}
              onChange={(value) => setTraffic(value)}
            />
            <div  className={clsx(total, 'justify-center')}>
              <div>{traffic} ₽/мес</div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="400" className={clsx(range, 'bg-dark bg-opacity-10')}>
            <h4  className={clsx(subtitle)}>{t('s4.r.text_2')}</h4>
            <Slider
              className="gold-slider"
              thumbClassName="main-thumb"
              trackClassName="gold-track"
              min={0}
              max={5000}
              step={50}
              renderThumb={(props, state) => (
                <RangeIconGold props={props} state={state}/>
              )}
              value={car}
              onChange={(value) => setCar(value)}
            />
            <div  className={clsx(total, 'justify-center')}>
              <div>{car} ₽/мес</div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="600" className={clsx(range)}>
            <h4  className={clsx(subtitle)}>{t('s4.r.text_3')}</h4>
            <Slider
              className="gold-slider"
              thumbClassName="main-thumb"
              trackClassName="gold-track"
              min={0}
              max={5000}
              step={50}
              renderThumb={(props, state) => (
                <RangeIconGold props={props} state={state}/>
              )}
              value={worker}
              onChange={(value) => setWorker(value)}
            />
            <div  className={clsx(total, 'justify-center')}>
              <div>{worker} ₽/мес</div>
            </div>
          </div>
        </div>

      </div>

      <div className={"lg:py-[60px] py-[50px] h-[243px] lg:px-[60px] px-[45px] relative mt-[15px] bg-dark rounded-[25px] overflow-hidden"}>
        <div className={"bg-gray-gradient absolute w-full h-full opacity-[.2] top-0 left-0 z-10"}></div>
        <div className="custom-dash"></div>

        <div className={"grid md:grid-cols-2 relative z-30 text-white xl:text-[32px] lg:text-[28px] md:text-[23px] text-[18px] gap-[15px]"}>
          <div data-aos="fade-up" data-aos-delay="0">{t('s4.total.opVal')} <b>45%</b></div>
          <div data-aos="fade-up" data-aos-delay="50">{t('s4.total.ras')} <b>{traffic + car + worker}₽</b></div>
          <div data-aos="fade-up" data-aos-delay="100">{t('s4.total.val')} <b>80.000₽/мес</b></div>
          <div data-aos="fade-up" data-aos-delay="150">{t('s4.total.rasH')} <b>{stations * costPerStation + place * costPerPlace}₽</b></div>
          <div data-aos="fade-up" data-aos-delay="200">ROI: 11%</div>
        </div>
      </div>
    </div>
  );
}

export default CalcBlock;