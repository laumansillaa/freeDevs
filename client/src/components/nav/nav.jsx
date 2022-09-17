import {Box, Typography} from '@mui/material'
import freeDev from '../../assets/svg/freeDevs.svg'
import style from './styles/index.module.css'
import menu from '../../assets/svg/menu.svg'
import lampara from '../../assets/lampara.png'


const Nav = () => {


    return (
        <Box className={style.contNav} >
            <Box className={style.navContainer}>
                <Box className={style.contImgNav}>
                    <img src={freeDev} alt='freeDev-svg' className={style.logo}/>
                </Box>
                <label for='menu' className={style.navLabel}>
                    <img src={menu} alt='menu-svg' className={style.navSvg} />
                </label>
                <input type='checkbox' id='menu' className={style.navInput}></input>
                <Box className={style.contItemsNav}>
                    <a href='/a' className={style.navItem}>Nosotros</a>
                    <a href='/a' className={style.navItem}>Servicios</a>
                    <a href='/a' className={style.navItem}>Proyectos</a>
                    <a href='/a' className={style.navItem}>Contacto</a>
                </Box>
                <Box className={style.contLampara}>
                    <img src={lampara} alt='light-png' className={style.lampara}/>
                </Box>
            </Box>
        </Box>
    )
}

export default Nav;