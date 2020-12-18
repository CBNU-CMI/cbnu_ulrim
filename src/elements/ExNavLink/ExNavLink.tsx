/* External dependencies */
import React, { useCallback } from 'react';
import { NavLink } from 'react-router-dom';

const ACTIVE_STYLE = {
  color: '#2ac1bc',
};

function ExNavLink({ to, activePath, children }) {
  const isActive = useCallback(
    (match, location) => {
      return activePath.includes(location.pathname);
    },
    [activePath],
  );

  return (
    <NavLink to={to} isActive={isActive} activeStyle={ACTIVE_STYLE}>
      {children}
    </NavLink>
  );
}

export default ExNavLink;
