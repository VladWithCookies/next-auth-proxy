import { httpClient } from 'utils/api/httpClient';

export default function Signup() {
  const handleClick = () => {
    const params = {
      username: 'vlad',
      email: 'summervibeswith9pm@gmail.com',
      password: 'qwerty'
    };

    httpClient.post('/api/json/sign_up/users', params);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
    >
      Sign Up
    </button>
  );
}
