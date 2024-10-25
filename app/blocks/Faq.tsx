import React, {useEffect, useRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import clsx from "clsx";

function Faq() {
  const {t} = useTranslation();
  const items = t('faq.items', {returnObjects: true});

  return (
    <div className={"mt-[100px]"}>
      <div className="container">
        <h2 data-aos={'fade-up'} className={"mb-[30px] text-center"}>
          {t('faq.title')}
        </h2>

        <div className={"space-y-[10px]"}>
          {Array.isArray(items) && items.map((item, index) => (
            <FaqItem key={index} index={index} title={item.title} answer={item.answer}/>
          ))}
        </div>
      </div>
    </div>
  );
}

function FaqClose() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="15" fill="white"/>
      <path d="M15 21L15 9M9 14.76H21" stroke="#22AD7D" strokeWidth="2"/>
    </svg>
  )
}

function FaqItem({ title, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      // Устанавливаем высоту только когда блок открыт
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen, answer]); // Пересчитываем высоту при изменении "answer" и "isOpen"

  return (
    <div
      data-aos={'fade-up'}
      data-aos-delay={100 * index}
      onClick={() => setIsOpen(!isOpen)} className="bg-[#22AD7D] cursor-pointer rounded-[20px]">
      <div
        style={{
          color: '#fff',
        }}
        className="cursor-pointer flex items-center gap-[10px] lg:text-[24px] text-[20px] font-bold p-[15px]"
      >
        <div className={clsx('transition-all duration-500', { 'rotate-[45deg]': isOpen })}>
          <FaqClose />
        </div>
        {title}
      </div>
      <div
        style={{
          height: isOpen ? `${contentHeight + 20}px` : '0px',
        }}
        className={clsx(
          'overflow-hidden transition-all duration-500 pl-[55px]')}
        ref={contentRef}
      >
        <div>{answer}</div>
      </div>
    </div>
  );
}


export default Faq;
