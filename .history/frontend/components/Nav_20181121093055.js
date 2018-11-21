import Link from 'next/link';
const Nav = () => (
  <div>
    <Link href="/upload">
      <a>Upload</a>
    </Link>
    <Link href="/">
      <a>Home</a>
    </Link>
  </div>
);
export default Nav;
