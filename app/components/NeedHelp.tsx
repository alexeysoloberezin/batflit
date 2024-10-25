import React, {useEffect, useState} from 'react';
import clsx from "clsx";
import {botToken, chatId} from "../env";
import {useTranslation} from "react-i18next";
import {z} from "zod";
import {toast} from "react-toastify";
import InputMask from "react-input-mask";

function NeedHelp(props) {
  const [isOpen, setIsOpen] = useState(false);

  const {t} = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    question: '',
    city: '',
  });

  const formSchema = z.object({
    name: z.string().min(2, {message: 'validation.name'}),
    phone: z.string().regex(/^\+1 \(\d{3}\)-\d{3}-\d{4}$/, {message: 'validation.phone'}),
    city: z.string().min(2, {message: 'validation.city'}),
    question: z.string().min(2, {message: 'validation.question'})
  });

  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  const validateForm = () => {
    try {
      formSchema.parse(formData);
      return true;
    } catch (e) {
      const fieldErrors = {};
      for (const key in e.formErrors.fieldErrors) {
        fieldErrors[key] = t(e.formErrors.fieldErrors[key][0]);
      }
      return false;
    }
  };

  useEffect(() => {
    if (mounted) {
      validateForm();
    }
    setMounted(true);
  }, [formData]);


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      question: '',
      city: ''
    });
  };

  const handleSubmit = async (e) => {
    console.log('submit', e)
    e.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      setLoading(false);
      toast.warn('Form not valid', {
        theme: "dark",
      })
      return;
    }

    const setError = () => {
      toast.error(t('form.errorMessage'), {
        theme: "dark",
      })
    };

    const setSuccess = () => {
      toast.success(t('form.successMessage'), {
        theme: "dark",
      })
    };

    try {
      const message = `Help Form:\nName: ${formData.name}\nPhone: ${formData.phone}\nCity: ${formData.city}\nQuestion: ${formData.question}\n`;
      const res = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: message
        })
      });

      if (res.status !== 200) {
        setError();
        return;
      }
      setSuccess();
      setTimeout(() => {
        resetForm()
      }, 2500)
    } catch (err) {
      setError();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div

      style={{zIndex: 110}}

      className={clsx("w-[280px] fixed bottom-0 right-[20px] flex flex-col overflow-hidden  transition-all bg-[#2B2B2B]  gap-[10px] px-[15px] rounded-tl-[25px] rounded-tr-[25px]", {
        "flex items-center justify-center ": !isOpen,
      })}>
      <div   onClick={() => {
        setIsOpen(!isOpen)
      }} className={'lg:flex  items-center pt-2 w-full gap-[10px] cursor-pointer'}>
        <div
          className={"w-[36px] h-[36px] group-hover:bg-[#2B2B2B] transition-all shrink-0 relative bg-[#212121] rounded-full"}>
          <img src="/rev.png"
               className={"absolute  w-[36px] h-[45px] object-contain top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}
               alt=""/>
        </div>
        <div
          className={"bg-[#212121] group-hover:bg-[#2B2B2B] transition-all rounded-[100px] h-[36px] text-[18px] flex items-center text-center w-full justify-center"}>
          {t('needHep')}
        </div>
      </div>
      <form onSubmit={handleSubmit} className={"overflow-hidden transition-all duration-700"} style={{height: isOpen ? '270px' : '0px'}}>
        <div>
          <input
            type="text"
            className={clsx('input')}
            placeholder={t('form.name')}
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div >
          <InputMask
            mask="+1 (999)-999-9999"
            value={formData.phone}
            onChange={handleChange}
          >
            {(inputProps) => (
              <input
                {...inputProps}
                className={clsx('input')}
                type="text"
                placeholder={t('form.phone')}
                name="phone"
                required
              />
            )}
          </InputMask>
        </div>
        <input
          type="text"
          className={clsx('input', 'mb-[0px]')}
          placeholder={t('form.city2')}
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />
        <input
          name={"question"}
          className={clsx('input')}
          value={formData.question}
          onChange={handleChange}
          placeholder={t('form.question')}
        />

        <button
          type="submit"
          disabled={loading}
          className="btn !w-full !h-[45px] !text-[15px] mt-[10px]"
        >
          {loading ? t('form.loading') : t('form.btnHelp')}
        </button>
      </form>
    </div>
  );
}

export default NeedHelp;