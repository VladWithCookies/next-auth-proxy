import Link from 'next/link';

import * as ROUTES from 'constants/routes';
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
            <Link href={ROUTES.PROFILE}>
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
            <Link href={ROUTES.LOGIN}>
              Login
            </Link>
          </li>
          <li>
            <Link href={ROUTES.SIGNUP}>
              Sign Up
            </Link>
          </li>
        </>
      )}
    </ul>
  );
}
