import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTeachers, getFilters } from '../redux/teachers/operation.js';
import {
  selectTeachers,
  selectLoading,
  selectError,
  selectFilters,
} from '../redux/teachers/selectors.js';
import Loader from '../components/common/Loader.jsx';
import TeacherList from '../components/TeacherList/TeacherList';
import Filters from '../components/Filters/Filters';

const Teachers = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectLoading);
  const filtersData = useSelector(selectFilters);
  const teachersArray = useSelector(selectTeachers);
  const selectedLanguage = useSelector((state) => state.filtersData.language);
  const selectedLevel = useSelector((state) => state.filtersData.level);
  const selectedPrice = useSelector((state) => state.filtersData.price);

  const [currentTeachers, setCurrentTeachers] = useState([]);
  const [loadedTeachersCount, setLoadedTeachersCount] = useState(3);

  useEffect(() => {
    dispatch(getTeachers());
    dispatch(getFilters());
  }, [dispatch]);

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

  useEffect(() => {
    const filteredTeachers = filterTeachers(teachersArray);
    const newTeachersList = filteredTeachers.slice(0, loadedTeachersCount);
    setCurrentTeachers(newTeachersList);
  }, [
    teachersArray,
    loadedTeachersCount,
    selectedLanguage,
    selectedLevel,
    selectedPrice,
  ]);

  const loadMoreTeachers = () => {
    const nextTeachersCount = loadedTeachersCount + 3;
    setLoadedTeachersCount(nextTeachersCount);
  };

  const filteredTeachers = teachersArray ? filterTeachers(teachersArray) : [];

  return (
    <div>
      {isLoading && <Loader />}
      <Filters array={filtersData} />
      {filteredTeachers.length === 0 ? (
        <p>No teachers found with the selected filters.</p>
      ) : (
        <>
          <TeacherList array={currentTeachers} />
          {currentTeachers.length < filteredTeachers.length ? (
            <button type="button" onClick={loadMoreTeachers} disabled={isLoading}>
              Load More
            </button>
          ) : (
            <p>End of the list</p>
          )}
        </>
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Teachers;
