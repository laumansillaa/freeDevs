import {Box, Button} from '@mui/material'
import style from "./styles/Servicie.module.css"
import Card from './CardServicie'
import svgServicie from '../../assets/svg/FrameServicie.svg';
import CardSec from './CardSecServicie'


const Servicie = () => {
  return(
    <>
    <Box className={style.contentAbout}>
      <Box className={style.cards}>
       <Card  title="Desarrollo web" info="desarrollamos soluciones a medida, utilizando las ultimas tecnologias de alto rendimiento y escabilidad, trabajamos persiguiendo tus objetivos"/>
       <CardSec title="Disenio ux/ui" info="Buscamos la mejor experiencia para tus usuarios. Nos enfocamos en que los clientes se lleven experiencias placenteras y asi potncias realaciones, lo que lleva obtener un mejor impacto"/>
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
              <p>Nuestro equipo interdiciplinado esta listo para construir su producto, desde una web site, hasta una aplicacion web y e-commerce. Ofrecemos modelos estrategicos, consultorio para la realizacion de App para generar un gran impacto y brindarle soluciones cros/stack digital.</p>
              </Box>
        </Box>
      </Box>
     
    </Box>
    <Box className={style.contentServiWork}>
        <Box className={style.contentTitleWorkSpan}>
          <h1>Nuestra gestion para llevar acabo un gran proyecto</h1>
        </Box>
        <Box className={style.contentPImg}>
        <Box className={style.contentParrafoWork}>
          <h1 className={style.titleParrafo}>Te contamos nuestra modalidad de trabajo</h1>
          <p className={style.parrafoWork}>Utilizando metodologias agiles, planificamos y gestionamos todos nuestrosproyectos, para obtener mejores resultados dia a dia Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam officia ducimus eaque, voluptas nemo tempore explicabo reprehenderit, magnam doloremque veritatis consequatur maxime? Dolor optio culpa quisquam ipsum numquam eius. Ab!
          Amet cupiditapti totam perspiciatis assumenda, hic molestiae repellat laboriosam recusandae voluptate quidem voluptatum pariatur doloribus quisquam ratione dolorum? Labore, neque.</p>
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
        <Box> 
          <img className={style.imgWork} src="https://i.postimg.cc/qMjR4Stt/undraw-Team-collaboration-re-ow29.png" alt="SpaceWork" />
        </Box>
        </Box>
      </Box>
    </>
  )
}

export default Servicie;