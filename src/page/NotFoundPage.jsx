import React from 'react';
import { useLocation } from 'react-router-dom';

const NotFoundPage = () => {
  const location = useLocation();
  return (
    <div>
      <h1 className="title">
        Page <code>{location.pathname}</code> not found
      </h1>
    </div>
  );
};

export default NotFoundPage;
