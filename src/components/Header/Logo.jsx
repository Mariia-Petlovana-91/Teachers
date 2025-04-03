import { NavLink } from 'react-router-dom';

import logo from '../../img/ukraine.svg';

const Logo = () => {
  return (
    <NavLink to="/" className="logo__container">
      <img className="logo__img" src={logo} alt="logo" />
      <p className="logo__name">LearnLingo</p>
    </NavLink>
  );
};
export default Logo;
