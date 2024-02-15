import React from 'react';
import './index.css';

const Logout = ({ onLogout }) => {
  return (
    <button className="button" onClick={onLogout}>
      Logout
    </button>
  );
};

export default Logout;

