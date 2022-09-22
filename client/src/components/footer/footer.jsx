import {Box, Typography} from '@mui/material'
import style from "./styles/Footer.module.css"
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
const Footer = () => {

    return (
        <Box className={style.contentFooter}>
           <div className={style.contentLogo}>
            <h1>Logo</h1>
           </div>
           <div className={style.contentListado}>
            <div className={style.contentUl}>
                <ul className={style.Ul}>
                     <li className={style.li}>Home</li>
                     <li className={style.li}>Nosotros</li>
                      <li className={style.li}>Servicios</li>
                       <li className={style.li}>Proyectos</li>
                       <li className={style.li}>Contacto</li>
            </ul>
            </div>
            <h4 className={style.title}> 2022 © Todos los derechos reservados a FreeDevs</h4>
           </div>
           <div className={style.contentIConsEmail}>
              <div className={style.contentICons}>
                <FaInstagram className={style.icon}/>
                <FaLinkedin className={style.icon}/>
                <FaEnvelope className={style.icon}/>
                <FaWhatsapp className={style.icon}/>
              </div>
           <div>
             <h4 className={style.title}>Suport FreeDevs@gmail.com</h4>
           </div>
           
           </div>
        </Box>
    )
}

export default Footer;