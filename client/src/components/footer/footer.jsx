import {Box, Typography} from '@mui/material'
import style from "./styles/Footer.module.css"
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
const Footer = () => {

    return (
        <Box className={style.contentFooter}>
           <div>
            <h1>Logo</h1>
           </div>
           <div >
            <div className={style.contentICons}>
                <ul>
                     <li>Home</li>
                     <li>Nosotros</li>
                      <li>Servicios</li>
                       <li>Proyectos</li>
                       <li>Contacto</li>
            </ul>
            </div>
           
            <h4> 2022 © Todos los derechos reservados a FreeDevs</h4>
           </div>
           <div>
            <div>
                <FaInstagram/>
                <FaLinkedin/>
                <FaEnvelope/>
                <FaWhatsapp/>
            </div>
           <div>
             <h4>Suport FreeDevs@gmail.com</h4>
           </div>
           
           </div>
        </Box>
    )
}

export default Footer;