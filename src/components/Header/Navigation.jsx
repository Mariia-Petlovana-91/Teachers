import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/" className="link nav__link">
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="teachers" className="link nav__link">
            Teachers
          </NavLink>
        </li>
        <li className="nav__item nav__item--private">
          <NavLink to="/favorite" className="link nav__link">
            Favourite
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
