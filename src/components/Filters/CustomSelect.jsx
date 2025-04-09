import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

const CustomSelect = ({ options, label, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSelect = (option) => {
    dispatch(onSelect(option));
    setIsOpen(false);
  };

  return (
    <div className="filter">
      <div className="filter__general">
        <label className="filter__label">{label}</label>
        <div className="filter__select">
          <div className="filter__wrapper" onClick={() => setIsOpen(!isOpen)}>
            <div className="filter__option">{label}</div>
            <span className="filter__icon">
              {isOpen ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </div>
          {isOpen && (
            <div className="filter__dropdown">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="filter__dropdown-item"
                  onClick={() => handleSelect(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;
