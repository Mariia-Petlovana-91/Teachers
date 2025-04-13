import { useSelector } from 'react-redux';

import { selectFavoriteList } from '../redux/favorites/selectors';

import TeacherList from '../components/TeacherList/TeacherList';

const Favorites = () => {
  const favorites = useSelector(selectFavoriteList);

  return (
    <div className="page__teachers">
      {favorites.length === 0 ? (
        <div className="page__favorite-not-item">
          🤷‍♀️ You haven't added any favorite teachers yet.
        </div>
      ) : (
        <TeacherList array={favorites} />
      )}
    </div>
  );
};

export default Favorites;
