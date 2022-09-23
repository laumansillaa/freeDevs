import {useState} from 'react'
import emailjs from 'emailjs-com'
import style from "./style/Form.module.css"
import {Box, Button} from '@mui/material'
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

export default function BasicTextFields() {

  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    asunto: '',
    text: '' 
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.send('service_cgoczyk', 'template_no9mltg', form, 'wL7kzoiVP0Ea4R_TF')
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
   }, function(error) {
      console.log('FAILED...', error);
   });
    e.target.reset()
  }

  const classes = useStyles();

  return (
    <form 
    className={style.form}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={sendEmail}
    >
      <h1 className={style.titleContact}>Nuestro contacto</h1>
        <TextField className={style.formItems} name='name' id="outlined-basic" label="Name" variant="outlined" onChange={(e) => handleChange(e)} />
        <TextField className={style.formItems} name='phone' id="outlined-basic" label="Telefono" variant="outlined" onChange={(e) => handleChange(e)} />
        <TextField className={style.formItems} name='email' id="outlined-basic" label="Email" variant="outlined" onChange={(e) => handleChange(e)} />
        <TextField className={style.formItems} name='asunto' id="outlined-basic" label="Asunto" variant="outlined" onChange={(e) => handleChange(e)}/>
        <TextField
        className={style.formItems}
          id="outlined-textarea"
          label="Mensaje"
          placeholder="Redactar"
          multiline 
          minRows={4}
          name='text'
          onChange={(e) => handleChange(e)}
        />
         <Button 
            className={style.btn}
              variant='contained'
                 sx={{
                   background: '#154AB1',
                   fontFamily: 'Bebas Neue',
                   letterSpacing: '.2rem',
                   fontSize: '1.2rem'
                }}
            type='submit'
          >Enviar</Button>
       <div className={classes.root}>
           <Alert variant="filled" severity="success">
            This is a success alert — check it out!
      </Alert>
    </div>
    </form>
  );
}