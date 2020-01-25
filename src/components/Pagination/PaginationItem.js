import React from 'react';
import PropTypes from 'prop-types';

const PaginationItem = ({ pageNumber, isActive, loadPage }) => (
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

PaginationItem.defaultProps = {
  isActive: false,
};

PaginationItem.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  isActive: PropTypes.bool.isRequired,
  loadPage: PropTypes.func.isRequired,
};

export default PaginationItem;
