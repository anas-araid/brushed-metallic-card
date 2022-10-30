import styled from "styled-components";
import { CARD_HEIGHT, CARD_WIDTH } from "../../constants";

export const Depth = styled.div`
  border-radius: 1.5rem;
  height: ${CARD_HEIGHT}px;
  width: ${CARD_WIDTH}px;
  left: 0px;
  top: 0px;
  position: absolute;
  background-color: grey;
  border: 1px solid grey;
  z-index: 2;
`