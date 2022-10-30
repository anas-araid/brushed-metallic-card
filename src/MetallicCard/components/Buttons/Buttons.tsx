import { METAL_URL, GRADIENT_URL } from "../../constants";
import { ButtonContainer, MetalButton, GradientButton } from "./styled";

interface Props {
  handleClick: (url: string) => void
}

const Buttons = ({ handleClick }: Props): JSX.Element => (
  <ButtonContainer>
    <MetalButton onClick={() => handleClick(METAL_URL)} />
    <GradientButton onClick={() => handleClick(GRADIENT_URL)}  />
  </ButtonContainer>
);

export default Buttons;