import { useState } from 'react'
import { METAL_URL } from './constants';
import { BackCard } from './components/BackCard';
import { FrontCard } from './components/FrontCard';
import { Thickness } from './components/Thickness';
import { Buttons } from './components/Buttons';
import { Container, CardContainer, Card } from './styled';

const MetallicCard = (): JSX.Element => {
  const [image, setImage] = useState(METAL_URL);

  const handleClick = (imageUrl: string) => {
    setImage(imageUrl)
  }

  return (
    <Container>
      <CardContainer>
        <Card>
          <BackCard image={image} />
          <Thickness />
          <FrontCard image={image} />
        </Card>      
      </CardContainer>
      <Buttons handleClick={(url) => handleClick(url)} />
    </Container>
  )
}

export default MetallicCard;



