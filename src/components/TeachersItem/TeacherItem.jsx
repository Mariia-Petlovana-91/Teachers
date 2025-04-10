import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import { FiBookOpen } from 'react-icons/fi';
import { IoHeartSharp, IoHeartOutline } from 'react-icons/io5';

const TeacherItem = ({ teacher }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const isTeacherFavorite = favorites.some((fav) => fav.id === teacher.id);
    setIsFavorite(isTeacherFavorite);
  }, [teacher.id]);

  const toggleFavorite = () => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (favorites.some((fav) => fav.id === teacher.id)) {
      favorites = favorites.filter((fav) => fav.id !== teacher.id);
      setIsFavorite(false);
    } else {
      favorites.push(teacher);
      setIsFavorite(true);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <img className="teacher__avatar" src={teacher.avatar_url} alt="teacher avatar" />
      <div className="teacher__about">
        <div className="teacher__head">
          <p className="teacher__text teacher__text--job">Languages</p>
          <p className="teacher__text">
            <FiBookOpen className="icon__teacher icon__teacher--book" />
            Lessons online <span className="teacher__span">|</span>
          </p>
          <p className="teacher__text">Lessons done: {teacher.lessons_done}</p>
          <p className="teacher__text">
            <FaStar className="icon__teacher icon__teacher--star" />
            Rating: {teacher.rating}
            <span className="teacher__span">|</span>
          </p>
          <p className="teacher__text">
            Price / 1 hour:{' '}
            <span className="teacher__text teacher__text--price">
              {teacher.price_per_hour}$
            </span>
          </p>
          <button type="button" className="teachers__button" onClick={toggleFavorite}>
            {isFavorite ? (
              <IoHeartSharp className="icon__favorite icon__favorite--is" />
            ) : (
              <IoHeartOutline className="icon__favorite icon__favorite--not" />
            )}
          </button>
        </div>
        <h3 className="title__third">
          {teacher.name} {teacher.surname}
        </h3>
        <ul className="teacher__list">
          <li className="teacher__item">
            <span className="teacher__item--span">Speaks:</span> {teacher.languages}
          </li>
          <li className="teacher__item">
            <span className="teacher__item--span">Lesson Info:</span>{' '}
            {teacher.lesson_info}
          </li>
          <li className="teacher__item">
            <span className="teacher__item--span">Conditions:</span> {teacher.conditions}
          </li>
        </ul>
        {isVisible && (
          <div className="teacher__hidden">
            <p className="teacher__experience">{teacher.experience}</p>
            <ul className="reviews__list">
              {teacher.reviews && teacher.reviews.length !== 0 ? (
                teacher.reviews.map((review, index) => (
                  <li className="reviews__item" key={index}>
                    <div className="reviews__about">
                      <p className="reviews__name">{review.reviewer_name}</p>
                      <p className="reviews__rating">
                        <FaStar className="icon__teacher icon__teacher--star" />
                        {review.reviewer_rating}
                      </p>
                    </div>
                    <p className="reviews__comment">{review.comment}</p>
                  </li>
                ))
              ) : (
                <p>No reviews yet</p>
              )}
            </ul>
          </div>
        )}
        <button type="button" onClick={toggleVisibility}>
          {isVisible ? 'Show less' : 'Read more'}
        </button>

        <ul className="levels__list">
          {teacher.levels && teacher.levels.length !== 0 ? (
            teacher.levels.map((levels, index) => (
              <li className="levels__item" key={index}>
                <p className="levels__text">{levels}</p>
              </li>
            ))
          ) : (
            <p>No levels available</p>
          )}
        </ul>

        {isVisible && (
          <button type="button" className="book-trial-btn">
            Book trial lesson
          </button>
        )}
      </div>
    </>
  );
};

export default TeacherItem;
