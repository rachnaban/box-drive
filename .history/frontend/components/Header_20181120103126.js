import Nav from './Nav';
import Link from 'next/link';
import styled from 'styled-components';

const Logo = styled.h1`
  a {
    text-decoration: none;
    color: red;
  }
`;
const Header = () => (
  <div>
    <div>
      <Logo>
        <Link href="/">
          <a href="">BOX</a>
        </Link>
      </Logo>
      <Nav />
    </div>
  </div>
);
export default Header;
