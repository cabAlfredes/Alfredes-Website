import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Button from '@mui/material/Button'
import styles from './contactForm.module.scss';
import { Box } from '@mui/system';
import { TextField, TextareaAutosize, Stack, Paper } from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';


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

const ContactForm = (props) => {
  const [formData, setFormData] = useState({});
  const [value, setValue] = useState([null, null]);

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
    <animated.div style={spring}>
      <Paper
        elevation={5}
        sx={{
          padding: 5
        }}
      >
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack spacing={2}>
            <TextField
              variant='outlined'
              name='name'
              label='Nombre'
              defaultValue=''
              onChange={handleChange}
              type='text'
              required
            />
            <TextField
              variant='outlined'
              name='email'
              label='Email'
              defaultValue=''
              onChange={handleChange}
              type='email'
              required
            />
            <TextField
              variant='outlined'
              name='phone'
              label='Telefono'
              defaultValue=''
              onChange={handleChange}
              type='phone'
              required
            />

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <TextField
                variant='outlined'
                name='dateFrom'
                // label='Desde'
                defaultValue=''
                onChange={handleChange}
                type='date'
                required
              />
              <TextField
                variant='outlined'
                name='dateTo'
                // label='Hasta'
                defaultValue=''
                onChange={handleChange}
                type='date'
                required
              />
            </Box>


            <TextField
              multiline
              aria-label="empty textarea"
              placeholder="Consulta"
              style={{ width: '100%' }}
            />

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Button type='reset' variant='outlined' color='secondary'>Borrar</Button>
              <Button variant='contained' color='primary'>Enviar</Button>
            </Box>
          </Stack>
        </form>
      </Paper>
    </animated.div>
  );
}

export default ContactForm;
