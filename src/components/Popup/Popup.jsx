import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { RiCloseFill } from 'react-icons/ri';

import { closePopup } from '../../redux/popup/slice.js';
import { selectModalType, selectOpen } from '../../redux/popup/selectors.js';

import FormLogin from '../FormLogin/FormLogin';
import FormRegistration from '../FormRegistration/FormRegistration';
import FormBook from '../FormBook/FormBook.jsx';

const Popup = () => {
  const isOpen = useSelector(selectOpen);
  const modalType = useSelector(selectModalType);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }

    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, [isOpen]);

  const renderModalContent = () => {
    switch (modalType) {
      case 'login':
        return <FormLogin />;
      case 'register':
        return <FormRegistration />;
      case 'book':
        return <FormBook />;
      default:
        return null;
    }
  };

  const onPopupClick = (e) => {
    if (e.target.classList.contains('popup')) {
      if (modalType === 'book') {
        localStorage.removeItem('teacher');
      }
      dispatch(closePopup());
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup" onClick={onPopupClick}>
      <div className="popup__modal" onClick={(e) => e.stopPropagation()}>
        <button
          aria-label="Close popup"
          className="popup__btn--icon"
          type="button"
          onClick={() => dispatch(closePopup())}
        >
          <RiCloseFill className="icon__form" />
        </button>
        {renderModalContent()}
      </div>
    </div>
  );
};

export default Popup;
