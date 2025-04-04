import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { FiMenu } from 'react-icons/fi';

import Logo from './Logo';
import Navigation from './Navigation';
import Auth from './Auth';
import User from './User';
import MobMenu from './MobMenu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const visual = useMediaQuery({ minWidth: 768 });
  const isLogged = false;
  const onIsOpen = () => {
    setIsOpen(true);
  };
  return (
    <header className="header">
      <Logo />
      {visual && <Navigation />}
      {visual && !isLogged && <Auth />}
      {visual && isLogged && <User />}
      {!visual && <FiMenu className="icon" onClick={onIsOpen} />}
      {isOpen && <MobMenu setIsOpen={setIsOpen} />}
    </header>
  );
};

export default Header;
