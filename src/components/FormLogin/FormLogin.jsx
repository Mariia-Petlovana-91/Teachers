import { useRef, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schemaValidationLogin } from '../../utils/validations';
import { onClickRef } from '../../utils/onClickRef';

import { FiEye, FiEyeOff } from 'react-icons/fi';

import { loginUser } from '../../redux/auth/operation.js';

import Popup from '../Popup/Popup';

const FormLogin = ({ setIsOpenLogIn }) => {
  const formRef = useRef(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleClick = (event) => {
      onClickRef(setIsOpenLogIn, formRef, event);
    };

    document.addEventListener('click', handleClick, { capture: true });
    return () => {
      document.removeEventListener('click', handleClick, { capture: true });
    };
  }, [setIsOpenLogIn]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidationLogin),
  });

  const onSubmit = async (data) => {
    await dispatch(loginUser(data));
    reset();
    setIsOpenLogIn(false);
  };

  return (
    <Popup>
      <form ref={formRef} className="form" onSubmit={handleSubmit(onSubmit)}>
        <button
          className="form__btn--icon"
          type="button"
          onClick={() => setIsOpenLogIn(false)}
        >
          <RiCloseFill className="icon__form" />
        </button>
        <h2 className="tittle__second form__title">Log In</h2>
        <p className="form__deskript">
          Welcome back! Please enter your credentials to access your account and continue
          your search for an teacher.
        </p>
        <input
          className="form__input"
          {...register('email')}
          placeholder="Email"
          type="text"
          autoComplete="off"
        />
        {errors.email && <p className="form__error">{errors.email.message}</p>}
        <div className="form__password">
          <input
            className="form__input"
            type={isPasswordVisible ? 'text' : 'password'}
            {...register('password')}
            placeholder="Password"
            autoComplete="off"
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

export default FormLogin;
