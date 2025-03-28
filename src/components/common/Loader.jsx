import { RotatingSquare } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="loader">
      <RotatingSquare
        visible={true}
        color="#9fbaae"
        ariaLabel="rotating-square-loading"
      />
    </div>
  );
};

export default Loader;
