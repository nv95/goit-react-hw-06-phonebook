import { useState } from 'react';
import { FormContainer, Label, Button } from './ContactForm.styled';
import PropTypes from 'prop-types';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmitData }) => {
  const [state, setState] = useState(INITIAL_STATE);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    setState(prevState => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    let contactForAdd = { name: state.name, number: state.number };
    onSubmitData(contactForAdd);

    resetForm();
  };

  const resetForm = () => setState(INITIAL_STATE);

  return (
    <FormContainer>
      <form type="submit" onSubmit={handleSubmit}>
        <Label>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
            value={state.name}
          />
        </Label>
        <Label>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
            value={state.number}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </form>
    </FormContainer>
  );
};

ContactForm.propTypes = {
  onSubmitData: PropTypes.func.isRequired,
};
