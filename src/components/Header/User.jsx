import { useState } from 'react';
// import { useSelector } from 'react-redux';

import { FiLogOut } from 'react-icons/fi';

const User = () => {
  const [userName, setUserName] = useState('U');
  return (
    <div className="user__container">
      <button className="user__btn" type="button">
        <FiLogOut className="icon" />
      </button>
      <div className="user__block">
        <p className="user__name">{userName}</p>
      </div>
    </div>
  );
};

export default User;
