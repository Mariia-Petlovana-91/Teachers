import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';

import { schemaValidationBook } from '../../utils/validations';

import { closePopup } from '../../redux/popup/slice.js';

import RadioBtn from '../RadioBtn/RadioBtn.jsx';

const FormBook = () => {
  const dispatch = useDispatch();
  const teacher = JSON.parse(localStorage.getItem('teacher'));
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidationBook),
  });
  const onSubmit = async (data) => {
    localStorage.removeItem('teacher');
    toast.success('Success🎉. We will contact you shortly.');
    reset();
    dispatch(closePopup());
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="tittle__second form__title">Book trial lesson</h2>
      <p className="form__deskript">
        Our experienced tutor will assess your current language level, discuss your
        learning goals, and tailor the lesson to your specific needs.
      </p>
      <div className="book__data">
        <img
          className="book__img"
          src={teacher.avatar_url}
          alt="teacher avatar"
          width="44px"
          height="44px"
        />
        <div>
          <p className="book__text">Your teacher</p>
          <p className="book__name">
            {teacher.name} {teacher.surname}
          </p>
        </div>
      </div>
      <h3 className="title__third book__title">
        What is your main reason for learning {teacher.languages[0]}?
      </h3>
      <RadioBtn register={register} />
      {errors.category && <p className="form__error">{errors.category.message}</p>}
      <input
        className="form__input"
        {...register('name')}
        placeholder="Full Name"
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
      <input
        className="form__input"
        {...register('phone')}
        placeholder="Phone number"
        type="number"
        autoComplete="off"
      />
      {errors.phone && <p className="form__error">{errors.phone.message}</p>}
      <button className="btn form__btn" type="submit">
        Book
      </button>
    </form>
  );
};

export default FormBook;
