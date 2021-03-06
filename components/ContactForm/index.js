import React, { useState } from 'react';
import styles from './contactForm.module.css';

const formReducer = (state, event) => {
  console.log(state);
  return {
    ...state,
    [event?.name]: event?.value,
  };
};

function ContactForm(props) {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData((prev) =>
      formReducer(prev, { name: e.target.name, value: e.target.value })
    );
  };

  console.log(formData);
  return (
    <div className={styles.formWrapper}>
      <h1>Consultas</h1>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          className={styles.input}
          placeholder="nombre"
          required
        />
        <input
          onChange={handleChange}
          type="email"
          name="email"
          className={styles.input}
          placeholder="email@tuemail.com"
          required
        />
        <input
          onChange={handleChange}
          type="text"
          name="phone"
          className={styles.input}
          placeholder="teléfono"
          required
        />
        <input
          onChange={handleChange}
          type="text"
          name="dateFrom"
          className={styles.input}
          placeholder="desde"
        />
        <input
          onChange={handleChange}
          type="text"
          name="dateTo"
          className={styles.input}
          placeholder="hasta"
        />

        <textarea
          onChange={handleChange}
          className={styles.textarea}
          name="message"
          id="message"
          cols="80"
          rows="10"
          placeholder="mensaje"
        />
        <input type="submit" />
        <input type="reset" />
      </form>
      <div className={styles.message}>Message</div>
    </div>
  );
}

export default ContactForm;
