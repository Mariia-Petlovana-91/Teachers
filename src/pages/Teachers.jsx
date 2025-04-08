import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getTeachers } from '../redux/teachers/operation.js';
import {
  selectTeachers,
  selectTotalPages,
  selectPage,
  selectError,
} from '../redux/teachers/selectors.js';

import TeacherList from '../components/TeacherList/TeacherList';

const Teachers = () => {
  const dispatch = useDispatch();
  const teachersArray = useSelector(selectTeachers);

  useEffect(() => {
    dispatch(getTeachers());
  }, [dispatch]);

  return <TeacherList array={teachersArray} />;
};

export default Teachers;
