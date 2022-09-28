import style from "./style/Contact.module.css"
import {Box, Typography } from '@mui/material'
import Form from "./Form.jsx";
import FloatingActionButtons from "./BtnFlotante";
import { Link, animateScroll as scroll } from "react-scroll";
const Contact = () => {

  return(
    <>

      <Box className={style.contact} id='contact'>
       <Box className={style.contentCards}> 
        <Box className={style.card}>
          <span className={style.titleCard}>¿Tenes un proyecto panificado y necesitas desarrollarlo?</span>
        </Box>
        <Box className={style.card}>
        <span className={style.titleCard}>¿Queres que tu negocio empiece a crecer?</span>
        </Box>
        <Box className={style.card}>
        <span className={style.titleCard}>¿Tenes una idea pero no sabes por donde empezar?</span>
        </Box>
        <Box className={style.span}>
        <Typography sx={{
          fontFamily: 'Bebas Neue',
          fontSize: '1.8rem'
        }} >No dudes en contactarnos y nuestro equipo se pondra en contacto con vos</Typography>
        </Box>
       </Box>
       <Box  className={style.contentForm}>
        <Form />
       </Box>
       <Box className={style.contHomeBtn}>
          <Link to="home" spy={true} smooth={true} offset={-100} duration={300}>
              <FloatingActionButtons/>
          </Link>
       </Box>
      </Box>

    </>
  )

}

export default Contact;