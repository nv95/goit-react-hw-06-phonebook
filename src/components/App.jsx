import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedStorage = localStorage.getItem('contacts');
    return savedStorage
      ? JSON.parse(savedStorage)
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    const savedStorage = localStorage.getItem('contacts');
    if (savedStorage) {
      setContacts(JSON.parse(savedStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    repeatControl(data);
  };

  const repeatControl = data => {
    const nameArray = contacts.map(cur => cur.name);
    if (!nameArray.includes(data.name)) {
      const arrayCont = [
        ...contacts,
        { id: nanoid(), name: data.name, number: data.number },
      ];
      setContacts(arrayCont);
    } else {
      alert(`${data.name} is alredy in contacts!`);
    }
  };

  const elementDelete = (arr, idContact) => {
    let newArr = arr.filter(elem => elem.id !== idContact);
    return newArr;
  };

  const deleteContactFromContactList = idContact => {
    setContacts(prevCotacts => elementDelete(prevCotacts, idContact));
  };

  const setFilterToState = filterData => {
    setFilter(filterData);
  };

  const filterArr = fArr => {
    let newArr = fArr.filter(cur =>
      cur.name.toUpperCase().includes(filter.toUpperCase())
    );
    return newArr;
  };

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <ContactForm onSubmitData={formSubmitHandler} />
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p>There are no contacts in the phonebook yet.</p>
      ) : (
        <>
          <Filter setFilterToState={setFilterToState} />
          <ContactList
            contacts={filterArr(contacts)}
            del={deleteContactFromContactList}
          />
        </>
      )}
    </div>
  );
};
