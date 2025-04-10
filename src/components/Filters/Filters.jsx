import { useDispatch } from 'react-redux';
import {
  setSelectedLanguage,
  setSelectedLevel,
  setSelectedPrice,
} from '../../redux/filters/slice';
import CustomSelect from './CustomSelect';

const Filters = ({ array }) => {
  const dispatch = useDispatch();

  const handleLanguageSelect = (option) => {
    dispatch(setSelectedLanguage(option));
  };

  const handleLevelSelect = (option) => {
    dispatch(setSelectedLevel(option));
  };

  const handlePriceSelect = (option) => {
    dispatch(setSelectedPrice(option));
  };

  return (
    <div className="filter">
      <CustomSelect
        options={array.languages}
        label={'Languages'}
        onSelect={handleLanguageSelect}
      />
      <CustomSelect
        options={array.levels}
        label={'Level of knowledge'}
        onSelect={handleLevelSelect}
      />
      <CustomSelect
        options={array.prices}
        label={'Price'}
        onSelect={handlePriceSelect}
        isPrice={true}
      />
    </div>
  );
};

export default Filters;
