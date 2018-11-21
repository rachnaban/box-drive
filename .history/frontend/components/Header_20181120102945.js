import Nav from './Nav';
import Link from 'next/link';
import styled from 'styled-components';

const Logo = styled.a`
  text-decoration: none;
  color: red;
`;
const Header = () => (
  <div>
    <div>
      <h1>
        <Link href="/">
          <Logo>
            <a href="">BOX</a>
          </Logo>
        </Link>
      </h1>
      <Nav />
    </div>
  </div>
);
export default Header;
