import React, { useState } from 'react';

const Login = () => {
  const [name, setName] = useState('wojtek');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.warn({ name, password });
  };

  return (
    <section>
      <div>
        <label>User name:</label>
        <input onChange={(e) => setName(e.target.value)} value={name} />
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </div>

      <button onClick={handleLogin}>log in</button>
    </section>
  );
};

export { Login };
