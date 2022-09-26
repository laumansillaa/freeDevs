import style from "./style/Contact.module.css"
import {Box } from '@mui/material'
import Form from "./Form.jsx";
import FloatingActionButtons from "./BtnFlotante";
import { Link, animateScroll as scroll } from "react-scroll";
const Contact = () => {

  return(
    <>

      <Box className={style.contact} id='contact'>
       <Box className={style.contentCards}> 
        <Box className={style.card}>
          <span className={style.titleCard}>Tienes un proyecto panificado y necesita desarrollarlo?</span>
        </Box>
        <Box className={style.card}>
        <span className={style.titleCard}>Queres que tu negocio empiece a crecer?</span>
        </Box>
        <Box className={style.card}>
        <span className={style.titleCard}>Tenes una idea pero no sabes por donde empezar?</span>
        </Box>
        <Box className={style.span}>
        <span >No dudes en contactarnos y nuestro equipo se pondra en contacto con vos</span>
        </Box>
       </Box>
       <Box  className={style.contentForm}>
        <Form />
       </Box>
       <Box className={style.contHomeBtn}>
          <Link to="/" spy={true} smooth={true} offset={-100} duration={300}>
              <FloatingActionButtons/>
          </Link>
                               
       </Box>
      </Box>

    </>
  )

}

export default Contact;