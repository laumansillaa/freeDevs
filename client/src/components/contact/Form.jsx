import {useState, useEffect} from 'react'
import emailjs from 'emailjs-com'
import style from "./style/Form.module.css"
import {Box, Button, Dialog, DialogTitle, DialogContent} from '@mui/material'
import TextField from '@mui/material/TextField';
import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import { makeStyles } from '@material-ui/core/styles';
// import Alert from '@material-ui/lab/Alert';

export default function BasicTextFields() {

  const [open, setOpen] = useState(null)
  const [errorModal, setErrorModal] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    asunto: '',
    text: '' 
  })

  const handleClose = () => {
      setOpen(false)
  }

  // const useStyles = makeStyles((theme) => ({
  //   root: {
  //     width: '100%',
  //     '& > * + *': {
  //       marginTop: theme.spacing(2),
  //     },
  //   },
  // }));

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name] : e.target.value
    })
  }
//  function DisableAfterClick() {
//     const [disable, setDisable] = useState(false);
//  }

  const sendEmail = (e) => {
    e.preventDefault()
    if (form.name && form.phone && form.email && form.asunto && form.text){
      emailjs.send('service_cgoczyk', 'template_no9mltg', form, 'wL7kzoiVP0Ea4R_TF')
      .then(function(response) {
          setOpen(true)
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
        <Dialog disableEscapeKeyDown open={open} onClose={handleClose} >
          <Box className={style.dialogCont}>
            <DialogTitle 
              className='dialog-title'>{errorModal? 
                'Ocurrio un error, intente nuevamente.' : 
                'Mensaje enviado con exito' }
                </DialogTitle>
                {
                  errorModal? 
                  <ErrorIcon/> :
                  <CheckCircleIcon/>
                }
          </Box>
            <DialogContent className={style.dialogContButton}>
                <Box className='dialog-bottons'>
                    <Button color={errorModal? 
                    'error': 
                    'success'} 
                    variant='contained' 
                    sx={{ml:1 }}
                      onClick={handleClose}
                    >
                        CERRAR
                    </Button>
                </Box>
           </DialogContent>
        </Dialog>
      )
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
    //    onSubmit={sendEmail}
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
            type='submit'
          >Enviar</Button>
          
            {
              <>
                {modalDialog()}
              </>
            }
          
    </form>
  );
}