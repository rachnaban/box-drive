import Link from 'next/link';

const Home = props => (
  <div>
    <p>Home Page</p>
    <Link href="/upload">
      <a>Upload</a>
    </Link>
  </div>
);

export default Home;
