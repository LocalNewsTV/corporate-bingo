import { StyledButton, StyledImage } from "./SettingsButton.style";
import gear from '/gear.svg';
import play from '/play.svg';

type PropTypes = {
  state: boolean;
  stateToggle: () => void
}

const SettingsButton = ({ state, stateToggle }: PropTypes) => {

  return (
    <StyledButton onClick={stateToggle} >
      <StyledImage src={state ? gear : play} />
    </StyledButton>
  )
}

export default SettingsButton;
