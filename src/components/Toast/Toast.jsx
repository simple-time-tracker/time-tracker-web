import React from 'react';
import PropTypes from 'prop-types';

const Toast = ({ closeToast, children }) => {
  return (
    <div
      className="notification is-success"
      style={{
        margin: 'auto',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: 'max-content',
        zIndex: 10,
      }}
    >
      <button className="delete" onClick={closeToast}></button>
      {children}
    </div>
  );
};

Toast.propTypes = {
  children: PropTypes.node.isRequired,
  closeToast: PropTypes.func,
};

export default Toast;
