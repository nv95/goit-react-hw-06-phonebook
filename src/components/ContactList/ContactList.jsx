import PropTypes from 'prop-types';
import { Button, Li } from './ContactList.styled';
import { nanoid } from 'nanoid';

export const ContactList = ({ contacts, del }) => {
  const deletedId = id => {
    del(id);
  };

  const createList = () => {
    return contacts.map(contact => {
      return (
        <Li key={nanoid()} id={contact.id}>
          {contact.name}: {contact.number}
          <Button data-id={contact.id} onClick={() => deletedId(contact.id)}>
            Delete
          </Button>
        </Li>
      );
    });
  };
  return <ul>{createList()}</ul>;
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  del: PropTypes.func.isRequired,
};
