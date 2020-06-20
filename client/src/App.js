import React, { useEffect, useState } from 'react';
import { Admin } from './Admin';
import { Login } from './Login';

const App = () => {
  const [serverState, setServerState] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then((state) => setServerState(state.status));

    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthorized(true);
    }
  }, []);

  return (
    <section>
      <div>Status serwera: {serverState}</div>
      {isAuthorized ? <Admin /> : <Login />}
    </section>
  );
};

export default App;
