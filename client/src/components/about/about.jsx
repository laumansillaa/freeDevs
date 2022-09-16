import {Box} from '@mui/material'
import style from "./styles/About.module.css"
import Card from './CardAbout'
import SvgComponent from './SvgService'
import CardSec from './CardSecServicie'

const About = () => {
  return(
    <Box className={style.contentAbout}>
      <Box className={style.cards}>
       <Card  title="Aplicacion web" info="desarrollamos soluciones a medida, utilizando las ultimas tecnologias de alto rendimiento y escabilidad, trabajamos persiguiendo tus objetivos"/>
       <CardSec title="disenio ux/ui" info="Buscamos la mejor experiencia para tus usuarios. Nos enfocamos en que los clientes se lleven experiencias placenteras y asi potncias realaciones, lo que lleva obtener un mejor impacto"/>
       <CardSec title="disenio ux/ui" info="loremLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus distinctio, vero, impedit animi perspiciatis esse alias tempora minus velit earum reprehenderit pariatur iure inven "/>
       <Card title="disenio ux/ui" info="loremLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus distinctio, vero, impedit animi perspiciatis esse alias tempora minus velit earum reprehenderit pariatur iure inven "/>
      
      </Box>
      <Box  className={style.data}>
        <SvgComponent/>
        <Box className={style.spanProducto}>
            <h1>Producto Digital</h1>
            <p>Nuestro equipo interdiciplinado esta listo para construir su producto, desde una web site, hasta una aplicacion web y e-commerce. Ofrecemos modelos estrategicos, consultorio para la realizacion de App para generar un gran impacto y brindarle soluciones cros/stack digital.</p>
        </Box>

      </Box>
    </Box>
  )
}

export default About;