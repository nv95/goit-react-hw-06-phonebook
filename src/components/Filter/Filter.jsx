import { FiltContainer } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'store/slice';

export default function Filter() {
  const filterValue = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const handleChange = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <FiltContainer>
      <h4>Find contacts by name</h4>
      <input type="text" value={filterValue} onChange={handleChange}></input>
    </FiltContainer>
  );
}
