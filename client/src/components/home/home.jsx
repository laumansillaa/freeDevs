import { Box, Typography, Button } from '@mui/material';
import frase from '../../assets/svg/frase.svg'
import BackgroundParticles from '../particles';
import style from './styles/Home.module.css'
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import TypeWriterEffect from 'react-typewriter-effect';
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
                                        fontSize: '2.8rem',
                                        color: '#000'
                                    }}
                                > <span className={style.spn}>Codeamos</span> soluciones para una vida mejor
                                </Typography>
                            </Box>
                            <Box className={style.contHomeTxtTwo}>
                                <Typography 
                                    sx={{
                                        fontFamily: 'Bebas Neue',
                                        fontSize: '2.5rem',
                                        color: '#000',
                                    }}
                                >
                                    
                                    <span className={style.spn}>Converti</span> tus ideas en grandes experiencias digitales
                                    
                                   </Typography>
                            </Box>
                          
                        </Box>
                        <Box className={style.containerMotivation}>
                             <Box className={style.contentImg}>
                                 <img src={frase} alt='motivation-svg' className={style.motivation}/>
                             </Box>
                            <Box className={style.contIcons} >
                                <TypeWriterEffect
                                    textStyle={{
                                    fontFamily: 'Poppins',
                                    color: '#000',
                                    fontWeight: 500,
                                    fontSize: '1.5em',
                                    }}
                                    startDelay={2000}
                                    cursorColor="#000"
                                    multiText={[
                                    'Que hacemos?',
                                    'Desarrollo Web',
                                    'Aplicaciones Mobile',
                                    'Diseño UX/UI',
                                    'Seguinos en redes...',
                                    ]}
                                    multiTextDelay={2000}
                                    typeSpeed={30}
                                />
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