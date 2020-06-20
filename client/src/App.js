import React, { useEffect, useState } from 'react';
import { Admin } from './Admin';
import { Login } from './Login';

const App = () => {
  const [serverState, setServerState] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then((state) => {
        setServerState(state.status);
      });
  }, []);

  return (
    <section>
      <div>Status serwera: {serverState}</div>
      <Login />
      <Admin />
    </section>
  );
};

export default App;
