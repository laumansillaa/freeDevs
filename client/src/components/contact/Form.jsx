import {useState, useEffect} from 'react'
import emailjs from 'emailjs-com'
import style from "./style/Form.module.css"
import {Box, Button, Alert, Typography} from '@mui/material'
import TextField from '@mui/material/TextField';
import validateEmail from '../utils/utils.js'
import { FaTelegramPlane } from "react-icons/fa";
const {VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY} = import.meta.env;
// console.log('ProcessEnv', typeof(VITE_PUBLIC_KEY))
console.log('DotENV', VITE_SERVICE_ID, VITE_TEMPLATE_ID, VITE_PUBLIC_KEY )

export default function BasicTextFields() {

  const [open, setOpen] = useState(null)
  const [errorModal, setErrorModal] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    asunto: '',
    text: '' 
  })

  useEffect(() => {
    validateEmail(form.email)? setEmailError(false) : setEmailError(true)
  }, [form.email])

  useEffect(() => {
    closeError()
  }, [open])


  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }

  const sendEmail = (e) => {
    e.preventDefault()
    if (form.name && form.phone && form.email && form.asunto && form.text){
      emailjs.send(VITE_SERVICE_ID, VITE_TEMPLATE_ID, form, '9xS4fuSET0CG1EMpx')
      .then(function(response) {
          setOpen(true)
          // setReset(true)
          // console.log(response)
          console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
          setErrorModal(true)
          console.log('FAILED...', error);
      });
    } else {
      alert("completar todos los campos")
    }
  }

  const modalDialog = () => {
    if (open) {
      return (
        <Alert severity={errorModal? 'error' : 'success'}
          sx={{
            fontFamily: 'Poppins',
            fontSize: '.9rem',
            mt: '1rem',
          }}
        >
          {
            errorModal? 'No pudimos enviar el mensaje. Por favor intentelo nuevamente' :
            'Enviado! Nuestro equipo se pondra en contacto con usted'
          }
        </Alert>
      )
    } 
  }

  const closeError = () => {
    if (open) {
      setTimeout(setOpen, 4000, null)
      // const reload = window.location.reload()
    } 
  }


  return (
    <form 
      className={style.form}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
     >
      <h1 className={style.titleContact}> <FaTelegramPlane/> Nuestro contacto</h1>
        <TextField className={style.formItems} name='name' id="outlined-basic" label="Name" variant="outlined" onChange={(e) => handleChange(e)} />
        <TextField className={style.formItems} name='phone' id="outlined-basic" label="Telefono" variant="outlined" onChange={(e) => handleChange(e)} />
        <TextField className={style.formItems} name='email' id="outlined-basic" label="Email" variant="outlined" onChange={(e) => handleChange(e)} />
        {emailError ? 
            <Typography sx={{
              fontFamily: 'Poppins',
              fontSize: '.8rem',
              color: 'red'
            }}>
              Ingrese un email valido
            </Typography> : <></>
        }
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
            disabled={!form.name || !form.phone || !form.email || !form.asunto || !form.text}
            onClick={(e) => sendEmail(e)}
            className={style.btn}
            variant='contained'
            sx={{
              background: '#154AB1',
              fontFamily: 'Bebas Neue',
              letterSpacing: '.2rem',
              fontSize: '1.2rem'
          }}
          >Enviar</Button>
          
            {
              <>
                {modalDialog()}
              </>
            }
          
    </form>
  );
}