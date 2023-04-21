import PropTypes from 'prop-types';
import { FiltContainer } from './Filter.styled';

export default function Filter ({filterValue, updateFilter})  {

  const handleChange = ({target}) =>{
    updateFilter(target.value);
  }
  
  return (
    <FiltContainer>
      <h4>Find contacts by name</h4>
      <input type="text" value={filterValue} onChange={handleChange}></input>
    </FiltContainer>
  );
};
Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  updateFilter: PropTypes.func.isRequired,
};