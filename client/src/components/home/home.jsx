import { Box, Typography, Button } from '@mui/material';
import { Link, animateScroll as scroll } from "react-scroll";
import frase1 from '../../assets/svg/frase1.svg'
import gif from '../../assets/gif/GIF-LOGO.gif'
import style from './styles/Home.module.css'
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import giftLogo from "../../assets/png/gifLogo3.gif"
import Efc from './Efc';



const Home = () => {

    return (
            <Box id="home">
                <Box>
                    <Box className={style.containerHome}>
                        <Box className={style.containerTxtHome}>
                            <Box className={style.contHomeTxt}>
                                <Typography 
                                    sx={{
                                        fontFamily: 'Bebas Neue',
                                        fontSize: '2.6rem',
                                        color: '#fff'
                                    }}
                                > <span className={style.spn}>Codeamos</span> soluciones potenciamos tu proyecto
                                </Typography>
                            </Box>
                            <Box className={style.contHomeTxtTwo}>
                                <Typography 
                                    sx={{
                                        fontFamily: 'Bebas Neue',
                                        fontSize: '2.6rem',
                                        color: '#fff',
                                    }}
                                >
                                    <span className={style.spn}>Converti</span> tus ideas en grandes experiencias digitales
                                    
                                   </Typography>
                            </Box>
                            <Box className={style.contHomeBtn}>
                                <Link to="contact" spy={true} smooth={true} offset={-100} duration={200}><Button
                                    variant='contained'
                                        sx={{
                                        fontFamily: 'Bebas Neue',
                                        fontSize: '1.3rem',
                                        letterSpacing: '.1rem',
                                        background: '#0066CC'
                                        }}
                                >Contactanos</Button></Link>
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
                                    <a href='https://www.instagram.com/free_devs/' target='_blank' className={style.homeLink}>
                                        <FaInstagram className={style.icon}/>
                                    </a>
                                    <a href='https://www.linkedin.com/in/freedevs/' target='_blank' className={style.homeLink}>
                                        <FaLinkedin className={style.icon}/>
                                    </a>

                            </Box>
                        </Box>
                    </Box>
                </Box>
            
            </Box>

    )
}

export default Home;