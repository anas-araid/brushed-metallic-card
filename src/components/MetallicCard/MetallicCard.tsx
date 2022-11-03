import { BackCard } from './components/BackCard';
import { FrontCard } from './components/FrontCard';
import { Thickness } from './components/Thickness';
import { CardContainer, Card } from './styled';

interface IMetallicCardProps {
  image: string;
}

const MetallicCard = ({ image } : IMetallicCardProps): JSX.Element => (
  <CardContainer>
    <Card>
      <BackCard image={image} />
      <Thickness />
      <FrontCard image={image} />
    </Card>      
  </CardContainer>
)

export default MetallicCard;



