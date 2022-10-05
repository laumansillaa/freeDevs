import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./styles/Carousel.module.css"
import ServicieCarousel from "../../assets/ServicieCarousel.png"
function DarkVariantExample() {
  return (
    <Carousel className={style.carousel} variant="dark">
      {/* <Carousel.Item>
        <img
          className={style.img}
          src={ServicieCarousel}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5> </h5>
         <p> </p>
        </Carousel.Caption>
      </Carousel.Item> */}
      <Carousel.Item>
        <img
          className={style.img}
          src="https://i.pinimg.com/564x/35/65/b6/3565b6cf67433af6387fb04e1899ec3d.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Que nos diferencia?</h5>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={style.img}
          src="https://i.pinimg.com/564x/35/65/b6/3565b6cf67433af6387fb04e1899ec3d.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          
          <p> Somos FreeDevs, un equipo apasionado por la tecnologia e invación
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className={style.img}
          src="https://i.pinimg.com/564x/35/65/b6/3565b6cf67433af6387fb04e1899ec3d.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <p>Nuestro Rol es tomar cada idea optimizarla y exponenciarla al maximo</p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default DarkVariantExample;