import Link from 'next/link';
import { httpClient } from 'utils/api/httpClient';

export default function Home() {
  const handleLogout = () => {
    httpClient.delete('/api/logout');
  };

  return (
    <ul>
      <li>
        <Link href="/profile">
          Profile
        </Link>
      </li>
      <li>
        <button
          type="button"
          onClick={handleLogout}
        >
          Logout
        </button>
      </li>
      <li>
        <Link href="/login">
          Login
        </Link>
      </li>
      <li>
        <Link href="/signup">
          Sign Up
        </Link>
      </li>
    </ul>
  );
}
