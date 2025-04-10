import { useDispatch } from 'react-redux'; // Імпортуємо useDispatch
import {
  setSelectedLanguage,
  setSelectedLevel,
  setSelectedPrice,
} from '../../redux/filters/slice';
import CustomSelect from './CustomSelect';

const Filters = ({ array }) => {
  const dispatch = useDispatch(); // Використовуємо dispatch для виклику екшенів Redux

  const handleLanguageSelect = (option) => {
    console.log('Language selected:', option); // Перевірка в консолі
    dispatch(setSelectedLanguage(option)); // Dispatch для оновлення стану Redux
  };

  const handleLevelSelect = (option) => {
    console.log('Level selected:', option); // Перевірка в консолі
    dispatch(setSelectedLevel(option)); // Dispatch для оновлення стану Redux
  };

  const handlePriceSelect = (option) => {
    console.log('Price selected:', option); // Перевірка в консолі
    dispatch(setSelectedPrice(option)); // Dispatch для оновлення стану Redux
  };

  return (
    <div className="filter">
      <CustomSelect
        options={array.languages}
        label={'Languages'}
        onSelect={handleLanguageSelect} // Передаємо функцію обробки для вибору мови
      />
      <CustomSelect
        options={array.levels}
        label={'Level of knowledge'}
        onSelect={handleLevelSelect} // Передаємо функцію обробки для вибору рівня
      />
      <CustomSelect
        options={array.prices}
        label={'Price'}
        onSelect={handlePriceSelect} // Передаємо функцію обробки для вибору ціни
        isPrice={true}
      />
    </div>
  );
};

export default Filters;
