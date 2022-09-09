import {Box, Typography} from '@mui/material'
import freeDev from '../../assets/svg/freeDevs.svg'
import style from './styles/index.module.css'


const Nav = () => {


    return (
        <Box className={style.contNav} >
            <Box>
                <img src={freeDev} alt='freeDev-svg'/>
            </Box>
            <Box>
                {/* <Typography>Hola</Typography> */}
            </Box>
        </Box>
    )
}

export default Nav;