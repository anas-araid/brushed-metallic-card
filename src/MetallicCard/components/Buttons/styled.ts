import styled from "styled-components"

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20%;
`

export const MetalButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-image: url('./src/assets/metal.png');
  border: solid 1.5px white;
  background-size: cover;
  margin-right: 20px;
  cursor: pointer;
`

export const GradientButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-image: url('./src/assets/gradient.jpg');
  border: solid 1.5px white;
  background-size: cover;
  cursor: pointer;
`
