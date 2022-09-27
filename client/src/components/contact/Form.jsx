import {useState, useEffect} from 'react'
import emailjs from 'emailjs-com'
import style from "./style/Form.module.css"
import {Box, Button, Alert, Typography} from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton';
import TextField from '@mui/material/TextField';
import validateEmail from '../utils/utils.js'
import {useNavigate} from 'react-router-dom'
// import { makeStyles } from '@material-ui/core/styles';
// import Alert from '@material-ui/lab/Alert';

export default function BasicTextFields() {

  const navigate = useNavigate()
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
      emailjs.send('service_cgoczyk', 'template_no9mltg', form, 'wL7kzoiVP0Ea4R_TF')
      .then(function(response) {
          setOpen(true)
          setReset(true)
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
      const reload = window.location.reload()
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
      <h1 className={style.titleContact}>Nuestro contacto</h1>
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
         <LoadingButton 
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
          >Enviar</LoadingButton>
          
            {
              <>
                {modalDialog()}
              </>
            }
          
    </form>
  );
}