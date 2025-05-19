import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

function Logout() {
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;