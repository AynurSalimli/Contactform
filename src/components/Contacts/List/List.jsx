import React, { useState } from "react";
import './list.scss'
const List = ({ contacts }) => {
  const [filter, setFilter] = useState("");

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => 
      item[key]
      .toString()
      .toLowerCase()
      .includes(filter.toLowerCase())
    );
  });
  return (
    <div className="listed">
      <input
        placeholder="Filter the contacts"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <ul className="list">
        {filtered.map((contact, index) => (
          <li key={index}>
            <span>{contact.fullname}</span>
            <span>{contact.phonenumber}</span>
          </li>
        ))}
      </ul>
      <p>Total contacts({filtered.length})</p>
    </div>
  );
};

export default List;
