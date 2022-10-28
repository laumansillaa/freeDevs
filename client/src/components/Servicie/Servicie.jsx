import {Box, Button} from '@mui/material'
import style from "./styles/Servicie.module.css"
import Card from './CardServicie'
import svgServicie from '../../assets/svg/FrameServicie.svg';
import CardSec from './CardSecServicie'
import DarkVariantExample from './Carousel';

const Servicie = () => {
  return(
    <>
    <Box className={style.contentAbout} id='servicio'>
      <Box className={style.cards}>
       <Card  title="Desarrollo web" info="Trabajamos en brindar soluciones a medida. Desarrollamos en los último en     tecnología para llevar a cabo un rendimiento más óptimo en nuestras apps buscando estabilidad a largo plazo, persiguiendo tus objetivos"/>
       <CardSec title="Diseño ux/ui" info="Queremos que los usuarios tengan la mejor experiencia en tu sitio. Por eso diseñamos interfaces optimas y placenteras, para lograr un mejor impacto"/>
       {/* <CardSec title="Disenio ux/ui" info="El objetivo es buscar la mejor performance para tus usuarios, indicando que los clientes se    lleven experiencias placenteras, y un diseño óptimo para el proyecto"/> */}
       <CardSec title="Web Analytics" info="Creamos un análisis bien hecho para comprender el comportamiento de tu audiencia y tomar acciones más concretas y certeras"/>
       <Card title="SEO" info="Search Engine Optimization. Realizamos en un conjunto de técnicas y estrategias centradas en optimizar el posicionamiento orgánico en buscadores de internet"/>
      
      </Box>
      <Box  className={style.data}>
       <img src={svgServicie} alt="imgServicie" className={style.svgServicie}/>
        <Box className={style.spanProducto}>
            <Box className={style.contentTitle}>
              <h1>Producto</h1>
              <h1 className={style.titleDigital}>Digital</h1>
            </Box>
            <Box className={style.contentParrafo}>
              <p>Nuestro equipo interdisciplinario, está preparado para construir su producto, desde una website, hasta una App. Trabajamos seriamente no solo en la lógica del trabajo, sino en el diseño que se adecue a tus visitantes. Ofrecemos modelos estratégicos, para guiarte desde el comienzo.<br/> 
                  <br/>Si cuentas con una ONG no dudes en contactarnos, en nuestra comunidad nos gusta escuchar acerca de grandes ideas que puedan generar un gran impacto en la sociedad y nuestro planeta, y nos gustaría ser parte de ello sin ánimos de lucro.
              </p>
              </Box>
        </Box>
      </Box>
     
    </Box>
    <Box className={style.contentServiWork}>
        <Box className={style.contentTitleWorkSpan}>
          <h1 >Nuestra gestion para llevar acabo un gran proyecto</h1>
        </Box>
        <Box className={style.contentPImg}>
        <Box className={style.contentParrafoWork}>
          <h1 className={style.titleParrafo}>Te contamos nuestra modalidad de trabajo</h1>
          <p className={style.parrafoWork}> Utilizando metodologías ágiles, planificamos y gestionamos todos nuestros proyectos para obtener mejores resultados día a día. Primeramente nos centramos en definir el diseño que aplicaremos al proyecto, buscando un aspecto moderno y agradable, que genere satisfacción en los usuarios. Una vez definido, es la hora de hacerlo realidad. Cumplido el plazo estimado, podrás ver esa idea que tanto pensaste, hecha realidad.</p>
          {/* <Button
              variant='contained'
                 sx={{
                   background: '#154AB1',
                   fontFamily: 'Bebas Neue',
                   letterSpacing: '.2rem',
                   fontSize: '1.2rem'
                }}
          >Contactanos</Button> */}
        </Box>
        <Box className={style.contentCarousel}> 
         <DarkVariantExample/>
        </Box>
        </Box>
      </Box>
    </>
  )
}

export default Servicie;