import {Box, Typography, Button} from '@mui/material';
import style from './styles/About.module.css';
import teamWork from '../../assets/svg/teamWork.svg';
import Handshake from '../../assets/svg/Handshake.svg';
import team from '../../assets/svg/team.svg'
import Innovation from '../../assets/svg/Innovation.svg'

const About = () => {


    return (
        <Box className={style.contAbout}>
            <Box className={style.contTitleAbout}>
                <Typography sx={{
                    fontFamily: 'Bebas Neue',
                    fontSize: '2.5rem'
                }}>Nuestra tarea es poner la tecnologia al servicio del usuario
                </Typography>
            </Box>
            <Box className={style.contItemsAbout}>
                <Box className={style.contAux}>
                    <Box className={style.contItem}>
                        <img src={teamWork} alt='teamWork' className={style.aboutImg} />
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '1.4rem',
                            color: '#0066CC'
                        }}>Responsabilidad</Typography>
                        <Box className={style.contItemTxt}>
                            <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '1rem',
                        }}>Nuestro desafio es ofrecerte las mejores soluciones</Typography>
                        </Box>
                    </Box>
                    <Box className={style.contItem}>
                        <img src={Handshake} alt='HandShake' className={style.aboutImg} />
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '1.4rem',
                            color: '#0066CC'
                        }}>Compromiso</Typography>
                        <Box className={style.contItemTxt}>
                            <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '1rem',
                        }}>Ponemos nuestro conocimiento y talento a su disposición, de principio a fin</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className={style.contAux}>
                    <Box className={style.contItem}>
                        <img src={team} alt='Team' className={style.aboutImg} />
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '1.4rem',
                            color: '#0066CC'
                        }}>Respeto</Typography>
                        <Box className={style.contItemTxt}>
                            <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '1rem',
                        }}>Nuestro equipo también es nuestra familia y junto con nuestros socios, somos una comunidad seguda</Typography>
                        </Box>
                    </Box>
                    <Box className={style.contItem}>
                        <img src={Innovation} alt='Innovation' className={style.aboutImg} />
                        <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '1.4rem',
                            color: '#0066CC'
                        }}>Innovacion</Typography>
                        <Box className={style.contItemTxt}>
                            <Typography sx={{
                            fontFamily: 'Poppins',
                            fontSize: '1rem',
                        }}>Adoptamos un enfoque único que combina las próximas tecnologias y scrum</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className={style.contButtonAbout}>
                <Button variant='contained' sx={{
                    fontFamily: 'Bebas Neue',
                    fontSize: '1.3rem',
                    letterSpacing: '.1rem',
                    background: '#0066CC'
                }}>
                    Solicitar cotizacion
                </Button>
            </Box>
        </Box>
    )
}

export default About;