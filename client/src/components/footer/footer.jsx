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
                <a href='https://www.instagram.com/free_devs/' target='_blank'>
                  <FaInstagram className={style.icon}/>
                </a>
                <a href='https://www.linkedin.com/in/freedevs/' target='_blank'>
                  <FaLinkedin className={style.icon}/>
                </a>
                <a href='mailto:freedevs.tech@gmail.com' target='_blank'>
                  <FaEnvelope className={style.icon}/>
                </a>
                <a href='https://wa.me/5491141668947' target='_blank'>
                  <FaWhatsapp className={style.icon}/>
                </a>
              </div>
              <div>
                <h4 className={style.title}>FreeDevs.tech@gmail.com</h4>
              </div>
           </div>
           <div>
            <h4 className={style.title}> 2022 © Todos los derechos reservados a FreeDevs</h4>
          </div>
        </Box>
    )
}

export default Footer;