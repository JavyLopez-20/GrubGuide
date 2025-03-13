// Logout.js
import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

function Logout() {
  const { setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    // Add your logout logic here (e.g., clear session)
    setIsLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;