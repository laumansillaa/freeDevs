import {Box} from '@mui/material'
import style from "./styles/Card.module.css"




const CardSec = ({title, info}) => {

  return(
    <Box className={style.cardSec}>
        <Box className={style.contentTitle}>
          <h1 className={style.title}>{title}</h1>
          </Box>
        <Box className={style.contentParrafo}> 
          <p className={style.parrafo}>{info}</p>
        </Box>
    </Box>
  )
}

export default CardSec;