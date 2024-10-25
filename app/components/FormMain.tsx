import React, {useEffect, useState} from 'react';
import {z} from "zod";
import Checkbox from "react-custom-checkbox";
import InputMask from 'react-input-mask';
import {botToken, chatId} from "../env";
import {FiCheck} from "react-icons/fi";
import {useTranslation} from "react-i18next";
import clsx from "clsx";
import useMediaQuery from "../hooks/useMediaQueary";
import {toast} from "react-toastify";


function FormMain({aos = true}: {aos: boolean}) {
  const {t} = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    checked: false,
    city: '',
  });

  const formSchema = z.object({
    name: z.string().min(1, {message: 'validation.name'}),
    phone: z.string().regex(/^\+1 \(\d{3}\)-\d{3}-\d{4}$/, {message: 'validation.phone'}),
    city: z.string().min(1, {message: 'validation.city'}),
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
      checked: false,
      city: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!validateForm()) {
      toast.warning('Form not valid', {
        theme: "dark",
      })
      setLoading(false);
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
      const message = `Name: ${formData.name}\nPhone: ${formData.phone}\nCity: ${formData.city}\nPlsCallToday: ${formData.checked ? 'Yes' : 'No'}`;
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
  const isMob = useMediaQuery(false, '(max-width: 1024px)');


  return (
    <form onSubmit={handleSubmit} className="flex flex-col lg:p-0 lg:px-[20px] ">
      <h2 data-aos={'fade-up'} className={"mb-[10px] text-center"}>{t('form.title_2')}</h2>
      <div data-aos={'fade-up'} className={"mb-[10px] text-[18px] font-extralight text-center"}>{t('form.subtitle')}</div>
      <div>
        <input
          data-aos={aos ? 'fade-up' : undefined}
          type="text"
          className={clsx('input')}
          placeholder={t('form.name')}
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div data-aos={aos ? 'fade-up' : undefined}>
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
        data-aos={aos ? 'fade-up' : undefined}
        className={clsx('input', 'mb-[25px]')}
        placeholder={t('form.city')}
        name="city"
        value={formData.city}
        onChange={handleChange}
        required
      />

      <div  data-aos={aos ? 'fade-up' : undefined}>
        <Checkbox
          checked={formData.checked}
          onChange={(value, e) => {
            setFormData({
              ...formData,
              'checked': value
            });
          }}
          name={'checked'}
          icon={
            <div
              style={{
                display: "flex",
                flex: 1,
                backgroundColor: "transparent",
                alignSelf: "stretch",
                alignItems: "center",
                justifyContent: 'center'
              }}
            >
              <FiCheck color="white" size={14}/>
            </div>
          }
          labelStyle={{margin: '0 0 0 10px', cursor: 'pointer', userSelect: 'none', fontSize: !isMob ? '14px' : '11px'}}
          borderColor="#FFC738"
          borderRadius={3}
          style={{overflow: "hidden"}}
          label={t('form.cbx')}
        />
      </div>


      <button
        data-aos={aos ? 'fade-up' : undefined}
        type="submit"
        disabled={loading}
        className="btn !w-full !h-[60px] mt-[25px]"
      >
        {loading ? t('form.loading') : t('form.btn')}
      </button>
      <div  data-aos={aos ? 'fade-up' : undefined} className={"md:text-[14px] text-[11px] font-extralight text-center mt-[15px] opacity-50"}>
        {t('form.ps')}
      </div>
    </form>
  );
}

export default FormMain;