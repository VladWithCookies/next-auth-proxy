import Link from 'next/link';

import useAuth from 'hooks/useAuth';

export default function Navigation() {
  const { logout, authorized } = useAuth();

  return (
    <ul>
      <li>
        <Link href="/">
          Home
        </Link>
      </li>
      {authorized ? (
        <>
          <li>
            <Link href="/profile">
              Profile
            </Link>
          </li>
          <li>
            <button
              type="button"
              onClick={logout}
            >
              Logout
            </button>
          </li>
        </>
      ) : (
        <>
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
        </>
      )}
    </ul>
  );
}
