import Nav from './Nav';
import Link from 'next/link';
import styled from 'styled-components';

const Logo = styled.h1`
  display: flex;
  flex-wrap: nowrap;

  a {
    text-decoration: none;
  }
`;
const Header = () => (
  <div>
    <div>
      <Logo>
        <Link href="/">
          <a href="">BOX</a>
        </Link>
        <input type="text" placeholder="Search for files.." />
      </Logo>
      <Nav />
    </div>
  </div>
);
export default Header;
