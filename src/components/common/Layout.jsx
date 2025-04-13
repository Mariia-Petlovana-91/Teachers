import { useState } from 'react';

import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FormRestration from '../FormRegistration/FormRegistration';
import FormLogin from '../FormLogin/FormLogin';

const Layout = () => {
  const [isOpenLogIn, setIsOpenLogIn] = useState(false);
  const [isOpenRegist, setIsOpenRegist] = useState(false);

  return (
    <div className="layout">
      <Header setIsOpenLogIn={setIsOpenLogIn} setIsOpenRegist={setIsOpenRegist} />
      <main className="page">
        {isOpenLogIn && <FormLogin setIsOpenLogIn={setIsOpenLogIn} />}
        {isOpenRegist && <FormRestration setIsOpenRegist={setIsOpenRegist} />}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
