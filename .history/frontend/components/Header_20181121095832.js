import Nav from './Nav';
import Link from 'next/link';
import styled from 'styled-components';

const Logo = styled.ul`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    text-decoration: none;
  }
  input {
    width: 50%;
    padding: 10px;
    border-radius: 10px;
    border: 2px solid #393939;
  }
`;
const Header = () => (
  <StyledHeader>
    <div class="bar">
      <Logo>
        <Link href="/">
          <a href="">BOX</a>
        </Link>
        <input type="text" placeholder="Search for files.." />
      </Logo>
      <Nav />
    </div>
    <div className="sub-bar">
      <Search />
    </div>
  </StyledHeader>
);
export default Header;
