'use client'
import './globals.css';
import './styles/index.scss';
import Footer from '../app/components/footer';
import {Providers} from './providers';
import React, {useContext, useEffect, useState} from "react";
import i18n from "../i18n";
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {ToastContainer} from "react-toastify";
import NeedHelp from "./components/NeedHelp";
import FormModal from "./components/FormModal";
import {ModalContext} from "./hooks/modal";

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {

  useEffect(() => {
    const storedLanguage = localStorage.getItem('language');

    const defaultLanguage = 'en';

    i18n.changeLanguage(storedLanguage || defaultLanguage);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 600,  // Продолжительность анимации
      easing: 'ease-in-out',  // Задайте стиль анимации
      once: true,  // Анимация срабатывает только один раз
    });
  }, []);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true)
  };
  const closeModal = () => setIsModalOpen(false);

   return (
    <>
      <html lang="en">
      <body>
      <Providers>
        <ModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
          <div className={' text-white app'}>
            <ToastContainer/>

            {children}

            {/*footer start*/}
            <Footer/>

            <NeedHelp/>
            <FormModal onClose={closeModal} isOpen={isModalOpen}/>
            {/*footer end*/}
          </div>
        </ModalContext.Provider>
      </Providers>
      </body>
      </html>
    </>
  );
}
