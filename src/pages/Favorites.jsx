import TeacherList from '../components/TeacherList/TeacherList';

const Favorites = () => {
  const favorites = JSON.parse(localStorage.getItem('favorites'));

  return (
    <div className="page__teachers">
      {favorites.length > 0 ? (
        <TeacherList array={favorites} />
      ) : (
        <div className="page__favorite-not-item">
          🤷‍♀️ You haven't added any favorite teachers yet.
        </div>
      )}
    </div>
  );
};

export default Favorites;
