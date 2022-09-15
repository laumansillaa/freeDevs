import {Box} from '@mui/material'
import style from "./styles/About.module.css"
import Card from './CardAbout'

const About = () => {
  return(
    <Box className={style.contentAbout}>
      <Box className={style.cards}>
       <Card title="disenio ux/ui" info="loremLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus distinctio, vero, impedit animi perspiciatis esse alias tempora minus velit earum reprehenderit pariatur iure inven "/>
       <Card title="disenio ux/ui" info="loremLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus distinctio, vero, impedit animi perspiciatis esse alias tempora minus velit earum reprehenderit pariatur iure inven "/>
       <Card title="disenio ux/ui" info="loremLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus distinctio, vero, impedit animi perspiciatis esse alias tempora minus velit earum reprehenderit pariatur iure inven "/>
       <Card title="disenio ux/ui" info="loremLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus distinctio, vero, impedit animi perspiciatis esse alias tempora minus velit earum reprehenderit pariatur iure inven "/>
       <Card title="disenio ux/ui" info="loremLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus distinctio, vero, impedit animi perspiciatis esse alias tempora minus velit earum reprehenderit pariatur iure inven "/>
       <Card title="disenio ux/ui" info="loremLorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus distinctio, vero, impedit animi perspiciatis esse alias tempora minus velit earum reprehenderit pariatur iure inven "/>
      </Box>
      <Box  className={style.data}>
        <h1>PNG</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus distinctio, vero, impedit animi perspiciatis esse alias tempora minus velit earum reprehenderit pariatur iure inventore ea, doloribus architecto in sapiente odio.
        Incidunt amet, in ratione, facilis aspernatur debitis, hic illo fugit quaerat sit a recusandae. Expedita eos ex voluptatem illo. Repudiandae facere laborum voluptate optio laboriosam quas, eveniet quidem praesentium pariatur.
        Praesentium sint at eum dolorum expedita pariatur aperiam magnam quia? Magnam cum provident perspiciatis saepe. Harum nulla nemo ex tempore rem optio sed non nostrum dolor dicta ipsa, voluptatibus sit?
        Placeat nisi consequuntur aliquam fugiat iste illum nesciunt animi blanditiis eveniet? Tempora quia, qui iure necessitatibus quas quidem. Excepturi incidunt molestias qui! Assumenda oms vel? Suscipit, sed?
        Delectus molestiae cum voluptatum blanditiis iusto expedita quos minima maxime nam pariatur ea dolorem dicta, sapiente reprehenderit natus quia? Et expedita corporis voluptate quisquam aperiam harum provident fugiat eum esse.</p>
      </Box>
    </Box>
  )
}

export default About;