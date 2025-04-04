import { NavLink } from 'react-router-dom';

import { FiLogIn } from 'react-icons/fi';

const Auth = () => {
  return (
    <div className="auth__container">
      <NavLink to="/login" className="link auth__link" type="button">
        <FiLogIn className="icon auth__icon" />
        Log in
      </NavLink>
      <NavLink
        to="/register"
        className="link auth__link auth__link--registration"
        type="button"
      >
        Registration
      </NavLink>
    </div>
  );
};
export default Auth;
