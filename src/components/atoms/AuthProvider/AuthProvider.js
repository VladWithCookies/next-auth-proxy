
import { useState, useEffect } from 'react';

import { AUTH_STATUS } from 'constants/endpoints';
import { AuthorizedContext, SetAuthorizedContext } from 'contexts/auth';
import { httpClient } from 'utils/api/httpClient';

export default function AuthProvider({ children }) {
  const [authorized, setAuthorized] = useState();

  useEffect(() => {
    httpClient.get(AUTH_STATUS).then(({ data }) => setAuthorized(data.authorized));
  }, []);

  return (
    <AuthorizedContext.Provider value={authorized}>
      <SetAuthorizedContext.Provider value={setAuthorized}>
        {children}
      </SetAuthorizedContext.Provider>
    </AuthorizedContext.Provider>
  );
}
