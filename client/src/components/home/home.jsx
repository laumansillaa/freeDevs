import { Box, Typography, Button } from '@mui/material';
import frase1 from '../../assets/svg/frase1.svg'
import gif from '../../assets/gif/GIF-LOGO.gif'
import style from './styles/Home.module.css'
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import Efc from './Efc';



const Home = () => {

    return (
            <Box id="home">
                {/* <Box>
                    <BackgroundParticles/>
                </Box> */}
                <Box>
                    <Box className={style.containerHome}>
                        <Box className={style.containerTxtHome}>
                            <Box className={style.contHomeTxt}>
                                <Typography 
                                    sx={{
                                        fontFamily: 'Bebas Neue',
                                        fontSize: '2.4rem',
                                        color: '#000'
                                    }}
                                > <span className={style.spn}>Codeamos</span> soluciones potenciamos tu proyecto
                                </Typography>
                            </Box>
                            <Box className={style.contHomeTxtTwo}>
                                <Typography 
                                    sx={{
                                        fontFamily: 'Bebas Neue',
                                        fontSize: '2.4rem',
                                        color: '#000',
                                    }}
                                >
                                    <span className={style.spn}>Converti</span> tus ideas en grandes experiencias digitales
                                    
                                   </Typography>
                            </Box>
                          
                        </Box>
                        <Box className={style.containerMotivation}>
                             <Box className={style.contGif}>
                                <img src={gif} alt='gif-logo' className={style.gif} />
                             </Box>
                             {/* <Box className={style.contentImg}>
                                 <img src={frase1} alt='motivation-svg' className={style.motivation}/>
                             </Box> */}
                            <Box className={style.contIcons} >
                                 <Efc/>
                                    <FaInstagram className={style.icon}/>
                                    <FaLinkedin className={style.icon}/>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            
            </Box>

    )
}

export default Home;