import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { setupListeners } from '@reduxjs/toolkit/query';
import {contactsApi} from './contacts/contactsApi';
import {filterSlice} from './filterSlice';

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(contactsApi.middleware)
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware
  ]
})

// setupListeners(store.dispatch);
