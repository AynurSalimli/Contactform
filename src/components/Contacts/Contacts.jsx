import React, { useEffect, useState } from "react";
import List from "./List/List";
import Form from "./Form/Form";
import './contacts.scss'

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      fullname: "Aynur",
      phonenumber: 342387,
    },
    {
      fullname: "Zuleykha",
      phonenumber: 27823,
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div className="contacts">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form setContacts={setContacts} contacts={contacts} />
    </div>
  );
};

export default Contacts;
