import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeachers, getFilters } from '../redux/teachers/operation.js';
import {
  selectTeachers,
  selectLoading,
  selectError,
  selectFilters,
  selectIsMoreData,
  selectLastKey,
} from '../redux/teachers/selectors.js';
import { selectLanguage, selectLevel, selectPrice } from '../redux/filters/selectors.js';
import Loader from '../components/common/Loader.jsx';
import TeacherList from '../components/TeacherList/TeacherList';
import Filters from '../components/Filters/Filters';

const Teachers = () => {
  const isMoreData = useSelector(selectIsMoreData);
  const lastKey = useSelector(selectLastKey);
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const filtersData = useSelector(selectFilters);
  const teachers = useSelector(selectTeachers);
  const selectedLanguage = useSelector(selectLanguage);
  const selectedLevel = useSelector(selectLevel);
  const selectedPrice = useSelector(selectPrice);

  useEffect(() => {
    dispatch(getTeachers(null));
    dispatch(getFilters());
  }, [dispatch]);

  const loadMore = () => {
    dispatch(getTeachers(lastKey));
  };

  const onClear = () => {
    window.location.reload();
  };

  const filterTeachers = (teachers) => {
    if (!teachers || teachers.length === 0) return [];

    return teachers.filter((teacher) => {
      let matches = true;

      if (selectedLanguage) {
        if (!teacher.languages || !teacher.languages.includes(selectedLanguage)) {
          matches = false;
        }
      }

      if (selectedLevel) {
        if (!teacher.levels || !teacher.levels.includes(selectedLevel)) {
          matches = false;
        }
      }

      if (selectedPrice) {
        if (teacher.price_per_hour !== selectedPrice) {
          matches = false;
        }
      }

      return matches;
    });
  };

  const isFilter = selectedLanguage || selectedPrice || selectedLevel === null;
  console.log(isFilter);
  const finishArray = isFilter ? filterTeachers(teachers) : teachers;

  return (
    <div className="page__teachers">
      {isLoading && <Loader />}
      <Filters array={filtersData} />
      <TeacherList array={finishArray} />
      {isFilter !== true ? (
        <button className="teacher__button" type="button" onClick={onClear}>
          Clear filter
        </button>
      ) : isMoreData ? (
        <button className="teacher__button" type="button" onClick={loadMore}>
          Load More
        </button>
      ) : (
        <p className="teacher__end">End of the list</p>
      )}
      {error && <p className="teacher__error">{error}</p>}
    </div>
  );
};

export default Teachers;
