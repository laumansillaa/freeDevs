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
          <h5>SCRUM</h5>
          <p>   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi laborum accusamus 
            necessitatibus fugiat eveniet quis nostrum quaerat ea perspiciatis reprehenderit architecto 
            perferendis, at voluptas corrupti pariatur, veniam esse! In, itaque?
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
          <h5>Realizamos encuestas</h5>
          <p>   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi laborum accusamus
             necessitatibus fugiat eveniet quis nostrum quaerat ea perspiciatis reprehenderit architecto
              perferendis, at voluptas corrupti pariatur, veniam esse! In, itaque?
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
          <h5>Comunicacion</h5>
          <p>   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi laborum accusamus 
            necessitatibus fugiat eveniet quis nostrum quaerat ea perspiciatis reprehenderit architecto 
            perferendis, at voluptas corrupti pariatur, veniam esse! In, itaque?
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default DarkVariantExample;