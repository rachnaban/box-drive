import Nav from './Nav';
import Link from 'next/link';
import styled from 'styled-components';

const Logo = styled.h1`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-evenly;
  a {
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
