import { useState } from 'react';

import { Outlet } from 'react-router-dom';
import Container from './Container';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import FormRestration from '../FormRegistration/FormRegistration';
import FormLogin from '../FormLogin/FormLogin';

const Layout = () => {
  const [isOpenLogIn, setIsOpenLogIn] = useState(false);
  const [isOpenRegist, setIsOpenRegist] = useState(false);

  return (
    <Container>
      <Header setIsOpenLogIn={setIsOpenLogIn} setIsOpenRegist={setIsOpenRegist} />
      <main>
        {isOpenLogIn && <FormLogin setIsOpenLogIn={setIsOpenLogIn} />}
        {isOpenRegist && <FormRestration setIsOpenRegist={setIsOpenRegist} />}
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
};

export default Layout;
