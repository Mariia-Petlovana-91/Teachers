import { FiLogIn } from 'react-icons/fi';

const Auth = ({ setIsOpenLogIn, setIsOpenRegist }) => {
  return (
    <div className="auth__container">
      <button
        className="auth__btn auth__btn--login"
        type="button"
        onClick={() => {
          setIsOpenLogIn(true);
        }}
      >
        <FiLogIn className="icon auth__icon" />
        Log in
      </button>
      <button
        className="auth__btn auth__btn--registration"
        type="button"
        onClick={() => {
          setIsOpenRegist(true);
        }}
      >
        Registration
      </button>
    </div>
  );
};
export default Auth;
