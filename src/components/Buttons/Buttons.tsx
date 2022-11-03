import { METALLIC_IMAGE, GRADIENT_IMAGE } from "../../constants";
import { ButtonContainer, MetalButton, GradientButton } from "./styled";

interface Props {
  handleClick: (url: string) => void
}

const Buttons = ({ handleClick }: Props): JSX.Element => (
  <ButtonContainer>
    <MetalButton onClick={() => handleClick(METALLIC_IMAGE)} />
    <GradientButton onClick={() => handleClick(GRADIENT_IMAGE)}  />
  </ButtonContainer>
);

export default Buttons;