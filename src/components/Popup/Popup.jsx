import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RiCloseFill } from 'react-icons/ri';

import { closePopup } from '../../redux/popup/slice.js';
import { selectModalType, selectOpen } from '../../redux/popup/selectors.js';

import FormLogin from '../FormLogin/FormLogin';
import FormRegistration from '../FormRegistration/FormRegistration';

const Popup = () => {
  const isOpen = useSelector(selectOpen);
  const modalType = useSelector(selectModalType);
  const dispatch = useDispatch();

  const renderModalContent = () => {
    switch (modalType) {
      case 'login':
        return <FormLogin />;
      case 'register':
        return <FormRegistration />;
      default:
        return null;
    }
  };

  const onPopupClick = (e) => {
    if (e.target.classList.contains('popup')) {
      dispatch(closePopup());
    }
  };

  if (!isOpen) return null; // Додаємо перевірку, щоб не рендерити, якщо модалка закрита

  return (
    <div className="popup" onClick={onPopupClick}>
      <div className="popup__modal" onClick={(e) => e.stopPropagation()}>
        <button
          className="form__btn--icon"
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
