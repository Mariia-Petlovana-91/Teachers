import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store.js';

import 'modern-normalize';
import '../src/styles/main.scss';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);

// import { FaChevronDown } from 'react-icons/fa6';
// import { FaChevronUp } from 'react-icons/fa6';
// import { FaRegHeart } from 'react-icons/fa';
// import { FaStar } from 'react-icons/fa';
// import { FiBookOpen } from 'react-icons/fi';

// import { PiDotsThreeOutlineVerticalFill } from 'react-icons/pi';
