import { Box, Typography, Button } from '@mui/material';
import frase from '../../assets/svg/frase.svg'
import BackgroundParticles from '../particles';
import FloatingActionButtons from './BtnFlotante';
import style from './styles/Home.module.css'
import { Link, animateScroll as scroll } from "react-scroll";
const Home = () => {

    return (
            <Box>
                <Box>
                    {/* <BackgroundParticles/> */}
                </Box>
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
                                >Codeamos soluciones para una vida mejor</Typography>
                            </Box>
                            <Box className={style.contHomeTxtTwo}>
                                <Typography 
                                    sx={{
                                        fontFamily: 'Bebas Neue',
                                        fontSize: '2.8rem',
                                        color: '#000',
                                    }}
                                >Converti tus ideas en grandes experiencias digitales</Typography>
                            </Box>
                            <Box className={style.contHomeBtn}>
                                <Link to="about" spy={true} smooth={true} offset={-100} duration={300}>
                                  <FloatingActionButtons/>
                                </Link>
                               
                            </Box>
                        </Box>
                        <Box className={style.containerMotivation}>
                                <img src={frase} alt='motivation-svg' className={style.motivation}/>
                            {/* <Box>
                            </Box> */}
                        </Box>
                    </Box>
                </Box>
            
            </Box>

    )
}

export default Home;