const TeacherItem = ({ teacher }) => {
  return (
    <div className="teacher-item">
      <h3>{teacher.name}</h3>
      <p>{teacher.subject}</p>
      {/* Додайте інші дані, які ви хочете відображати */}
    </div>
  );
};

export default TeacherItem;
