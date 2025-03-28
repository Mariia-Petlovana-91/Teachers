import { Outlet } from 'react-router-dom';
import Container from './Container';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = () => {
  return (
    <Container>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </Container>
  );
};

export default Layout;
