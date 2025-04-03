import { RiCloseFill } from 'react-icons/ri';

import Navigation from './Navigation';
import Auth from './Auth';
import User from './User';

const MobileNav = () => {
  return (
    <div className="mob__container">
      <div className="mob__head">
        <User />
        <RiCloseFill className="icon" />
      </div>
      <Navigation />
      <Auth />
    </div>
  );
};
export default MobileNav;
