import { RiCloseFill } from 'react-icons/ri';

import Navigation from './Navigation';
import Auth from './Auth';
import User from './User';

const MobMenu = ({ setIsOpen }) => {
  const isLogged = true;
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
