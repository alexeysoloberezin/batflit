import React from 'react';
import {useTranslation} from "react-i18next";
import 'swiper/css';
import 'swiper/css/navigation';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import IconPhoto from "../components/Icons/IconPhoto";

function Call() {
  return (
    <div className={"w-[60px] h-[60px] shadow-yellow-shadow rounded-[6px] border-2 border-primary p-[10px]"}>
      <div className={"bg-primary flex shadow-yellow-shadow rounded-[6px] items-center justify-center w-full h-full"}>
        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M2.68378 0.0152676C2.45134 0.0291546 2.22421 0.0880625 2.01601 0.18846C1.82075 0.294851 1.64251 0.427854 1.48682 0.583339C1.27083 0.779047 1.14844 0.948776 1.01704 1.11331C0.351805 1.94636 -0.00602546 2.96892 7.67728e-05 4.01948C0.00367665 4.86812 0.234069 5.69425 0.594056 6.46669C1.33023 8.02889 2.54159 9.68288 4.14173 11.2156C4.52692 11.5845 4.90311 11.9552 5.30809 12.2998C7.29412 13.9823 9.6608 15.1957 12.2199 15.8433L13.244 15.994C13.577 16.0113 13.91 15.9871 14.2448 15.9715C14.769 15.9455 15.2809 15.8089 15.7441 15.5714C15.9709 15.459 16.1925 15.337 16.4082 15.2059C16.4251 15.1956 16.4418 15.1852 16.4584 15.1743C16.492 15.1521 16.5595 15.1066 16.6585 15.0345C16.9015 14.8613 17.0509 14.7384 17.2525 14.5357C17.4019 14.3868 17.5315 14.2119 17.6305 14.0127C17.7709 13.7304 17.9113 13.1918 17.9689 12.7432C18.012 12.4003 17.9994 12.2132 17.994 12.0972C17.9869 11.9119 17.8267 11.7196 17.6521 11.6382L16.6333 11.1986C16.6141 11.1903 16.5959 11.1826 16.5766 11.1745C16.3625 11.0846 14.9636 10.4969 14.0828 10.1107C13.982 10.0684 13.874 10.0443 13.7642 10.0397C13.641 10.0275 13.5166 10.0408 13.3993 10.0788C13.2827 10.1164 13.1758 10.1775 13.0856 10.258C13.0849 10.2586 13.0838 10.2581 13.0838 10.2572C13.0838 10.2566 13.0834 10.2562 13.0828 10.2564C13.0675 10.2624 12.9194 10.3955 11.6529 11.872C11.5782 11.9686 11.4753 12.0416 11.3573 12.0817C11.2394 12.1218 11.1117 12.1272 10.9905 12.0972C10.8732 12.067 10.7583 12.0288 10.6467 11.9829C10.4235 11.8928 10.3461 11.8582 10.1931 11.7941L10.1841 11.7906C9.15439 11.358 8.201 10.7737 7.35822 10.0587C7.13143 9.86819 6.92084 9.66036 6.70484 9.45946C5.99671 8.80694 5.37958 8.06874 4.86891 7.26338L4.76271 7.09884C4.68643 6.98829 4.62476 6.86902 4.57912 6.7438C4.54103 6.60202 4.57941 6.47583 4.6209 6.39182C4.65842 6.31586 4.71805 6.25421 4.77597 6.19239C4.91411 6.04492 5.18287 5.75478 5.32969 5.57475C5.49905 5.36747 5.65705 5.15185 5.80307 4.92874C6.01547 4.59968 6.08207 4.26195 5.97047 4.00043C5.46649 2.81579 4.9445 1.63635 4.40812 0.465568C4.30193 0.23349 3.98694 0.0672251 3.70075 0.0343186C3.60355 0.023927 3.50635 0.0135352 3.40916 0.00660747C3.16744 -0.00494767 2.92522 -0.000901942 2.68378 0.0152676Z"
            fill="#212121"/>
        </svg>
      </div>
    </div>
  )
}

function Reviews(props) {
  const {t} = useTranslation();

  const data = t('reviews.items', {returnObjects: true});

  return (
    <div id={"link_7"} className="lg:py-[100px] py-[50px] relative">
      <div className="container">
        <div
          className={"bg-white-gradient md:block hidden pointer-events-none absolute top-0 left-0 md:w-[19%] w-[7%] h-full z-[100] rotate-[180deg]"}></div>
        <div
          className={"bg-white-gradient md:block hidden pointer-events-none absolute top-0 right-0 md:w-[19%] w-[7%] h-full z-[100] "}></div>
        <div className="text-center text-dark">
          <h2 data-aos={'fade-up'} className="flex items-center justify-center gap-[25px]">
            {t("reviews.title")}
            <img src="/rev.png" className="lg:w-[50px] w-[24px]" alt=""/>
          </h2>
          <div data-aos={'fade-up'} className="lg:text-[24px] text-[18px] mt-[10px]">
            {t('reviews.subtitle')}
          </div>
        </div>

        {/* Swiper Slider */}
        <div  data-aos={'fade-up'} className={"reviews_swiper relative"}>

          <Swiper
            slidesPerView={1}
            loop={true}
            centeredSlides={true}
            spaceBetween={20}
            autoHeight={true}
            navigation // Активируем навигацию
            modules={[Navigation]} // Подключаем модуль навигации
            className="lg:mt-[50px] mt-[30px]"
            breakpoints={{
              // Когда ширина экрана >= 640px
              640: {
                slidesPerView: 1.5,
                spaceBetween: 35,
              },
            }}
          >
            {Array.isArray(data) && data.map((item, index) => (
              <SwiperSlide key={index}>
                <div
                  className="bg-dark lg:py-[40px] pt-[20px] pb-[35px] lg:pl-[80px] lg:pr-0 pr-[20px]  pl-[20px] relative  rounded-[25px] shadow-md flex flex-col text-white">
                  <div className="custom-dash"></div>

                  <div className={"flex items-center gap-[15px]"}>
                    <div
                      className="bg-[#151515]  w-[100px] h-[125px] rounded-[15px]  flex items-center justify-center">
                      <IconPhoto/>
                    </div>
                    <div>
                      <div className="text-[18px]  mb-[5px]">{item.name}</div>
                      <div className="text-[18px] font-extralight ">{item.subtitle}</div>
                    </div>
                  </div>
                  <div className="md:text-[18px] text-[16px] my-[25px] leading-tight">{item.text}</div>
                  <div className="flex gap-[10px]">
                    <button className="btn">
                      {t('reviews.button')}
                    </button>
                    <a href={`tel:${item.phone}`} className="">
                      <Call/>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
