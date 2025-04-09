import TeacherItem from '../TeachersItem/TeacherItem';

const TeacherList = ({ array }) => {
  return (
    <ul className="teachers__list">
      {array.length !== 0 &&
        array.map((ar) => (
          <li className="teachers__item" key={ar.id}>
            <TeacherItem teacher={ar} />
          </li>
        ))}
    </ul>
  );
};

export default TeacherList;
