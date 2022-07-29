import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://62da7933e56f6d82a7628abf.mockapi.io/contacts/",
  }),
  endpoints: (build) => ({
    fetchContacts: build.query({
      query: () => `contacts`,
    }),
    deleteContact: build.mutation({
      query(contactId) {
        return {
          url: `/contacts/${contactId}`,
          method: "DELETE",
        };
      },
    }),
    addContact: build.mutation({
      query(newContact) {
        return { url: "/contacts", method: "POST", body: newContact };
      },
    }),
  }),
});

export const { useFetchContactsQuery, useDeleteContactMutation, useAddContactMutation } = contactsApi;

