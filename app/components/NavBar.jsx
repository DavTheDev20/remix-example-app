import { Link } from 'remix';

export default function NavBar() {
  return (
    <nav>
      <Link to={'/'}>Remix Example</Link>
      <ul>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/create'}>Create</Link>
        </li>
        <li>
          <Link to={'/posts'}>Posts</Link>
        </li>
      </ul>
    </nav>
  );
}
