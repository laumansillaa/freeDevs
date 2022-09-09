import {Box, Typography} from '@mui/material'
import {Link} from 'react-router-dom'
import freeDev from '../../assets/svg/freeDevs.svg'
import style from './styles/index.module.css'


const Nav = () => {


    return (
        <Box className={style.contNav} >
            <Box className={style.contImgNav}>
                <img src={freeDev} alt='freeDev-svg'/>
            </Box>
            <Box className={style.contItemsNav}>
                <Box className={style.boxItem}>
                    <Link to='/a' className={style.itemNav}>Nosotros</Link>
                </Box>
                <Box className={style.boxItem}>
                    <Link to='/a' className={style.itemNav}>Servicios</Link>
                </Box>
                <Box className={style.boxItem}>
                    <Link to='/a' className={style.itemNav}>Proyectos</Link>
                </Box>
                <Box className={style.boxItem}>
                    <Link to='/a' className={style.itemNav}>Contacto</Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Nav;