import Link from 'next/link';

export default function Home() {
  return (
    <ul>
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
      <li>
        <Link href="/profile">
          Profile
        </Link>
      </li>
    </ul>
  );
}
