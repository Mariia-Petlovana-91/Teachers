import { useState } from 'react';
// import { useSelector } from 'react-redux';

import { FiLogOut } from 'react-icons/fi';

const User = () => {
  const [userName, setUserName] = useState(null);
  return (
    <div className="user__container">
      <FiLogOut className="icon" />
      <p className="user__name">{userName}</p>
    </div>
  );
};

export default User;
