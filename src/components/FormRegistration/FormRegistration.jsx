import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schemaValidationRegister } from '../../utils/validations';

import { FiEye, FiEyeOff } from 'react-icons/fi';

import { registerUser } from '../../redux/auth/operation';
import { closePopup } from '../../redux/popup/slice.js';
import { selectLoading } from '../../redux/auth/selectors.js';

import Loader from '../../components/common/Loader.jsx';

const FormRestration = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const isLoading = useSelector(selectLoading);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidationRegister),
  });
  const onSubmit = async (data) => {
    await dispatch(
      registerUser({
        email: data.email,
        password: data.password,
        name: data.name,
      }),
    );
    reset();
    dispatch(closePopup());
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
        autoComplete="off"
      />
      {errors.name && <p className="form__error">{errors.name.message}</p>}
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
          id="password"
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
      {isLoading && <Loader />}
    </form>
  );
};

export default FormRestration;
