import { httpClient } from 'utils/api/httpClient';

export default function Login() {
  const handleClick = () => {
    const params = {
      username: 'summervibeswith9pm@gmail.com',
      password: 'qwerty',
      grantType: 'password'
    };

    httpClient.post('/api/login', params);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      Login
    </button>
  );
}
