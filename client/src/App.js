import React, { useEffect, useState } from 'react';

const App = () => {
  const [serverState, setServerState] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then((r) => r.json())
      .then((state) => {
        setServerState(state.status);
      });
  }, []);

  return <div>Status serwera: {serverState}</div>;
};

export default App;
