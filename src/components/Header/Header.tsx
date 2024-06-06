import { StyledHeader, StyledImage } from "./Header.style";
import logo from '/LogoCropped.png';

const Header = () => (
  <StyledHeader>
    <StyledImage src={logo} />
    <h1>Corporate Bingo</h1>
  </StyledHeader>
)

export default Header;
