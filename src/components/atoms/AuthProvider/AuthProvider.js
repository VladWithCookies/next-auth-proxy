
import { useState, useEffect } from 'react';

import { AuthContext } from 'contexts/AuthContext';
import { httpClient } from 'utils/api/httpClient';

export default function AuthProvider({ children }) {
  const [authorized, setAuthorized] = useState();

  useEffect(() => {
    if (authorized !== undefined) return;

    httpClient.get('/api/auth/status').then(({ data }) => setAuthorized(data.authorized));
  }, []);

  return (
    <AuthContext.Provider value={{ authorized, setAuthorized }}>
      {children}
    </AuthContext.Provider>
  );
}
