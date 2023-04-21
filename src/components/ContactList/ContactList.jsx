import { useDispatch, useSelector } from 'react-redux';
import { Button, Li } from './ContactList.styled';
import { removeContact } from 'store/slice';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const normalizedName = filter.toLowerCase();
  const contactsAll = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedName)
  );

  return contactsAll.map(contact => {
    return (
      <Li key={contact.id} id={contact.id}>
        {contact.name}: {contact.number}
        <Button
          data-id={contact.id}
          onClick={() => dispatch(removeContact(contact.id))}
        >
          Delete
        </Button>
      </Li>
    );
  });
}
