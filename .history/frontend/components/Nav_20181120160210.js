import Link from 'next/link';
const Nav = () => (
  <div>
    <Link href="/upload">
      <a>Upload</a>
    </Link>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/thumbnails">
      <a>Thumbnails</a>
    </Link>
  </div>
);
export default Nav;
