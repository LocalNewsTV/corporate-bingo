import { StyledHeader, StyledImage } from "./Header.style";
import logo from '/LogoCropped.png';
import SettingsButton from "../SettingsButton/SettingsButton";

type PropTypes = {
  state: boolean;
  stateToggle: () => void
}

const Header = ({ state, stateToggle }: PropTypes) => (
  <StyledHeader>
    <StyledImage src={logo} />
    <h1>Corporate Bingo</h1>
    <SettingsButton
      state={state}
      stateToggle={stateToggle}
    />
  </StyledHeader>
)

export default Header;
