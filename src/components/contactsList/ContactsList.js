import MyButton from "components/UI/button/MyButton";
import React from "react";
import s from "./ContactsList.module.css";
import { useFetchContactsQuery, useDeleteContactMutation } from "../../redux";
import { useSelector } from "react-redux";

const ContactsList = () => {
  const { data = [], isLoading } = useFetchContactsQuery();

  const [deleteContact] = useDeleteContactMutation();

  const filters = useSelector((state) => state.filter.filter);

  const filteredContacts = () => {
    const normalizedFilters = filters.toLowerCase();
    return (
      data &&
      data.filter((contact) =>
        contact.name.toLowerCase().includes(normalizedFilters)
      )
    );
  };

  const contacts = filteredContacts();

  return (
    <>
      {isLoading && (
        <h1 style={{ textAlign: "center" }}>Load contacts......</h1>
      )}
      <table className={s.table}>
        <thead className={s.thead}>
          <tr>
            <th>n</th>
            <th>Contact</th>
            <th>Number</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            contacts.map(({ id, name, phone }, index) => (
              <tr key={id}>
                <td style={{ textAlign: "center" }}>{index + 1}</td>
                <td style={{ textAlign: "center" }}>{name}</td>
                <td style={{ textAlign: "center" }}>{phone}</td>
                <td style={{ textAlign: "center" }}>
                  <MyButton onClick={() => deleteContact(id)}>Delete contact</MyButton>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ContactsList;
