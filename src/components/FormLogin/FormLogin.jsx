import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schemaValidationLogin } from '../../utils/validations';

import { FiEye, FiEyeOff } from 'react-icons/fi';

import { loginUser } from '../../redux/auth/operation.js';
import { closePopup } from '../../redux/popup/slice.js';
import { selectLoading } from '../../redux/auth/selectors.js';

import Loader from '../../components/common/Loader.jsx';

const FormLogin = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();
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
    dispatch(closePopup());
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
          aria-label="Toggle visibility password"
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
      {isLoading && <Loader />}
    </form>
  );
};

export default FormLogin;
