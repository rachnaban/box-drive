import Link from 'next/link';
import styled from 'styled-components';

const NavStyles = styled.ul`
display: flex;
    flex-direction: column;
  /*margin: 0;
  padding: 0;
  display: flex;
  justify-self: end;
  flex-direction: column;
  font-size: 2rem;
  grid-area: navigation;
  a:first-child {
    background-color: ${props => props.theme.lightBlue};
    color: white;
    width: 64%;
    margin-left: 10px;
  }
  a {
    padding: 1rem 3rem;
    display: flex;
    align-items: center;
    position: relative;

    font-size: 1em;
    background: none;
    border: 0;
    cursor: pointer;

    text-decoration: none;
    @media (max-width: 700px) {
      font-size: 10px;
      padding: 0 10px;
    }
    &:hover,
    &:focus {
      outline: none;
      &:after {
        width: calc(100% - 60px);
      }
    }
  }
  @media (max-width: 1300px) {
    width: 100%;
    justify-content: center;
    font-size: 1.5rem;
  }*/
`;
const Nav = () => (
  <NavStyles>
    <Link href="/upload">
      <a>Upload</a>
    </Link>
    <Link href="/">
      <a>My Drive</a>
    </Link>
    <Link href="/">
      <a>Shared with me</a>
    </Link>
    <Link href="/">
      <a>Recent</a>
    </Link>
    <Link href="/">
      <a>Trash</a>
    </Link>
  </NavStyles>
);
export default Nav;
