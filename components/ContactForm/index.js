import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Button from '@mui/material/Button'


import CardWithRotation from '@/components/CardWithRotation';
import styles from './contactForm.module.scss';

const formReducer = (state, event) => {
  console.log(state);
  return {
    ...state,
    [event?.name]: event?.value,
  };
};

const WithLabel = ({ children, label, forValue }) => {

  return (<>
    <label className={styles.label} for={forValue} >{label}</label>
    {children}
  </>)
}

function ContactForm(props) {
  const [formData, setFormData] = useState({});

  const spring = useSpring((
    {
      opacity: 1,
      transform: "translateX(0px)",
      from: {
        opacity: 0,
        transform: "translateX(300px)",
      },
      delay: 500
    }
  ))

  const handleChange = (e) => {
    setFormData((prev) =>
      formReducer(prev, { name: e.target.name, value: e.target.value })
    );
  };

  return (
    <animated.div className={styles.content} style={spring}>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <WithLabel label='Nombre' forValue="name">
          <input
            onChange={handleChange}
            type="text"
            name="name"
            className={styles.input}
            required
          />
        </WithLabel>
        <WithLabel label='Email' forValue="email">
          <input
            onChange={handleChange}
            type="email"
            name="email"
            className={styles.input}
            required
          />
        </WithLabel>
        <WithLabel label='Teléfono' forValue="phone">
          <input
            onChange={handleChange}
            type="phone"
            name="phone"
            className={styles.input}
            required
          />
        </WithLabel>
        <div className={styles.datePickersWrapper}>
          <div>
            <WithLabel label='Desde' forValue="dateFrom">
              <input
                onChange={handleChange}
                type="date"
                name="dateFrom"
                className={styles.input}
              />
            </WithLabel>
          </div>
          <div>
            <WithLabel label='Hasta' forValue="dateTo">
              <input
                onChange={handleChange}
                type="date"
                name="dateTo"
                className={styles.input}
              />
            </WithLabel>
          </div>
        </div>
        <WithLabel label='Mensaje' forValue="message">
          <textarea
            onChange={handleChange}
            className={styles.textarea}
            name="message"
            id="message"
            cols="80"
            rows="10"
          />
        </WithLabel>
        <Button type="submit" variant='contained' >Enviar</Button>
        <Button type="reset" variant='outlined' >Borrar</Button>
      </form>
    </animated.div>
  );
}

export default ContactForm;
