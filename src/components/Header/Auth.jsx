import { useDispatch } from 'react-redux';

import { FiLogIn } from 'react-icons/fi';

import { openPopup } from '../../redux/popup/slice';

const Auth = () => {
  const dispatch = useDispatch();
  return (
    <div className="auth__container">
      <button
        className="auth__btn auth__btn--login"
        type="button"
        onClick={() => {
          dispatch(openPopup('login'));
        }}
      >
        <FiLogIn className="icon auth__icon" />
        Log in
      </button>
      <button
        className="auth__btn auth__btn--registration"
        type="button"
        onClick={() => {
          dispatch(openPopup('register'));
        }}
      >
        Registration
      </button>
    </div>
  );
};
export default Auth;
