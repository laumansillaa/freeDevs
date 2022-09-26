import {Box, Typography} from '@mui/material'
import { Link, animateScroll as scroll } from "react-scroll";
import freeDev from '../../assets/svg/freeDevs.svg'
import style from './styles/index.module.css'
import menu from '../../assets/svg/menu.svg'
import lampara from '../../assets/lampara.png'


const Nav = () => {

    const clickChecked = (e) => {
        // e.preventDefault()
        const gsm = document.getElementById('menu').click()
    }


    return (
        <Box className={style.contNav} >
            <Box className={style.navContainer}>
                <Box className={style.contImgNav}>
                    <Link to="home" spy={true} smooth={true} offset={-100} duration={200}><img src={freeDev} alt='freeDev-svg' className={style.logo}/></Link>
                </Box>
                <label for='menu' className={style.navLabel}>
                    <img src={menu} alt='menu-svg' className={style.navSvg} />
                </label>
                <input type='checkbox' id='menu' className={style.navInput}></input>
                <Box className={style.contItemsNav}>
                    <Link to="about" spy={true} smooth={true} offset={-100} duration={200} className={style.navItem} onClick={clickChecked }>Nosotros</Link>
                    <Link to="servicio" spy={true} smooth={true} offset={-100} duration={200} className={style.navItem} onClick={clickChecked}>Servicios</Link>
                    {/* <a href='/a' className={style.navItem} onClick={clickChecked}>Proyectos</a> */}
                    <Link to="contact" spy={true} smooth={true} offset={-100} duration={200} className={style.navItem} onClick={clickChecked}>Contacto</Link>
                </Box>
                <Box className={style.contLampara}>
                    <img src={lampara} alt='light-png' className={style.lampara}/>
                </Box>
            </Box>
            
        </Box>
    )
}

export default Nav;