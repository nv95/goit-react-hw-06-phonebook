import { useState } from 'react';
import PropTypes from 'prop-types';
import { FiltContainer } from './Filter.styled';

export const Filter = ({ setFilterToState }) => {
  const [filterValue, setFilterValue] = useState('');

  const handleChange = e => {
    const value = e.target.value.toUpperCase();
    setFilterValue(value);
    setFilterToState(value);
  };
  return (
    <FiltContainer>
      <h4>Find contacts by name</h4>
      <input type="text" value={filterValue} onChange={handleChange}></input>
    </FiltContainer>
  );
};
Filter.propTypes = {
  setFilterToState: PropTypes.func.isRequired,
};
