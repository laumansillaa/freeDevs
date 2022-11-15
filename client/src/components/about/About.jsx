import {Box, Typography, Button} from '@mui/material';
import style from './styles/About.module.css';
import teamWork from '../../assets/svg/teamWork.svg';
import Handshake from '../../assets/svg/Handshake.svg';
import team from '../../assets/svg/team.svg'
import Innovation from '../../assets/svg/Innovation.svg'
import { FaWhatsapp} from 'react-icons/fa';

const About = () => {


    return (
        <Box className={style.contAbout} id='about'>
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
                        }}>Trabajamos en darte la mejor experiencia, y los mejores resultados</Typography>
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
                        }}>La diversidad también nos representa y somos una comunidad con mucha cultura</Typography>
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
                        }}>Nos mantenemos estables y también trabajando en nuevas tecnologías</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className={style.contButtonAbout}>
            <a href='https://wa.me/5491141668947' target='_blank'>
                 
                <Button variant='contained' sx={{
                    fontFamily: 'Bebas Neue',
                    fontSize: '1.3rem',
                    letterSpacing: '.2rem',
                    background: '#25D366'
                }}>
                    <FaWhatsapp className={style.icon}/> <hr />
                     Quiero info a traves de WhatsApp
                </Button>
                </a>

            </Box>
        </Box>
    )
}

export default About;