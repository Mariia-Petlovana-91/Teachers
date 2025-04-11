import notFoundImg from '../img/notFound.jpg';

const NotFound = () => {
  return (
    <div className="page">
      <img className="page__not-found-imd" src={notFoundImg} alt="not found image" />
    </div>
  );
};

export default NotFound;
