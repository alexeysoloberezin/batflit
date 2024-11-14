import React from 'react';

function Phone() {
  return (
    <div data-aos={'fade-up'}>
      <div
        className={"relative lg:h-full lg:scale-100 scale-[.7] h-[350px] lg:mt-0 mt-[30px] lg:w-auto lg:ml-0 sm:ml-[-50px]  sm:w-[400px] w-[250px]"}>
        <img className={"absolute top-1/2 ml-[-90px] iphone1 -translate-y-1/2 left-1/2 -translate-x-1/2"}
             src="/app/phone1.png" alt=""/>
        <img className={"absolute bottom-0 right-[-20px] z-10"} src="/app/star.png" alt=""/>
        <div
          className={"absolute top-1/2 w-[250px] h-[505px] -translate-y-1/2 left-1/2 p-[5px] rounded-[40px] -translate-x-1/2 overflow-hidden"}>
          <video
            className={"w-full h-full bg-gray-gradient absolute top-0 left-0"}
            height="100%" width="100%" autoPlay loop playsInline
            muted>
            <source src="/app_preview.mp4" type="video/mp4"/>
            Видео не поддерживается вашим браузером.
          </video>
          <img className={"max-w-fit absolute top-0 left-0"} src="/app/iphone2.png"
               alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Phone;