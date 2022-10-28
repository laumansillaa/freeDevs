import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./styles/Carousel.module.css"
import ServicieCarousel from "../../assets/ServicieCarousel.png"
import imgCarrousel from '../../assets/png/imgCarrousel.png'
function DarkVariantExample() {
  return (
    <Carousel className={style.carousel} variant="dark">
     
      <Carousel.Item>
        <img
          className={style.img}
          src={imgCarrousel}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 >¿Como son los procesos?</h5>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={style.img}
          src={imgCarrousel}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h5>1 - Briefing</h5>
          <p>Nos reunimos con el cliente para saber que espera de la web y entender el modelo de negocio.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={style.img}
          src={imgCarrousel}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h5>2 - Planning</h5>
          <p>Planifamos con el equipo, y asentamos las bases sobre las que se trabajaran. Se aportan soluciones para la consecución del objetivo.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={style.img}
          src={imgCarrousel}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h5>3 - Diseño</h5>
          <p>Llevamos acabo un diseño agradable para el usuario final, trabajando con prototipos de baja y alta densidad para luego realizar test de usabilidad.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={style.img}
          src={imgCarrousel}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h5>4 - Desarrollo</h5>
          <p>En esta fase se implementan todas las funcionalidades que harán que el proyecto funcione. Desarrollamos el front end y el backend, poner a punto las bases de datos y también la optimización del rendimiento de la página.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={style.img}
          src={imgCarrousel}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h5>5 - Lanzamiento</h5>
          <p>Es la publicación definitiva del proyecto en el servidor del cliente. Por otro lado, se insertan las herramientas de analítica web que en el futuro informarán si se están cumpliendo los objetivos de negocio.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={style.img}
          src={imgCarrousel}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h5>6 - Mantenimiento</h5>
          <p>Una vez lanzada la web, se realizara el mantenimiento, desde actualizaciones y mejoras continuas de lo existente hasta el desarrollo de nuevas funcionalidades a medida que el negocio vaya creciendo.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;