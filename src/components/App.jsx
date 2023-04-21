import  ContactForm  from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter  from './Filter/Filter';

import { useDispatch, useSelector } from 'react-redux';
import { addNewContact, deleteContactById } from 'store/contacts/contactsSlice';
import { updateFilterValue } from 'store/filter/filterSlice';

export const App = () => {

  const {contacts} = useSelector((state)=> state.contacts);
  const {filter} = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const addContact = (newContact) =>{
    dispatch(addNewContact(newContact))
  }

    const deleteContact = (id)=>{
      dispatch(deleteContactById(id))
    }

    const filterContacts =() =>{
      const filteredContacts = contacts.filter(contact=>contact.name.toLowerCase().includes(filter.toLowerCase()));

      return filter === '' ? contacts : filteredContacts;
    }

    const updateFilter = (inputValue) =>{
      dispatch(updateFilterValue(inputValue))
    }

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p>There are no contacts in the phonebook yet.</p>
      ) : (
        <>
          <Filter filterValue={filter} updateFilter={updateFilter}/>
          <ContactList deleteContact ={deleteContact} contacts={filterContacts()}/>
        </>
      )}
    </div>
  );
};
