const TeacherItem = ({ teacher }) => {
  return (
    <div className="teacher-item">
      <h3>{teacher.name}</h3>
      <p>{teacher.subject}</p>
    </div>
  );
};

export default TeacherItem;
