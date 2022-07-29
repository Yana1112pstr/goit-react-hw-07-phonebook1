import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://62da7933e56f6d82a7628abf.mockapi.io/contacts/",
  }),
  tagTypes: ['Contact'],
  endpoints: (build) => ({
    fetchContacts: build.query({
      query: () => `contacts`,
      providesTags: ['Contact'],
    }),
    deleteContact: build.mutation({
      query: (contactId) => ({
          url: `/contacts/${contactId}`,
          method: "DELETE",
      }),
      invalidatesTags: ['Contact']
    }),
    addContact: build.mutation({
      query: (newContact) => ({
         url: "/contacts", method: "POST", body: newContact 
      }),
      invalidatesTags: ['Contact']
    }),
  }),
});

export const { useFetchContactsQuery, useDeleteContactMutation, useAddContactMutation } = contactsApi;

