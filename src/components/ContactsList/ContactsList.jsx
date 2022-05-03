import React from 'react';
// import styles from "./ContactsList.module.css";

const ContactsList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ name, number }) => (
        <li>
          <p>
            {name}: {number}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;
