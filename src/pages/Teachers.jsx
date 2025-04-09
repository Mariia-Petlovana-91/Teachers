import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTeachers, getFilters } from '../redux/teachers/operation.js';
import { selectTeachers, selectFilters } from '../redux/teachers/selectors.js';

import TeacherList from '../components/TeacherList/TeacherList';
import Filters from '../components/Filters/Filters';

const Teachers = () => {
  const dispatch = useDispatch();
  const teachersArray = useSelector(selectTeachers);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(getTeachers());
    dispatch(getFilters()); // ✅ Завантажуємо фільтри один раз
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFilters()); // ✅ Завантажуємо фільтри один раз
  }, []);

  console.log(
    'Redux State:',
    useSelector((state) => state),
  );
  console.log('Фільтри перед рендером:', filters);

  return (
    <>
      <h1>Teachers Page</h1>
      {!filters ? <p>Loading filters...</p> : <Filters array={filters} />}
      <TeacherList array={teachersArray.length > 0 ? teachersArray : []} />
    </>
  );
};

export default Teachers;
