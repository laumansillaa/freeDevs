import {Box, Typography} from '@mui/material'
import style from "./styles/Footer.module.css"
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { Link, animateScroll as scroll } from "react-scroll";
const Footer = () => {

    return (
        <Box className={style.contentFooter} id='footer'>
           <div className={style.contentLogo}>
            <h1>Logo</h1>
           </div>
           <div className={style.contentListado}>
            <div className={style.contentUl}>
                <ul className={style.Ul}>

                 <li value="home" className={style.li}>
                     <Link to="home" spy={true} smooth={true} offset={-100} duration={200} >
                         Home
                      </Link>
                   </li>
             
                
               <li value="about" className={style.li}>
                  <Link to="about" spy={true} smooth={true} offset={-100} duration={200} >
                      Nosotros
                </Link>
              </li>
               
              <li value='servicio' className={style.li}>
                 <Link to="servicio" spy={true} smooth={true} offset={-100} duration={200} >
                   Servicios
                 </Link>
               </li>
              
                
                 <li value='contact' className={style.li}>
                    <Link to="contact" spy={true} smooth={true} offset={-100} duration={200}  >
                      Contacto
                    </Link>
                 </li>
               
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