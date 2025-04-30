import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RiCloseFill } from 'react-icons/ri';

import { selectIsLoggedIn } from '../../redux/auth/selectors';

import Navigation from './Navigation';
import Auth from './Auth';
import User from './User';

const MobMenu = ({ setIsOpen, isOpen }) => {
  const isLogged = useSelector(selectIsLoggedIn);
  const location = useLocation();
  const prevLocation = useRef(location.pathname);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  useEffect(() => {
    if (prevLocation.current !== location.pathname) {
      setIsOpen(false);
    }
    prevLocation.current = location.pathname;
  }, [location]);
  return (
    <div className="mob__container">
      <div className="mob__head">
        {isLogged && <User />}

        <button
          className="mob__btn"
          type="button"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          <RiCloseFill className="icon " />
        </button>
      </div>
      <Navigation />
      {!isLogged && <Auth />}
    </div>
  );
};
export default MobMenu;
