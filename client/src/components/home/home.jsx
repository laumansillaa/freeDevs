import { Box, Typography, Button } from '@mui/material';
import frase from '../../assets/svg/frase.svg'
import BackgroundParticles from '../particles';
import style from './styles/Home.module.css'

const Home = () => {

    return (
            <Box>
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
                                <Button
                                    variant='contained'
                                    sx={{
                                        background: '#154AB1',
                                        fontFamily: 'Bebas Neue',
                                        letterSpacing: '.1rem',
                                        fontSize: '1.2rem'
                                    }}
                                >Contactanos</Button>
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