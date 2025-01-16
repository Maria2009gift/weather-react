import style from './DetailedInfo.module.css'

import CardsDetailed from '../Elements/CardsDetailed/CardsDetailed';
import Container from '../Elements/Container/Container';

function DetailedInfo() {
    return (
      <Container>
        <ul className={style.list_detailedinfo}>
        <CardsDetailed subTitle={"Feels like"} value={"29.2℃"} />
        <CardsDetailed subTitle={"Min ℃"} value={"27.9℃"} secondSubTitle={"Max ℃"} secondValue={"27.9℃"} />
        <CardsDetailed subTitle={"Humidity"} value={"59%"} />
        <CardsDetailed subTitle={"Pressure"} value={"1007 Pa"} />
        <CardsDetailed subTitle={"Wind speed"} value={"3.17 m/s"} />
        <CardsDetailed subTitle={"Visibility"} value={"Unlimited"} />
        </ul>
  
      </Container>
    );
  }
  
  export default DetailedInfo;