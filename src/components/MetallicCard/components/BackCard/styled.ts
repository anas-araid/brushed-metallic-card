import styled from "styled-components"
import { CARD_HEIGHT, CARD_WIDTH } from "../../constants"

export const BackCard = styled.div`
  position: absolute;
  transform-style: preserve-3d;
  transform: translateZ(1.5px);
  border-radius: 1.5rem;
  height: ${CARD_HEIGHT}px;
  width: ${CARD_WIDTH}px;
`