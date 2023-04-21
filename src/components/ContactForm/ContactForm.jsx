import { useState } from 'react';
import { nanoid } from 'nanoid';
import { FormContainer, Label, Button } from './ContactForm.styled';
import PropTypes from 'prop-types';


export default function ContactForm ({addContact, contacts}) {
  const [name, setName] = useState(''); 
  const [number, setNumber] = useState('');


  const handleChange = ({ target }) => {
    switch (target.name) {
      case 'name':
        setName(target.value);
        break;
      case 'number':
        setNumber(target.value);
        break;
      default:
        break;
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    };

    addContact({name, number, id: nanoid() });
    resetForm();
  }

  const resetForm = () => {
    setName('');
    setNumber('');
  };

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
            value={name}
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
            value={number}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </form>
    </FormContainer>
  );
};

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
     number: PropTypes.string.isRequired,
  })),
  addContact: PropTypes.func.isRequired,
};