import React from "react";
import { useState, useEffect } from "react";
import './form.scss'

const initialValues = { fullname: "", phonenumber: "" };

const Form = ({ setContacts, contacts }) => {
  const [form, setForm] = useState({ initialValues });

  useEffect(() => {
    setForm(initialValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phonenumber === "") {
      return false;
    }

    setContacts([...contacts, form]);
  };

  return (
    <form id = "container" onSubmit={onSubmit}>
      <div className="name">
        <input
          name="fullname"
          placeholder="Fullname"
          onChange={onChangeInput}
          value={form.fullname}
        />
      </div>
      <div className="phone">
        <input
          name="phonenumber"
          placeholder="Phonenumber"
          onChange={onChangeInput}
          value={form.phonenumber}
        />
      </div>
      <button>Add</button>
    </form>
  );
};

export default Form;
