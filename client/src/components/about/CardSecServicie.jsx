import {Container} from '@mui/material'
import style from "./styles/Card.module.css"




const CardSec = ({title, info}) => {

  return(
    <Container className={style.cardSec}>
        <h1 className={style.title}>{title}</h1>
        <p className={style.parrafo}>{info}</p>
    </Container>
  )
}

export default CardSec;