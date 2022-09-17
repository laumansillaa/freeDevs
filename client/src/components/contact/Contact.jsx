import style from "./style/Contact.module.css"
import {Box } from '@mui/material'
import Form from "./Form.jsx";
const Contact = () => {

  return(
    <>

      <Box className={style.contact}>
       <Box className={style.contentCards}> 
        <Box className={style.card}>
          <span>Tienes un proyecto panificado y necesita desarrollarlo?</span>
        </Box>
        <Box className={style.card}>
        <span>Queres que tu negocio empiece a crecer?</span>
        </Box>
        <Box className={style.card}>
        <span>Tenes una idea pero no sabes por donde empezar?</span>
        </Box>
        <Box>
        <span>No dudes en contactarnos y nuestro equipo se pondra en contacto con vos</span>
        </Box>
       </Box>
       <Box  className={style.contentForm}>
        <Form/>
       </Box>
      </Box>

    </>
  )

}

export default Contact;