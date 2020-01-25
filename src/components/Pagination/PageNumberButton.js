import React from 'react';
import PropTypes from 'prop-types';

const PageNumberButton = ({ pageNumber, isActive, loadPage }) => (
  <li>
    <a
      className={`pagination-link ${getIsActiveCssClass(isActive)}`}
      aria-label={`Go to page ${pageNumber}`}
      onClick={() => loadPage(pageNumber)}
    >
      {pageNumber}
    </a>
  </li>
);

const getIsActiveCssClass = (isActive) => (isActive ? 'is-current' : '');

PageNumberButton.defaultProps = {
  isActive: false,
};

PageNumberButton.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  loadPage: PropTypes.func.isRequired,
};

export default PageNumberButton;
