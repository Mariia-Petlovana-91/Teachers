import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FiLogOut } from 'react-icons/fi';

import { selectUser } from '../../redux/auth/selectors';

import { logoutUser } from '../../redux/auth/operation';
import { reload } from 'firebase/auth';

const User = () => {
  const user = useSelector(selectUser);
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
    </div>
  );
};

export default User;
