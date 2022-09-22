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
                    <img src={freeDev} alt='freeDev-svg' className={style.logo}/>
                </Box>
                <label for='menu' className={style.navLabel}>
                    <img src={menu} alt='menu-svg' className={style.navSvg} />
                </label>
                <input type='checkbox' id='menu' className={style.navInput}></input>
                <Box className={style.contItemsNav}>
                    <Link to='/a' className={style.navItem} onClick={clickChecked }>Nosotros</Link>
                    <Link to='#Service' className={style.navItem} onClick={clickChecked}>Servicios</Link>
                    <Link to='/a' className={style.navItem} onClick={clickChecked}>Proyectos</Link>
                    <Link to='#Footer' className={style.navItem} onClick={clickChecked}>Contacto</Link>
                </Box>
                <Box className={style.contLampara}>
                    <img src={lampara} alt='light-png' className={style.lampara}/>
                </Box>
            </Box>
        </Box>
    )
}

export default Nav;