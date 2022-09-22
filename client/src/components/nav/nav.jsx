import {Box, Typography} from '@mui/material'
import { Link } from 'react-router-dom'
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
                    <a href='#inicio'><img src={freeDev} alt='freeDev-svg' className={style.logo}/></a>
                </Box>
                <label for='menu' className={style.navLabel}>
                    <img src={menu} alt='menu-svg' className={style.navSvg} />
                </label>
                <input type='checkbox' id='menu' className={style.navInput}></input>
                <Box className={style.contItemsNav}>
                    <a href='#about' className={style.navItem} onClick={clickChecked }>Nosotros</a>
                    <a href='#service' className={style.navItem} onClick={clickChecked}>Servicios</a>
                    {/* <a href='/a' className={style.navItem} onClick={clickChecked}>Proyectos</a> */}
                    <a href='#contact' className={style.navItem} onClick={clickChecked}>Contacto</a>
                </Box>
                <Box className={style.contLampara}>
                    <img src={lampara} alt='light-png' className={style.lampara}/>
                </Box>
            </Box>
        </Box>
    )
}

export default Nav;