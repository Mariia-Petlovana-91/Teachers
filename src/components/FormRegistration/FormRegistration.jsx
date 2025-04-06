import { useRef, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schemaValidationRegister } from '../../utils/validations';
import { onClickRef } from '../../utils/onClickRef';

import { RiCloseFill } from 'react-icons/ri';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import Popup from '../Popup/Popup';

const FormRestration = ({ setIsOpenRegist }) => {
  const formRef = useRef(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  useEffect(() => {
    const handleClick = (event) => {
      onClickRef(setIsOpenRegist, formRef, event);
    };

    document.addEventListener('click', handleClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleClick, { capture: true });
    };
  }, [setIsOpenRegist]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidationRegister),
  });

  const onSubmit = async (data) => {
    await postData(data);
    reset();
    setIsOpenRegist(false);
  };

  return (
    <Popup>
      <form ref={formRef} className="form" onSubmit={handleSubmit(onSubmit)}>
        <button
          className="form__btn--icon"
          type="button"
          onClick={() => setIsOpenRegist(false)}
        >
          <RiCloseFill className="icon__form" />
        </button>
        <h2 className="tittle__second form__title">Registration</h2>
        <p className="form__deskript">
          Thank you for your interest in our platform! In order to register, we need some
          information. Please provide us with the following information
        </p>
        <input
          className="form__input"
          {...register('name')}
          placeholder="Name"
          type="text"
        />
        {errors.name && <p className="form__error">{errors.name.message}</p>}
        <input
          className="form__input"
          {...register('email')}
          placeholder="Email"
          type="text"
        />
        {errors.email && <p className="form__error">{errors.email.message}</p>}
        <div className="form__password">
          <input
            id="password"
            className="form__input"
            type={isPasswordVisible ? 'text' : 'password'}
            {...register('password')}
            placeholder="Password"
          />
          <button
            className="form__btn--eyes"
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            {isPasswordVisible ? (
              <FiEye className="icon__form" />
            ) : (
              <FiEyeOff className="icon__form" />
            )}
          </button>
        </div>
        {errors.password && <p className="form__error">{errors.password.message}</p>}
        <button className="btn form__btn" type="submit">
          Sign Up
        </button>
      </form>
    </Popup>
  );
};

export default FormRestration;
