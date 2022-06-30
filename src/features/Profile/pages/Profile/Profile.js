import { useEffect, useState } from 'react';
import { httpClient } from 'utils/api/httpClient';

export default function Profile() {
  const [profile, setProfile] = useState();

  useEffect(() => {
    httpClient.get('/api/json/user/profile')
      .then((response) => setProfile(response.data.data.attributes));
  }, []);

  if (!profile) return null;

  return (
    <dl>
      <dt>Username: </dt>
      <dt>{profile.username}</dt>
      <dt>Email: </dt>
      <dt>{profile.email}</dt>
    </dl>
  );
}
