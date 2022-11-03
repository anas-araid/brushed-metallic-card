import { useState } from 'react';
import styled from 'styled-components';
import { MetallicCard } from './components/MetallicCard'
import { Buttons } from './components/Buttons';
import { METALLIC_IMAGE } from './constants';

const App = (): JSX.Element => {
  const [image, setImage] = useState(METALLIC_IMAGE);

  const handleClick = (imageUrl: string) => {
    setImage(imageUrl)
  }

  return (
    <Container>
      <MetallicCard image={image} />
      <Buttons handleClick={(url) => handleClick(url)} />
    </Container>
  )
}

export const Container = styled.div`
  display: flex;
  background-color: black;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
`

export default App;
