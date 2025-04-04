import { FiLogIn } from 'react-icons/fi';

const Auth = () => {
  return (
    <div className="auth__container">
      <button className="auth__btn" type="button">
        <FiLogIn className="icon auth__icon" />
        Log in
      </button>
      <button className="auth__btn auth__btn--registration" type="button">
        Registration
      </button>
    </div>
  );
};
export default Auth;
