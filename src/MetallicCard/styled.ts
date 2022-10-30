import styled, { keyframes } from "styled-components"
import { CARD_HEIGHT, CARD_WIDTH } from "./constants"

export const Container = styled.div`
  display: flex;
  background-color: black;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
`

export const CardContainer = styled.div`
  display: flex;
  perspective: 600px;
  justify-content: center;
  align-items: center;
  margin: 0px;
  height: 80%;
`

export const FlipCard = keyframes`
  100%{ transform:rotateY(360deg); }
`

export const Card = styled.div`
  transform-style: preserve-3d;
  height: ${CARD_HEIGHT}px;
  width: ${CARD_WIDTH}px;
  border-radius: 48px;
  &.hover {
    transition: 0ms;
  }
  /* transform: rotateY(90deg) */
  animation: ${FlipCard} 10s infinite linear; 
`

export const GradientOpacity = keyframes`
    0% {
      background-position:0px 0px;
      opacity: 0.2;
    }
    50% {
      background-position: 90px 90px;
      opacity: 1;
    }
    100% { 
      background-position: 80px 80px;
      opacity: 0.2;
    }
`

export const CardLayerOne = styled.div`
  position: absolute;
  z-index: 20;
  height: ${CARD_HEIGHT}px;
  width: ${CARD_WIDTH}px;
  left: 0px;
  top: 0px;
  mix-blend-mode: soft-light;
  border-radius: 1.5rem;
`

export const CardLayerTwo = styled.div`
  position: absolute;
  background-color: #858585;
  background-image: 
    linear-gradient( 
      0deg, 
      rgba( 0,0,0,0.925 ), transparent, rgba( 0,0,0,0.925 ), transparent, rgba( 0,0,0,0.925 )
    ); 
  z-index: 200;
  height: ${CARD_HEIGHT}px;
  width: ${CARD_WIDTH}px;
  left: 0px;
  top: 0px;
  mix-blend-mode: soft-light;
  border-radius: 1.5rem;
  /* background-position: 10rem 10rem; */
  -webkit-animation: ${GradientOpacity} 3s ease infinite;
  -moz-animation: ${GradientOpacity} 3s ease infinite;
  animation: ${GradientOpacity} 3s ease infinite;
`

export const CardLayerThree = styled.div`
  position: absolute;
  background-image: url('./src/assets/brushedV.png');
  z-index: 20;
  height: ${CARD_HEIGHT}px;
  width: ${CARD_WIDTH}px;
  left: 0px;
  top: 0px;
  mix-blend-mode: soft-light;
  border-radius: 1.5rem;
  filter: grayscale(80%);
`

export const Image = styled.img`
  border: 1px solid rgb(27, 31, 58);
  height: 100%;
  border-radius: 1.5rem;
  height: ${CARD_HEIGHT}px;
  width: ${CARD_WIDTH}px;
`
