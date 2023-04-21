import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './initialState';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addNewContact: (state, action) => ({
      ...state,
      contacts: [...state.contacts, action.payload],
    }),
    deleteContactById: (state, action) => ({
      ...state,
      contacts: [
        ...state.contacts.filter(contact => contact.id !== action.payload),
      ],
    }),
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { addNewContact, deleteContactById } = contactsSlice.actions;