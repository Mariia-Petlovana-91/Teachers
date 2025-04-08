import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FiLogOut } from 'react-icons/fi';

import Loader from '../common/Loader';

import { selectUser } from '../../redux/auth/selectors';
import { selectLoading } from '../../redux/auth/selectors';
import { logoutUser } from '../../redux/auth/operation';

const User = () => {
  const user = useSelector(selectUser);
  const isLoader = useSelector(selectLoading);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('U');

  useEffect(() => {
    setUserName(user.email[0].toUpperCase());
  }, [userName]);

  return (
    <div className="user__container">
      <button
        className="user__btn"
        type="button"
        onClick={() => {
          dispatch(logoutUser());
        }}
      >
        <FiLogOut className="icon" />
      </button>
      <div className="user__block">
        <p className="user__name">{userName}</p>
      </div>
      {isLoader && <Loader />}
    </div>
  );
};

export default User;
