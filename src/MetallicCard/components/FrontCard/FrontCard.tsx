import { CardLayerOne, CardLayerTwo, CardLayerThree, Image } from "../../styled";
import { FrontCard as Container } from './styled';

interface Props {
  image: string;
}

const FrontCard = ({ image }: Props): JSX.Element => (
  <Container>
    <Image src={image}/>
    <CardLayerOne />
    <CardLayerTwo />
    <CardLayerThree />
  </Container>
);

export default FrontCard;