import { useSelector } from 'react-redux';

import { RiCloseFill } from 'react-icons/ri';

import { selectIsLoggedIn } from '../../redux/auth/selectors';

import Navigation from './Navigation';
import Auth from './Auth';
import User from './User';

const MobMenu = ({ setIsOpen, setIsOpenLogIn, setIsOpenRegist }) => {
  const isLogged = useSelector(selectIsLoggedIn);
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
      {!isLogged && (
        <Auth setIsOpenLogIn={setIsOpenLogIn} setIsOpenRegist={setIsOpenRegist} />
      )}
    </div>
  );
};
export default MobMenu;
