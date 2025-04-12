import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const CustomSelect = ({ options, label, onSelect, isPrice = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const formatOption = (option) => (isPrice ? `$${option}` : option);

  const handleSelect = (option) => {
    setSelectedOption(formatOption(option));
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <>
      <div className="filter__general">
        <label className="filter__label">{label}</label>
        <div className="filter__select">
          <div className="filter__wrapper" onClick={() => setIsOpen(!isOpen)}>
            <p className="filter__text">{selectedOption || 'Choose'}</p>
            <button type="button" className="filter__btn" aria-label="Toggle dropdoun">
              {isOpen ? (
                <FaChevronUp className="icon__filter" />
              ) : (
                <FaChevronDown className="icon__filter" />
              )}
            </button>
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
    </>
  );
};

export default CustomSelect;
