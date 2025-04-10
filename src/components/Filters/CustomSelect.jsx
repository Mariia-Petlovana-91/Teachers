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
    <div className="filter">
      <div className="filter__general">
        <label className="filter__label">{label}</label>
        <div className="filter__select">
          <div className="filter__wrapper" onClick={() => setIsOpen(!isOpen)}>
            <div>{selectedOption || 'Add choose'}</div>
            <button type="button" className="filter__icon">
              {isOpen ? <FaChevronUp /> : <FaChevronDown />}
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
    </div>
  );
};

export default CustomSelect;
