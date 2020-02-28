import React from 'react';
import { Link } from 'react-router-dom';
import '../style/UserIcon.css';

export default function UserIcon() {
  return (
    <Link to="/profile">
      <div data-testid="profile-top-btn" className="user-icon" />
    </Link>
  );
}
