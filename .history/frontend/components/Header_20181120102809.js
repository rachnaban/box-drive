import Nav from './Nav';
import Link from 'next/link';
import styled from 'styled-components';

const Logo = styled.a`
  text-transform: none;
`;
const Header = () => (
  <div>
    <div>
      <h1>
        <Link href="/">
          <a href="">BOX</a>
        </Link>
      </h1>
      <Nav />
    </div>
  </div>
);
export default Header;
