import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from '../redux/auth/selectors';
const PrivateRout = ({ children }) => {
  const isLogged = useSelector(selectIsLoggedIn);
  return isLogged ? children : <Navigate to="/" replace />;
};

export default PrivateRout;
