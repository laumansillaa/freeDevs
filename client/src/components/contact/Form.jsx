import style from "./style/Form.module.css"
import {Box, Button} from '@mui/material'
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
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
        <TextField className={style.formItems} id="outlined-basic" label="Name" variant="outlined" />
        <TextField className={style.formItems} id="outlined-basic" label="Telefono" variant="outlined" />
        <TextField className={style.formItems} id="outlined-basic" label="Email" variant="outlined" />
        <TextField className={style.formItems} id="outlined-basic" label="Asunto" variant="outlined" />
        <TextField
        className={style.formItems}
          id="outlined-textarea"
          label="Mensaje"
          placeholder="Redactar"
          multiline
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
          >Enviar</Button>
    </form>
  );
}