import { RiCloseFill } from 'react-icons/ri';

import Navigation from './Navigation';
import Auth from './Auth';

const MobileNav = () => {
  return (
    <div className="mob__container">
      <div className="mob__head">
        <button className="mob__btn" type="button">
          <RiCloseFill className="icon " />
        </button>
      </div>
      <Navigation />
      <Auth />
    </div>
  );
};
export default MobileNav;
