import {Box, Typography} from '@mui/material'
import style from "./styles/Footer.module.css"
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import { Link, animateScroll as scroll } from "react-scroll";
import freeDevs from '../../assets/svg/freeDevs.svg'

const Footer = () => {

    return (
        <Box className={style.contentFooter} id='footer'>
           <div className={style.contentLogo}>
            <img src={freeDevs} alt='freeDevs-svg' className={style.logo}/>
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

           <div>
            <h4 className={style.title}> 2022 © Todos los derechos reservados a FreeDevs</h4>
          </div>
        </Box>
    )
}

export default Footer;