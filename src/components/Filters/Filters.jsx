import {
  setSelectedLenguage,
  setSelectedLevel,
  setSelectedPrice,
} from '../../redux/filters/slice';

import CustomSelect from './CustomSelect';

const Filters = ({ array }) => {
  console.log('Filters component received:', array);
  return (
    <div className="filter">
      <CustomSelect
        options={array.languages}
        label={'Languages'}
        onSelect={setSelectedLenguage}
      />
      <CustomSelect
        options={array.levels}
        label={'Level of knowledge'}
        onSelect={setSelectedLevel}
      />
      <CustomSelect options={array.prices} label={'Price'} onSelect={setSelectedPrice} />
    </div>
  );
};

export default Filters;
