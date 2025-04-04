import { useMediaQuery } from 'react-responsive';

import { FiMenu } from 'react-icons/fi';

import Logo from './Logo';
import Navigation from './Navigation';
import Auth from './Auth';
import User from './User';
import MobMenu from './MobMenu';

const Header = () => {
  const visual = useMediaQuery({ minWidth: 768 });
  const isLogged = false;
  return (
    <header className="header">
      <Logo />
      {visual && <Navigation />}
      {visual && !isLogged && <Auth />}
      {visual && isLogged && <User />}
      {!visual && <FiMenu className="icon" />}
      {/* <MobMenu /> */}
    </header>
  );
};

export default Header;
