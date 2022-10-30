import { CardLayerOne, CardLayerTwo, CardLayerThree, Image } from "../../styled";
import {BackCard as Container } from './styled';

interface Props {
  image: string;
}

const BackCard = ({ image }: Props): JSX.Element => (
  <Container>
    <Image src={image}/>
    <CardLayerOne />
    <CardLayerTwo />
    <CardLayerThree />
  </Container>
);

export default BackCard;