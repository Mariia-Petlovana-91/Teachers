import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import toast from 'react-hot-toast';

import { FaStar } from 'react-icons/fa';
import { FiBookOpen } from 'react-icons/fi';
import { FaRegHeart, FaHeart } from 'react-icons/fa';

import defaultImg from '../../img/defaultImg.jpg';

import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { selectFavoriteList } from '../../redux/favorites/selectors';
import { toggleFavorite } from '../../redux/favorites/slice';

import { openPopup } from '../../redux/popup/slice';

const TeacherItem = ({ teacher }) => {
  const dispatch = useDispatch();
  const isLogged = useSelector(selectIsLoggedIn);
  const favorites = useSelector(selectFavoriteList);
  const isFavorite = favorites.some((fav) => fav.id === teacher.id);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  const onFavorite = () => {
    if (isLogged) {
      dispatch(toggleFavorite(teacher));
    } else {
      toast.error('You are not authorized 🤷‍♀️. Please login or register 👌');
    }
  };

  const onBook = () => {
    localStorage.setItem('teacher', JSON.stringify(teacher));
    dispatch(openPopup('book'));
  };

  return (
    <>
      <div className="teacher__avatar">
        <img
          className="teacher__img"
          src={teacher.avatar_url}
          alt="teacher avatar"
          width="96px"
          height="96px"
        />
      </div>

      <div className="teacher__about">
        <div className="teacher__head">
          <p className="teacher__text teacher__text--job">Languages</p>
          <div className="teacher__discript">
            <p className="teacher__text">
              <FiBookOpen className="icon__teacher icon__teacher--book" />
              Lessons online <span className="teacher__span">|</span>
            </p>
            <p className="teacher__text">
              Lessons done: {teacher.lessons_done}
              <span className="teacher__span">|</span>
            </p>
            <p className="teacher__text">
              <FaStar className="icon__teacher icon__teacher--star" />
              Rating: {teacher.rating}
              <span className="teacher__span">|</span>
            </p>
            <p className="teacher__text">
              Price / 1 hour:{' '}
              <span className="teacher__span teacher__span--price">
                {teacher.price_per_hour}$
              </span>
            </p>
            <button
              type="button"
              className="teachers__btn-favorite"
              onClick={onFavorite}
              aria-label="Add teacher to favorites"
            >
              {isFavorite ? (
                <FaHeart className="icon__favorite" />
              ) : (
                <FaRegHeart className="icon__favorite" />
              )}
            </button>
          </div>
        </div>

        <h3 className="title__third teacher__title">
          {teacher.name} {teacher.surname}
        </h3>

        <ul className="teacher__list">
          <li className="teacher__item">
            Speaks:{' '}
            <span className="teacher__item-span teacher__item-span--speak">
              {teacher.languages.join(' ')}
            </span>
          </li>
          <li className="teacher__item">
            Lesson Info: <span className="teacher__item-span">{teacher.lesson_info}</span>
          </li>
          <li className="teacher__item">
            Conditions: <span className="teacher__item-span">{teacher.conditions}</span>
          </li>
        </ul>

        {isVisible && (
          <>
            <p className="teacher__experience">{teacher.experience}</p>
            <ul className="reviews__list">
              {teacher.reviews && teacher.reviews.length !== 0 ? (
                teacher.reviews.map((review, index) => (
                  <li className="reviews__item" key={index}>
                    <div className="reviews__about">
                      <img
                        className="reviews__avatar"
                        src={
                          review.avatar
                            ? `https://ftp.goit.study/img/avatars/${review.avatar}`
                            : defaultImg
                        }
                        alt="avatar user"
                        width="44px"
                        height="44px"
                      />
                      <div>
                        <p className="reviews__name">{review.reviewer_name}</p>
                        <p className="reviews__rating">
                          <FaStar className="icon__teacher icon__teacher--star" />
                          {review.reviewer_rating}
                        </p>
                      </div>
                    </div>
                    <p className="reviews__comment">{review.comment}</p>
                  </li>
                ))
              ) : (
                <p>No reviews yet</p>
              )}
            </ul>
          </>
        )}

        <button className="teacher__btn-read" type="button" onClick={toggleVisibility}>
          {isVisible ? 'Show less' : 'Read more'}
        </button>

        <ul className="levels__list">
          {teacher.levels && teacher.levels.length !== 0 ? (
            teacher.levels.map((level, index) => (
              <li className="levels__item" key={index}>
                <p className="levels__text">#{level}</p>
              </li>
            ))
          ) : (
            <p>No levels available</p>
          )}
        </ul>

        {isVisible && (
          <button type="button" className="btn teacher__btn-book" onClick={onBook}>
            Book trial lesson
          </button>
        )}
      </div>
    </>
  );
};

export default TeacherItem;
