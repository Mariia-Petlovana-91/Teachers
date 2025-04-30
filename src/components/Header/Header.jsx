import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { FiMenu } from 'react-icons/fi';

import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { setUser } from '../../redux/auth/slice';

import { auth } from '../../api/firebase';
import { onAuthStateChanged } from 'firebase/auth';

import Logo from './Logo';
import Navigation from './Navigation';
import Auth from './Auth';
import User from './User';
import MobMenu from './MobMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const visual = useMediaQuery({ minWidth: 768 });
  const isLogged = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user));
      } else {
        dispatch(setUser(null));
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const onIsOpen = () => {
    setIsOpen(true);
  };

  return (
    <header className="header">
      <Logo />
      {visual && <Navigation />}
      {isLogged ? visual && <User /> : visual && <Auth />}

      {
        <FiMenu
          aria-label="Open mob menu btn"
          className="icon icon__menu"
          onClick={onIsOpen}
        />
      }
      {isOpen && <MobMenu setIsOpen={setIsOpen} isOpen={isOpen} />}
    </header>
  );
};

export default Header;
